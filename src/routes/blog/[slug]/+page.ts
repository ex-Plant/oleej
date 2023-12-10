/** @type {import('./$types').PageLoad} */
import { spacesToDashes } from '../../../helpers/spacesToDashes';
import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import type { ImageType, PostType } from "../../../types";

const url = 'https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/';

export const load: Load = async ({ params }) => {
  const postsRes = await fetch(`${url}posts`);
  const posts = await postsRes.json();
  const allMedia = await fetch(`${url}media`);
  const globalRes = await fetch(`${url}pages?slug=global`);
  const fotos = await allMedia.json(); // all media
  const global = await globalRes.json();

  const globalFoto = fotos.find(
    (fotoObject: ImageType) => fotoObject.id === global[0].acf.mainfoto
  );

  async function loadPostData(slug: string) {
    let postBySlug: PostType, postFotoMobile, postSideFoto, postFotoDesktop;
    try {
      postBySlug = posts.find((p: PostType) => spacesToDashes(p?.acf?.slug) === slug);
      if (!postBySlug) throw error(404, 'Not Found');
      postFotoMobile = fotos.find(
        (fotoObject: ImageType) => fotoObject.id === postBySlug?.acf?.foto_id,
      );
      postSideFoto = fotos.find(
        (fotoObject: ImageType) => fotoObject.id === postBySlug?.acf?.blog_right_side_foto,
      );
      postFotoDesktop = fotos.find(
        (fotoObject: ImageType) => fotoObject.id === postBySlug?.acf?.hero_desktop_id,
      );
      return {
        postFotoMobile: postFotoMobile,
        postFotoDesktop: postFotoDesktop,
        postSideFoto: postSideFoto,
        postBySlug: postBySlug,
      };
    } catch (e) {
      console.error(e);
    }
  }
  if (!params.slug) throw new Error('Missing params');
  const postData = await loadPostData(params.slug);
  if (!postData) {
    throw new Error('Missing post data');
  }

  return {
      postData,
      globalFoto,
      fotos,
      posts,
  };
}
