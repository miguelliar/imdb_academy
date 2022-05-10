export const searchQuery = "http://localhost:8080/api/search?q=";
export const plainSearch = "http://localhost:8080/api/search";
export const pagination: (a: number, b: number) => string = (
  from: number,
  size: number
) => `?from=${from}&size=${size}`;

export async function fetchURL(url: string) {
  return await fetch(url).then((data) => data.json());
}
