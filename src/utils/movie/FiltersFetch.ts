//Endpoint for searching
export const plainSearch = "/api/search?";

//Pagination where from is the element selected and size is the number of elements for each page
export const pagination = (from: number, size: number) =>
  `?from=${from}&size=${size}`;

const isTitleEmpty = (title: string) => title || title.trim().length === 0;

//Query to search with the title
export const titleFilterQuery = (title: string) =>
  isTitleEmpty(title) ? "" : `&q=${title}`;

//Returns the selector for the genre query
export const genresFilterQuery = (genres: string[]) =>
  !genres ? "" : genres.reduce((res, genre) => res + `&genre=${genre}`, "");

//Returns the selector for the type query
export const typeFilterQuery = (types: string[]) =>
  !types ? "" : types.reduce((res, type) => res + `&type=${type}`, "");
