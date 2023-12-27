/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';

import { baseUrl } from '../../../constans/constans';
import { fetchImageById } from "../../api/fetch-post-image";
export const prerender = true;

export const load: Load = async ({ params }) => {



  async function getPostData() {

    const res = await fetch(`${baseUrl}posts?slug=${params.slug}`);
    if (!res.ok) {
      console.log(res.status);
      error(404, 'Missing post data');
    }
    const postData = await res.json()

    const fetchUrls = [
      `${baseUrl}media/${postData[0]?.acf?.mobile_foto_id}`,
      `${baseUrl}media/${postData[0]?.acf?.blog_right_side_foto_id}`,
      `${baseUrl}media/${postData[0]?.acf?.blog_desktop_foto_id}`,
    ];

    const imageResponses = await Promise.all(fetchUrls.map((url) => fetch(url)));
    const imagesData = await Promise.all(imageResponses.map((res) => res.json()));

    return {
      postData,
      mobile_foto: imagesData[0],
      blog_right_side_foto: imagesData[1],
      blog_desktop_foto: imagesData[2],
    };
  }

  async function getGlobalFoto() {
    const globalRes = await fetch(`${baseUrl}pages?slug=global`);
    if (!globalRes.ok) {
      error(404, 'Missing global data in blog page');
    }
    const global = await globalRes.json();
    const id =  global[0]?.acf?.mainfoto;
    return fetchImageById(id);
  }

  return {
    post: await getPostData(),
    globalFoto: await getGlobalFoto(),
  };
};
