/** @type {import('./$types').PageLoad} */

export async function load() {
  const res = await fetch('http://localhost/olejto/wp-json/wp/v2/posts');
  // const res = await fetch('http://olejtopisze.pl/index.php?rest_route=/');

  const posts = await res.json();
  if (res.ok) return { posts: posts };
  return {
    status: res.status,
    error: new Error()
  };
};
