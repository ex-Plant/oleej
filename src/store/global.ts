import { writable } from 'svelte/store';
export const mobileMenuOpened = writable(false);
export const activePostCat = writable('');
export const loading = writable(false);
