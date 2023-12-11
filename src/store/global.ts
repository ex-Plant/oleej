import { writable } from 'svelte/store';
import type { PostType } from "../types";
export const loading = writable(false);
export const allPosts = writable<PostType[]>([]);
export const postCategories = writable<string[]>([]);
