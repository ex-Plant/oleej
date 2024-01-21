import { writable } from 'svelte/store';
import type { ImageType, PostType } from "../types";
export const activePostCat = writable('');

export const allPostsStore = writable({
  posts: [] as PostType[],
  postCategories: [] as string[],
});




export const aboutPageStore = writable({
  mainFoto: {} as ImageType,
  secondary_foto: {} as ImageType,
  small_foto: {} as ImageType,
  main_text: '',
  txt_under_pictures: '',
});

export const globalFotoStore = writable<ImageType>();
export const blogPost_desktop_fotosStore = writable([] as ImageType[]);
export const blogPost_mobile_fotosStore = writable([] as ImageType[]);
export const blogPost_right_side_fotosStore = writable([] as ImageType[]);


export const dataIsLoadedStore = writable(false);
