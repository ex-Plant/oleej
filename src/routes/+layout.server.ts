// /** @type {import('./$types').PageLoad} */

import type { ImageType } from "../types";

const url = 'https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/';

export async function load() {
  const postsRes = await fetch(`${url}posts`);
  const globalRes = await fetch(`${url}pages?slug=global-opotions`); // global
  const allMedia = await fetch(`${url}media`);
  const allCategoriesRes = await fetch(`${url}categories`);
  const posts = await postsRes.json();
  const fotos = await allMedia.json(); // all media
  const categories = await allCategoriesRes.json(); // all categories
  const global = await globalRes.json();
  const globalFoto = fotos.find((fotoObject: ImageType) => fotoObject.id === global[0].acf.globalFoto_1);
  return { globalFoto, posts, fotos, categories };
}
