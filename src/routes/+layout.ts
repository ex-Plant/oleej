import { error } from '@sveltejs/kit';
import { baseUrl } from '../constans/constans';
import type { LayoutLoad } from '../../.svelte-kit/types/src/routes/$types';
import type { PostType } from '../types';
import {
  aboutPageStore,
  allPostsStore,
  blogPost_desktop_fotosStore,
  blogPost_right_side_fotosStore,
  blogPost_mobile_fotosStore,
  globalFotoStore,
  dataIsLoadedStore,
} from '../store/global';
import { get } from 'svelte/store';

//prevent svelte from refetching data on the client - store it all in the global store after initiial build load

export const load: LayoutLoad = async () => {
  const dataIsLoaded = get(dataIsLoadedStore);
  if (dataIsLoaded) return;


  async function getGlobalFoto() {
    const globalRes = await fetch(`${baseUrl}pages?slug=global`);
    if (!globalRes.ok) {
      error(404, 'Missing global data');
    }
    const globalData = await globalRes.json();
    const mainfotoId = globalData[0]?.acf?.mainfoto;
    const globalFotoRes = await fetch(`${baseUrl}media/${mainfotoId}`);
    if (!globalFotoRes.ok) {
      error(404, 'Missing global foto');
    }
    return await globalFotoRes.json();
  }

  async function getAllPosts() {
    const postsRes = await fetch(`${baseUrl}posts`);
    if (!postsRes.ok) {
      console.log('postsRes: ', postsRes.statusText);
      error(404, 'Missing getAllPosts');
    }
    const posts = await postsRes.json();
    let postCategories = posts.map((post: PostType) => post.acf.category);
    postCategories = [...new Set(postCategories)];

    return {
      posts,
      postCategories,
    };
  }

  async function getImages(acfImageField: string) {
    const postsData = await getAllPosts();
    const responseArr = await Promise.all(
      postsData.posts.map((post: PostType) =>
        fetch(`${baseUrl}media/${post.acf[acfImageField]}`),
      ),
    );
    if (!responseArr.every((res) => res.ok)) {
      responseArr.forEach((res) =>
        console.log('imageResponses: ', res.statusText),
      );
      error(404, 'Missing images data from layout.ts');
    }
    return await Promise.all(responseArr.map((res) => res.json()));
  }

  async function getAboutPageData() {
    const pageDataResponse = await fetch(`${baseUrl}pages?slug=o-mnie`);
    const pageData = await pageDataResponse.json();

    const fetchUrls = [
      `${baseUrl}media/${pageData[0].acf.main_foto_id}`,
      `${baseUrl}media/${pageData[0].acf.secondary_foto_id}`,
      `${baseUrl}media/${pageData[0].acf.small_foto_id}`,
    ];

    const imageResponses = await Promise.all(
      fetchUrls.map((url) => fetch(url)),
    );
    const imagesData = await Promise.all(
      imageResponses.map((res) => res.json()),
    );

    return {
      mainFoto: imagesData[0],
      secondary_foto: imagesData[1],
      small_foto: imagesData[2],
      main_text: pageData[0].acf.main_text,
      txt_under_pictures: pageData[0].acf.txt_under_pictures,
    };
  }

  const aboutPageData = await getAboutPageData();
  const globalFoto = await getGlobalFoto();
  const allPosts = await getAllPosts();
  const blogPost_mobile_fotos = await getImages('mobile_foto_id');
  const blogPost_right_side_fotos = await getImages('blog_right_side_foto_id');
  const blogPost_desktop_fotos = await getImages('blog_desktop_foto_id');

  globalFotoStore.set(globalFoto);
  allPostsStore.set(allPosts);
  aboutPageStore.set(aboutPageData);
  blogPost_desktop_fotosStore.set(blogPost_desktop_fotos);
  blogPost_mobile_fotosStore.set(blogPost_mobile_fotos);
  blogPost_right_side_fotosStore.set(blogPost_right_side_fotos);
  dataIsLoadedStore.set(true);
};

export const prerender = true;
export const trailingSlash = 'always';
