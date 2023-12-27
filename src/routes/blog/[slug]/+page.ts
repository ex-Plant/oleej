/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import type { PostType } from '../../../types';
import { fetchImageById } from '../../api/fetch-post-image';
import { baseUrl } from '../../../constans/constans';
import { spacesToDashes } from '../../../helpers/spacesToDashes';

export const load: Load = async ({ params }) => {

  async function getGlobalFoto() {
    const globalRes = await fetch(`${baseUrl}pages?slug=global`);
    const global = await globalRes.json();
    return global[0]?.acf?.foto_id;
  }

  async function getAllPosts() {
    const allPostsRes = await fetch(`${baseUrl}posts`);

    if (!allPostsRes.ok) {
      error(404, 'Missing posts data');
    }

    return await allPostsRes.json();
  }

  async function getPostData() {

    const data = await getAllPosts();

    const postData = data.find(
      (post: PostType) => spacesToDashes(post.acf.slug) === params.slug,
    );

    const mobile_foto = await fetchImageById(postData?.acf?.mobile_foto_id);

    const blog_right_side_foto = await fetchImageById(
      postData?.acf?.blog_right_side_foto_id,
    );

    const blog_desktop_foto = await fetchImageById(
      postData?.acf?.blog_desktop_foto_id,
    );

    return {
      postData,
      mobile_foto,
      blog_right_side_foto,
      blog_desktop_foto,
    };
  }

  return {
    post: await getPostData(),
    globalFoto: await getGlobalFoto(),
    allPosts: await getAllPosts(),
  };
};
