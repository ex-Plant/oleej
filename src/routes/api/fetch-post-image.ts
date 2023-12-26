
import { baseUrl } from '../../constans/constans';

export async function fetchImageById(imageId: number) {
  try {
    const response = await fetch(`${baseUrl}media/${imageId}`);

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
