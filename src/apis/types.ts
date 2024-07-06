export type GenreItem = {
  id: number;
  name: string;
};

export type ArtistItem = {
  id: number;
  name: string;
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
      genreName: string;
    }[];
    movie: {
      mediaType: string;
      genreId: number;
      genreName: string;
    }[];
  };
  preferredArtists: {
    artistId: number;
    artistName: string;
  }[];
};

export type SearchedWorksResponse = CommonPageable & {
  content: SearchedWork[];
};

export type SearchedWork = {
  contentId?: number;
  contentImages?: string[];
  genres?: string[];
  members?: Actor[];
  title?: string;
  viewCount?: number;
};

export type SearchedPlacesResponse = CommonPageable & {
  content: PlaceDetail[];
};

export type SearchedWorksByActorResponse = CommonPageable & {
  content: SearchedWorksByActor[];
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

export type SearchedArtistsByMemberResponse = CommonPageable & {
  content: SearchedArtistsByMember[];
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

export type CommonPageable = {
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

export type Content = {
  contentId: number;
  contentImage: string;
  contentTitle: string;
  contentViewCount: number;
};

export type FilteredContentsResponse = CommonPageable & {
  content: Content[];
};

export type ContentDetail = {
  contentId: number;
  contentImages: string[];
  genres: string[];
  members: Character[];
  title: string;
  viewCount: number;
};

export type Character = {
  name: string;
  profilePath: string;
  stageName: string;
};

export type Place = {
  businessHours: string;
  image: Image;
  isInSchedule: boolean;
  locationId: number;
  locationString: string;
  placeName: string;
  placeType: string;
  viewCount: number;
};

export type PlaceDetail = {
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

export type RelatedPlaces = CommonPageable & {
  content: PlaceDetail[];
};
