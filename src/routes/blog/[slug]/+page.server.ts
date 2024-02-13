import { baseUrl } from '../../../constans/constans';
import { error } from '@sveltejs/kit';
import type { ImageType, PostType } from '../../../types';

export const prerender = true;
export const trailingSlash = 'always';
// export const config = {
//   isr: {
//     expiration: 1800,
//   }
// };

export const load = async () => {
  async function getGlobalFotoId() {
    const globalRes = await fetch(`${baseUrl}pages?slug=global`);
    if (!globalRes.ok) {
      error(404, 'Missing global data');
    }
    const globalData = await globalRes.json();
    return globalData[0]?.acf?.mainfoto;
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

  async function getImages() {
    const data = await fetch(`${baseUrl}media/`);
    return data.json();
  }

  const allPosts = await getAllPosts();
  const images = await getImages();
  const global_id = await getGlobalFotoId();
  const globalFoto = images.find((img: ImageType) => img.id === global_id);

  return {
    globalFoto,
    images,
    allPosts,
  };
};
