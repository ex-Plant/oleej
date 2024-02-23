import { graphqlUrl } from '../constans/constans';
import type { PostType } from '../types';
import type { PageLoad } from '../../.svelte-kit/types/src/routes/o-mnie/$types';
import { allPostsQuery } from '../constans/queries';
export const trailingSlash = 'always';
// export const prerender = true;

export const load: PageLoad = async () => {
  const getData = async () => {
    const data = await fetch(graphqlUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: allPostsQuery }),
    });
    return await data.json();
  };
  const allPosts = await getData();
  const postCategories = new Set(allPosts.data.posts.nodes.map((post: PostType) => post.blogPost.category));

  return {
    allPosts,
    postCategories,
  };
};
