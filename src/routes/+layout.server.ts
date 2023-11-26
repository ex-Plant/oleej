// /** @type {import('./$types').PageLoad} */

const url = 'https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/';

export async function load({params}) {
  const postsRes = await fetch(`${url}posts`);
  const globalRes = await fetch(`${url}pages?slug=global-opotions`); // global
  const allMedia = await fetch(`${url}media`);
  const posts = await postsRes.json();
  const fotos = await allMedia.json(); // all media
  const global = await globalRes.json();

  const globalFoto = fotos.find((fotoObject) => fotoObject.id === global[0].acf.globalFoto_1);
  return { globalFoto, posts, fotos, };
}



// const categoriesRes = await fetch(`${url}categories`);
// const allCategories = await categoriesRes.json();
// const tagsRes = await fetch(`${url}tags`,);
// const tags = await tagsRes.json();
