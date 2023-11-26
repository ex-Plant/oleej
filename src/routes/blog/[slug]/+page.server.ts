// /** @type {import('./$types').PageLoad} */


import { spacesToDashes } from "../../../helpers/spacesToDashes";
import { error } from "@sveltejs/kit";

const url = 'https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/';

export async function load({ params }) {
  const postsRes = await fetch(`${url}posts`);
  const posts = await postsRes.json();
  const postBySlug = posts.find((p) => spacesToDashes(p?.acf?.slug) === params.slug);
  if (postBySlug === undefined) throw error(404, 'Not Found');

  const allMedia = await fetch(`${url}media`);
  const fotos = await allMedia.json(); // all media


  const postFoto = fotos.find(
    (fotoObject) => fotoObject.id === postBySlug?.acf?.foto_id,
  );
  return { postBySlug, postFoto };
}
