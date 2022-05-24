/**
 * Fetches a response in the form of a json object
 * @param url to fetch from
 */
export async function fetchURL(url: string) {
  return await fetch(url).then((data) => data.json());
}
