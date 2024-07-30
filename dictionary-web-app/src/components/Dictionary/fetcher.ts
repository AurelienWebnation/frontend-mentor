import type { CustomError } from './type.ts';

export async function fetcher(url: string) {
  const response = await fetch(url);

  if (response.status === 404) {
    const error: CustomError = new Error('No Definitions Found');
    error.info =
      "Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.";
    throw error;
  }

  if (!response.ok) {
    const error: CustomError = new Error('An error occurred');
    error.info =
      'An error occurred while fetching the data. You can try the search again later or contact our support.';
    throw error;
  }

  return await response.json();
}
