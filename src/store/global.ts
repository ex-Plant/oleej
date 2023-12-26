import { writable } from 'svelte/store';
export const loading = writable(false);
export const postCategories = writable<string[]>([]);
export const currentCategory = writable('');
