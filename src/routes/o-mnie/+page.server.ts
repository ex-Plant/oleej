import type { Load } from '@sveltejs/kit';
import { baseUrl } from '../../constans/constans';

// todo static page  - add If you use a CI/CD pipeline, automate this process to  run whenever you update the data
//  on your WordPress backend
export const prerender = true;


export const load: Load = async () => {
  try {
    const res = await fetch(`${baseUrl}pages?slug=o-mnie`);
    const pageData = await res.json();

    const mainFotoRes = await fetch(
      `${baseUrl}media/${pageData[0].acf.main_foto_id}`,
    );
    const mainFoto = mainFotoRes.ok ? await mainFotoRes.json() : null;

    const secondaryFotoRes = await fetch(
      `${baseUrl}media/${pageData[0].acf.secondary_foto_id}`,
    );
    const secondary_foto = secondaryFotoRes.ok
      ? await secondaryFotoRes.json()
      : null;

    const smallFotoRes = await fetch(
      `${baseUrl}media/${pageData[0].acf.small_foto_id}`,
    );
    const small_foto = smallFotoRes.ok ? await smallFotoRes.json() : null;

    const { main_text, txt_under_pictures } = pageData[0].acf;
    return {
      mainFoto,
      secondary_foto,
      small_foto,
      main_text,
      txt_under_pictures,
    };
  } catch (error) {
    return {
      error: new Error(`Failed to fetch page data: ${error}`),
    };
  }
};
