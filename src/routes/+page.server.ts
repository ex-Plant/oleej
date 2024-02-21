import { error } from '@sveltejs/kit';
import { baseUrl } from '../constans/constans';
import type { PostType } from '../types';
import type { PageLoad } from '../../.svelte-kit/types/src/routes/o-mnie/$types';
export const trailingSlash = 'always';
// export const prerender = true;

export const load: PageLoad = async () => {
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

  return {
    allPosts,
    images: getImages(),
  };
};
