/** @type {import('./$types').PageLoad} */
import { spacesToDashes } from '../../../helpers/spacesToDashes';
import { error } from '@sveltejs/kit';
import { page } from '$app/stores';

const url = 'https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/';

export async function load({ params }) {
  const postsRes = await fetch(`${url}posts`);
  const posts = await postsRes.json();
  const allMedia = await fetch(`${url}media`);
  const globalRes = await fetch(`${url}pages?slug=global-opotions`);
  const fotos = await allMedia.json(); // all media
  const global = await globalRes.json();

  const globalFoto = fotos.find(
    (fotoObject) => fotoObject.id === global[0].acf.globalFoto_1,
  );
  async function loadPostData(slug: string) {
    let postBySlug, postFoto, postSideFoto;
    try {
      postBySlug = posts.find((p) => spacesToDashes(p?.acf?.slug) === slug);
      if (postBySlug === undefined) throw error(404, 'Not Found');
      if (!postBySlug) {
        throw new Error('Missing post data');
      }
      postFoto = fotos.find(
        (fotoObject) => fotoObject.id === postBySlug?.acf?.foto_id,
      );
      postSideFoto = fotos.find(
        (fotoObject) => fotoObject.id === postBySlug?.acf?.blog_right_side_foto,
      );
      return {
        postFoto: postFoto,
        postSideFoto: postSideFoto,
        postBySlug: postBySlug,
      };
    } catch (e) {
      console.error(e);
    }
  }
  const postData = await loadPostData(params.slug);

  return {
    postData,
    globalFoto,
    fotos,
    posts,
  };
}
