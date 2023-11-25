// /** @type {import('./$types').PageLoad} */

const url = 'https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/';

export async function load({params}) {
  const postsRes = await fetch(`${url}posts`);

  const globalRes = await fetch(`${url}pages?slug=global-opotions`); // global
  const global = await globalRes.json();

  // const categoriesRes = await fetch(`${url}categories`);
  // const allCategories = await categoriesRes.json();
  // const tagsRes = await fetch(`${url}tags`,);
  // const tags = await tagsRes.json();


  const allMedia = await fetch(`${url}media`);
  const posts = await postsRes.json();
  const fotos = await allMedia.json(); // all media

  const post = posts.find((p) => p.acf.slug === params.slug);
  const { foto } = post.acf;

  const fotoData = fotos.find((fotoObject) => fotoObject.id === foto);
  const globalFoto = fotos.find((fotoObject) => fotoObject.id === global[0].acf.globalFoto_1);

  let category: string;

  switch (post.categories[0]) {
    case 1:
      category = 'historie';
      break;
    case 2:
      category = 'na poważnie';
      break;
    case 3:
      category = 'polecane';
      break;
    default:
      category = '';
      break;
  }

  return { post, category, fotoData, globalFoto };
}
