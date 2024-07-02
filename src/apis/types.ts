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

export type SearchedWorksResponse = {
  content: SearchedWork[];
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

export type SearchedWork = {
  contentId?: number;
  contentImages?: string[];
  genres?: string[];
  members?: Actor[];
  title?: string;
  viewCount?: number;
};

export type SearchedPlacesResponse = {
  content: SearchedPlace[];
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

export type SearchedPlace = {
  businessHours: string;
  contentGenres: string[];
  contentImages: string[];
  contentTitle: string;
  createdAt: string;
  holiday: string;
  image: Image;
  latitude: number;
  locationId: number;
  locationString: string;
  longitude: number;
  phoneNumber: string;
  placeDescription: string;
  placeName: string;
  placeType: string;
  viewCount: number;
};

export type SearchedWorksByActorResponse = {
  content: SearchedWorksByActor[];
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

export type SearchedWorksByActor = {
  actorName: string;
  character: string;
  contentId: number;
  mediaType: string;
  posterPath: string;
  title: string;
  viewCount: number;
};

export type SearchedArtistsByMemberResponse = {
  content: SearchedArtistsByMember[];
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

export type SearchedArtistsByMember = {
  artistName?: string;
  contentId?: number;
  member?: Member;
  profileImage?: string;
  viewCount?: number;
  mediaType?: string;
};

export type Member = {
  id: number;
  name: string;
  profileImage: string;
};

export type Actor = {
  name: string;
  profilePath: string;
  stageName: string;
};

export type Image = {
  imageUrl: string;
  sizeHeight: number;
  sizeWidth: number;
  thumbnailUrl: string;
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
