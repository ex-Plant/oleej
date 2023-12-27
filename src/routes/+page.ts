import type { LayoutData } from "../../.svelte-kit/types/src/routes/$types";
import { baseUrl } from "../constans/constans";
import { error } from "@sveltejs/kit";
import type { PostType } from "../types";

export const load: LayoutData = async () => {

  async function getAllPosts() {
    const allPostsRes = await fetch(`${baseUrl}posts`);
    if (!allPostsRes.ok) {
      console.log("allPostsRes: ", allPostsRes.statusText);
      error(404, 'Missing getAllPosts data from layout.ts');
    }
    const allPosts = await allPostsRes.json();
    let postCategories = allPosts.map((post: PostType) => post.acf.category);
    postCategories = [...new Set(postCategories)];

    const imageResponses = await Promise.all(
      allPosts.map((post: PostType) => fetch(`${baseUrl}media/${post.acf.mobile_foto_id}`)),
    );
    if (!imageResponses.every((res) => res.ok)) {
      imageResponses.forEach((res) => console.log("imageResponses: ", res.statusText));
      error(404, 'Missing images data from layout.ts');
    }
    const imagesData = await Promise.all(imageResponses.map((res) => res.json()));

    return {
      allPosts,
      postCategories,
      imagesData,
    };
  }

  return {
    allPosts: await getAllPosts(),
  };
};
