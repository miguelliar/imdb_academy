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
