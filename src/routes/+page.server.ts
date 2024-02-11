import { error } from '@sveltejs/kit';
import { baseUrl } from '../constans/constans';
import type { ImageType, PostType } from '../types';
import type { PageLoad } from '../../.svelte-kit/types/src/routes/o-mnie/$types';
export const prerender = true;
export const trailingSlash = 'always';

//prevent svelte from refetching data on the client - store it all in the global store after initial build load
//
export const load: PageLoad = async () => {
  // const dataIsLoaded = get(dataIsLoadedStore);
  // console.log({ dataIsLoaded });
  // if (dataIsLoaded) return;

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



  async function getImages() {
    const data = await fetch(`${baseUrl}media/`);
    return data.json();
  }

  const images: ImageType[] = await getImages();
  const allPosts = await getAllPosts();
  const mobileFotosIds = allPosts.posts.map(
    (post: PostType) => post.acf.mobile_foto_id,
  );
  const blogPost_mobile_fotos = images.filter((img) =>
    mobileFotosIds.includes(img.id),
  );


  return {
    allPosts,
    blogPost_mobile_fotos,
  };
};
