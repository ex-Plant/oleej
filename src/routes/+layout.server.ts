import type { Load } from "@sveltejs/kit";

const url = 'https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/';

export const load: Load = async () => {
  const postsRes = await fetch(`${url}posts`);
  const allMedia = await fetch(`${url}media`);
  const posts = await postsRes.json();
  const fotos = await allMedia.json(); // all media
  return { posts, fotos };
}
