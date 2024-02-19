import { baseUrl } from '../../../constans/constans';
import { type Actions, error } from "@sveltejs/kit";
import type { ImageType, PostType } from '../../../types';
import * as https from "https";

// export const prerender = true;
export const trailingSlash = 'always';
// export const config = {
//   isr: {
//     expiration: 1800,
//   }
// };

export const load = async () => {
  async function getGlobalFotoId() {
    const globalRes = await fetch(`${baseUrl}pages?slug=global`);
    if (!globalRes.ok) {
      error(404, 'Missing global data');
    }
    const globalData = await globalRes.json();
    return globalData[0]?.acf?.mainfoto;
  }

  async function getAllPosts() {
    const postsRes = await fetch(`${baseUrl}posts`);
    if (!postsRes.ok) {
      console.log('postsRes: ', postsRes.statusText);
      error(404, 'Missing getAllPosts');
    }
    const posts = await postsRes.json();
    let postCategories = posts.map((post: PostType) => post.acf.category);
    postCategories = [...new Set(postCategories)];

    return {
      posts,
      postCategories,
    };
  }

  async function getImages() {
    const data = await fetch(`${baseUrl}media/`);
    return data.json();
  }

  const allPosts = await getAllPosts();
  const images = await getImages();
  const global_id = await getGlobalFotoId();
  const globalFoto = images.find((img: ImageType) => img.id === global_id);

  return {
    globalFoto,
    images,
    allPosts,
  };
};

// 8fPc BRq9 Wupy 82Ra hnZD ZHHV

export const actions: Actions = {
  add_comment: async ({ request }) => {

    const user = 'admin';
    const pass = 'fPc BRq9 Wupy 82Ra hnZD ZHHV';

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(user + ':' + pass),
    });

    const formData = Object.fromEntries(await request.formData());
    const postId = formData.post_id as string;
    const authorName = formData.author_name as string;
    const authorEmail = formData.author_email as string;
    const content = formData.content as string;
    const response = await fetch(
      'https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/comments',
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          post: postId,
          author_name: authorName,
          author_email: authorEmail,
          content: { raw: 'test' },
        }),
      },
    );

    if (!response.ok) {
      console.error('response: ', response.statusText  );
      return response.statusText;
      // throw new Error('Failed to submit comment');
      // console.log('response: ', response);
      // return response;

    }
    console.log('response: ', response.statusText  );
    return response.statusText;
    // return response;
  }
};
