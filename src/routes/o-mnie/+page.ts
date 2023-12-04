import type { Load } from '@sveltejs/kit';
import type { AboutMePageData, ImageType } from '../../types';
import { error } from "@sveltejs/kit";
const url = 'https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/';

export const load: Load = async () => {
  const pageDataRes = await fetch(`${url}pages?slug=o-mnie`);
  const allMedia = await fetch(`${url}media`);
  const fotos = await allMedia.json();
  const pageData: AboutMePageData = await pageDataRes.json();
  let mainFoto;
  let secondary_foto;
  let small_foto;
  fotos.forEach((foto: ImageType) => {
    if (foto.id === pageData[0].acf.main_foto_id) {
      mainFoto = foto;
    } else if (foto.id === pageData[0].acf.secondary_foto_id) {
      secondary_foto = foto;
    } else if (foto.id === pageData[0].acf.small_foto_id) {
      small_foto = foto;
    }
  });

     if (!pageData[0]?.acf) throw error(404, 'Not Found');
  const {main_text, txt_under_pictures} = pageData[0].acf


  return {mainFoto, secondary_foto, small_foto, main_text, txt_under_pictures };
};
