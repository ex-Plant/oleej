import { writable } from 'svelte/store';
import type { postSlugMapType, PostType } from "../types";
export const loading = writable(false);
export const allPosts = writable<PostType[]>([]);
export const postCategories = writable<string[]>([]);
export const currentCategory = writable('');
export const postsSlugMap = writable<postSlugMapType>({});
