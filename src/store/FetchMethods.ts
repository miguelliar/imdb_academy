export const searchQuery = "http://localhost:8080/api/search?q=";
export const plainSearch = "http://localhost:8080/api/search";
export const imageSearch = (id: string) =>
  `http://www.omdbapi.com/?i=${id}&apikey=c13e24cd`;

export const pagination: (a: number, b: number) => string = (
  from: number,
  size: number
) => `?from=${from}&size=${size}`;

export async function fetchURL(url: string) {
  return await fetch(url).then((data) => data.json());
}

export async function fetchCover(id: string) {
  const returned = await fetchURL(imageSearch(id));
  if (
    returned !== undefined &&
    returned["Response"] === "True" &&
    returned["Poster"] !== "N/A"
  ) {
    console.log(returned);
    return returned["Poster"];
  } else {
    return require("../assets/movie_low.jpg");
  }
}
