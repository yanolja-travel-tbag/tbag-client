export type GenreItem = {
  id: number;
  name: {
    kor: string;
    eng: string;
  };
};

export type ArtistItem = {
  id: number;
  name: {
    kor: string;
    eng: string;
  };
};

export type UserSignupData = {
  preferredGenres: {
    mediaType: string;
    genreIds: number[];
  }[];
  preferredArtists: {
    artistIds: number[];
  }[];
};
