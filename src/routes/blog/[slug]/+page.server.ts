import { baseUrl } from '../../../constans/constans';
import { type Actions, error } from '@sveltejs/kit';
import type { PostType } from '../../../types';

export const trailingSlash = 'always';
export const load = async ({ params }) => {
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

  async function getComments(postId: number) {
    const response = await fetch(
      `https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/comments?post=${postId}&per_page=${100}`,
    );
    return response.json();
  }

  const allPosts = await getAllPosts();
  const post = allPosts.posts.find((post: PostType) => post.slug === params.slug);

  return {
    global_id: getGlobalFotoId(),
    comments: getComments(post.id),
    images: getImages(),
    post,
    allPosts,
  };
};

export const actions: Actions = {
  add_comment: async ({ request }) => {
    const user = 'admin';
    const pass = '1wO8 OTFJ Vn4e Ex2e TTLd 2B5Q';

    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(user + ':' + pass),
    });

    const formData = Object.fromEntries(await request.formData());
    const postId = formData.post_id as string;
    const authorName = formData.author_name as string;
    const content = formData.content as string;

    // console.log('formData: ', formData);
    const response = await fetch('https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/comments', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        post: postId,
        author_name: authorName,
        content: content,
      }),
    });

    if (!response.ok) {
      return response.statusText;
      // throw new Error('Failed to submit comment');
      // console.log('response: ', response);
      // return response;
    }
    return response.statusText;
    // return response;
  },
  add_comment_response: async ({ request }) => {
    const user = 'admin';
    const pass = '1wO8 OTFJ Vn4e Ex2e TTLd 2B5Q';

    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(user + ':' + pass),
    });

    const formData = Object.fromEntries(await request.formData());
    const postId = formData.post_id as string;
    const authorName = formData.author_name as string;
    const content = formData.content as string;
    const parent = formData.parent as string;

    // console.log('formData: ', formData);
    const response = await fetch('https://serwer2304048.home.pl/wordpress/wp-json/wp/v2/comments', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        post: postId,
        author_name: authorName,
        content: content,
        parent: parent,
      }),
    });

    if (!response.ok) {
      return response.statusText;
      // throw new Error('Failed to submit comment');
      // console.log('response: ', response);
      // return response;
    }
    return response.statusText;
    // return response;
  },
};
