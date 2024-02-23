import { type Actions } from '@sveltejs/kit';
import { getPostDataQuery } from '../../../constans/queries';
import { graphqlUrl } from '../../../constans/constans';

export const load = async ({ params }) => {
  const postDataQuery = getPostDataQuery(params.slug);

  const getData = async (query: string) => {
    const data = await fetch(graphqlUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    return data.json();
  };

  return {
    post: await getData(postDataQuery),
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
