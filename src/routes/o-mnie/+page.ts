import { baseUrl } from '../../constans/constans';

export const prerender = true;
export const trailingSlash = 'always';
// export const ssr = false;

export const load = async () => {
  // console.log({ dataIsLoaded });
  // console.log({ test });

  // let dataIsLoaded = false;
  async function getAboutPageData() {
    // const dataIsLoaded = get(aboutPageDataLoaded);
    // if (dataIsLoaded) return;
    // console.log('123')
    const pageDataResponse = await fetch(`${baseUrl}pages?slug=o-mnie`);
    const pageData = await pageDataResponse.json();

    const res = await fetch(`${baseUrl}media/${pageData[0].acf.main_foto_id}`);
    const data = res.json();
    const mainFoto = await data;
    return {
      mainFoto: mainFoto,
      main_text: pageData[0].acf.main_text,
    };
    // dataIsLoaded = true;


  }

  // const aboutPageData = await getAboutPageData();
  // if (aboutPageData) {
  //   console.log('aboutPageData: ', aboutPageData);
  //   aboutPageStore.set(aboutPageData);
  //   aboutPageDataLoaded.set(true);
  // }
  // return aboutPageData;
  return await getAboutPageData();
};
