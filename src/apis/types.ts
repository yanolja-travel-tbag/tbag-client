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

export type UserSelfData = {
  userId: number;
  nickname: string;
  createdAt: string;
  marketingAgree: boolean;
  isActivated: boolean;
  nickChange: null;
  lastAccessed: string;
  socialId: string;
  socialType: string;
  isRegistered: boolean;
  preferredGenres: {
    drama: {
      mediaType: string;
      genreId: number;
      genreName: {
        kor: string;
        eng: string;
      };
    }[];
    movie: {
      mediaType: string;
      genreId: number;
      genreName: {
        kor: string;
        eng: string;
      };
    }[];
  };
  preferredArtists: {
    artistId: number;
    artistName: {
      kor: string;
      eng: string;
    };
  }[];
};
