import { baseUrl } from '../../constans/constans';

// export const prerender = true;
export const trailingSlash = 'always';
export const load = async () => {
  async function getAboutPageData() {
    const pageDataResponse = await fetch(`${baseUrl}pages?slug=o-mnie`);
    const pageData = await pageDataResponse.json();

    const res = await fetch(`${baseUrl}media/${pageData[0].acf.main_foto_id}`);
    const data = res.json();
    const mainFoto = await data;
    return {
      mainFoto: mainFoto,
      main_text: pageData[0].acf.main_text,
    };
  }

  return await getAboutPageData();
};
