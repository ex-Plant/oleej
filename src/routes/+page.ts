import type { Load } from '@sveltejs/kit';
import { baseUrl } from "../constans/constans";
import type { PostType } from "../types";

export const load: Load = async () => {
  const allPostsRes = await fetch(`${baseUrl}posts`);
  const allPosts = await allPostsRes.json();

  let postCategories = allPosts.map((post: PostType) => post.acf.category);
  postCategories = [...new Set(postCategories)];



  return {
    allPosts,
    postCategories
  }
};
