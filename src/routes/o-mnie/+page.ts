import type { Load } from '@sveltejs/kit';
import { baseUrl } from '../../constans/constans';

export const load: Load = async () => {
  const pageDataResponse = await fetch(`${baseUrl}pages?slug=o-mnie`);
  const pageData = await pageDataResponse.json();

  const fetchUrls = [
    `${baseUrl}media/${pageData[0].acf.main_foto_id}`,
    `${baseUrl}media/${pageData[0].acf.secondary_foto_id}`,
    `${baseUrl}media/${pageData[0].acf.small_foto_id}`,
  ];


  const imageResponses = await Promise.all(fetchUrls.map((url) => fetch(url)));
  const imagesData = await Promise.all(imageResponses.map((res) => res.json()));


  return {
    mainFoto: imagesData[0],
    secondary_foto: imagesData[1],
    small_foto: imagesData[2],
      main_text: pageData[0].acf.main_text,
      secondary_text: pageData[0].acf.secondary_text,
  };
};
