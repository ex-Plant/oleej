import { baseUrl } from '../constans/constans';
import type { PostType } from '../types';
import type { PageLoad } from '../../.svelte-kit/types/src/routes/o-mnie/$types';
export const trailingSlash = 'always';

export const load: PageLoad = async () => {
  async function getAllPosts() {
    const postsRes = await fetch(`${baseUrl}posts`);
    const posts = await postsRes.json();
    let postCategories = posts.map((post: PostType) => post?.acf?.category);
    postCategories = [...new Set(postCategories)];

    return {
      posts,
      postCategories,
    };
  }
  const allPosts = await getAllPosts();

  return {
    allPosts,
  };
};
