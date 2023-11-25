// /** @type {import('./$types').PageLoad} */ import type { PageLoad } from '../../../.svelte-kit/types/src/routes/$types';
//
// export const load: PageLoad = async () => {
//   const res = await fetch('https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/posts');
//
//   const posts = await res.json();
//   if (res.ok) return { posts: posts };
//   return {
//     status: res.status,
//     error: new Error(),
//   };
// };
