
import { baseUrl } from '../../constans/constans';
import { error } from '@sveltejs/kit';

export async function fetchImageById(imageId: number) {
  const response = await fetch(`${baseUrl}media/${imageId}`);

  if (response.ok) {
    return await response.json();
  }
  console.error('Fetch error:', error,);
  throw new Error(`Error fetching image `)
}
