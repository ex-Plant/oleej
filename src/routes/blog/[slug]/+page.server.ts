// /** @type {import('./$types').PageLoad} */

import { customSanitization } from "../../../helpers/customSanitization";

const url = 'https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/';

export async function load({ params }) {
  const postsRes = await fetch(`${url}posts`);
  const allMedia = await fetch(`${url}media`);
  const posts = await postsRes.json();
  const fotos = await allMedia.json(); // all media
  const postBySlug = posts.find((p) => p.acf.slug === params.slug);
  const postFoto = fotos.find(
    (fotoObject) => fotoObject.id === postBySlug.acf.foto_id,
  );

  let {post_content} = postBySlug;
 post_content = customSanitization(post_content);

  return { postBySlug, postFoto, post_content };
}
