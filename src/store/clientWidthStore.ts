import { writable } from 'svelte/store';
import { onDestroy } from 'svelte';

export const md = writable(false);
export const lg = writable(false);
export const xl = writable(false);

function setWidth() {
  md.set(window.innerWidth > 768);
  lg.set(window.innerWidth > 1040);
  xl.set(window.innerWidth > 1280);
}

function startListening() {
  setWidth();
  window.addEventListener('resize', setWidth);
  return () => {
    window.removeEventListener('resize', setWidth);
  };
}
export function getClientWidth() {
  if (typeof window === 'undefined') return;
  const listener = startListening();
  onDestroy(listener);
}
