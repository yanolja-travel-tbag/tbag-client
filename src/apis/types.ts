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

export type SearchedContentResponse = {
  content: SearchedContent[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
};

export type SearchedContent = {
  contentId?: number;
  contentImages?: string[];
  genres?: string[];
  members?: Member[];
  title?: string;
  viewCount?: number;
};

export type Member = {
  name: string;
  profilePath: string;
  stageName: string;
};

export type Pageable = {
  offset: number;
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  sort: PageableSort;
  unpaged: boolean;
};

export type PageableSort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export type Sort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};
