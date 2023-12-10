import { writable } from 'svelte/store';
export const loading = writable(false);

if (loading) {
  setTimeout(() => {
    loading.set(false);
    alert('trwa to dłużej niż zwykle - sprawdź połączenie internetowe, lub spróbuj przeładować stronę');
  }, 10000);
}
