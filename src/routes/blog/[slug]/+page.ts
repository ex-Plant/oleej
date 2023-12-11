/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import type { postSlugMapType, PostType } from '../../../types';
import { fetchImageById } from '../../api/fetch-post-image';
import { baseUrl } from '../../../constans/constans';
import { allPosts, postsSlugMap } from '../../../store/global';
import { get } from "svelte/store";

export const load: Load = async ({ params }) => {
  let postData: PostType;
  const getPostFromSlug = `https://serwer2304048.home.pl/wordpress/wp-json/mycustom/v1/posts/${params.slug}`;
  const res = await fetch(getPostFromSlug);
  if (res.ok) {
    postData = await res.json();
  } else {
    throw error(404, 'Missing post data');
  }

  async function getImageData(id: number) {
    return await fetchImageById(id);
  }

  const mobile_foto = getImageData(postData.acf.mobile_foto_id);
  const blogSideFoto = getImageData(postData.acf.blog_right_side_foto_id);
  const blogDesktopFoto = getImageData(postData.acf.blog_desktop_foto_id);

  const globalRes = await fetch(`${baseUrl}pages?slug=global`);
  const global = await globalRes.json();
  const globalFoto = global[0].acf.foto_id;

  function setPostSlugMap(posts: PostType[]) {
    const newMap: postSlugMapType = {};

    posts.forEach((post, index) => {
      newMap[post.acf.slug] = {
        slug: post.acf.slug,
        index: index,
      };
    });
    return newMap;
  }

  const map = setPostSlugMap(get(allPosts));
  postsSlugMap.set(map);

  return {
    postData,
    globalFoto,
    postFotoMobile: mobile_foto,
    postFotoDesktop: blogDesktopFoto,
    postSideFoto: blogSideFoto,
  };
};
