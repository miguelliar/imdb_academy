import { FilmFormat } from "@/models/MovieModel";

export const filmProject: FilmFormat = {
  id: "1",
  source: {
    titleType: "tvEpisode",
    primaryTitle: "Episode test",
    originalTitle: "Episode test",
    isAdult: false,
    startYear: 2000,
    endYear: 2001,
    runtimeMinutes: 45,
    genres: ["News", "Talk-Show"],
    averageRating: 7,
    numVotes: 10,
  },
  additionalInformation: {
    Plot: "The plot of the film. Best film you've ever seen.",
    Poster: "",
  },
};
