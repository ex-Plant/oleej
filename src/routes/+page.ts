// // /** @type {import('./$types').PageLoad} */
//
// const url = 'https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/';
//
// export async function load() {
//   const postsRes = await fetch(`${url}posts`);
//   const globalRes = await fetch(`${url}pages?slug=global-opotions`); // global
//   const global = await globalRes.json();
//   // console.log(global);
//
//   // const categoriesRes = await fetch(`${url}categories`);
//   // const allCategories = await categoriesRes.json();
//   // const tagsRes = await fetch(`${url}tags`,);
//   // const tags = await tagsRes.json();
//
//
//   const allMedia = await fetch(`${url}media`);
//   const posts = await postsRes.json();
//   const fotos = await allMedia.json(); // all media
//
//   const globalFoto = fotos.find((fotoObject) => fotoObject.id === global[0].acf.globalFoto_1);
//   console.log({globalFoto});
//
//
//   return { globalFoto: globalFoto, posts: posts};
// }
