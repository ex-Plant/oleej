import { error } from '@sveltejs/kit';
import { baseUrl } from '../constans/constans';
import type { PostType } from '../types';
import type { PageLoad } from '../../.svelte-kit/types/src/routes/o-mnie/$types';

export const load: PageLoad = async () => {
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
  //
  // const key = import.meta.env.VITE_MAILCHIMP_API;
  // const server = import.meta.env.VITE_MAILCHIMP_SERVER;
  //
  // mailchimp.setConfig({
  //   apiKey: key,
  //   server: server,
  // });

  // async function getAllFunctions() {
  //   const allAvailableFunctions = await mailchimp;
  //
  //   const lists = await mailchimp.lists.getAllLists();
  //   console.log(allAvailableFunctions);
  //   // console.log('allAvailableFunctions: ', allAvailableFunctions);
  // }

  // async function getAllLists() {
  //   const lists = await mailchimp.lists.getAllLists();
  //   console.log(lists);
  //   return
  //   // console.log('allAvailableFunctions: ', allAvailableFunctions);
  // }

// const allLists = await getAllLists()

  // const addMember = async () => {
  //   const response = await mailchimp.lists.addListMember("40dad5cfd7", {
  //     email_address: "kooo@gmail.com",
  //     status: "pending",
  //   });
  //   console.log(response);
  // };
  //
  // const addMember = async () => {
  //   const response = await mailchimp.lists.setListMember(
  //     '40dad5cfd7',
  //     'subscriber_hash',
  //     { email_address: 'Marcel81@gmail.com', status_if_new: 'pending' },
  //   );
  //   console.log(response);
  // };

  // addMember();

  const allPosts = await getAllPosts();

  return {
    allPosts,
  };
};
