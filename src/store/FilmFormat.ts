export type FilmFormat = {
  id: string;
  source: {
    titleType: string;
    primaryTitle: string;
    originalTitle: string;
    isAdult: boolean;
    startYear: number;
    endYear: number;
    runtimeMinutes: number;
    genres: string[];
    averageRating: number;
    numVotes: number;
  };
  additionalInformation?: {
    Plot: string;
    Poster: string;
  };
};

//extraer en carpeta models
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
};
