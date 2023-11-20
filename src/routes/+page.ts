/** @type {import('./$types').PageLoad} */

export async function load() {
  const res = await fetch('http://localhost/olejto/wp-json/wp/v2/posts');
  const posts = await res.json();
  return {
    posts,
  };
};
