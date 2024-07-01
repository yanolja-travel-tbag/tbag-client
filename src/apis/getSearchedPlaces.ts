import { baseInstance } from "@/apis/index.ts";
import { SearchedPlacesResponse } from "@/apis/types.ts";

const getSearchedPlaces = async ({
  keyword,
  page,
  size
}: {
  keyword: string;
  page: number;
  size: number;
}) => {
  try {
    const response = await baseInstance.get<SearchedPlacesResponse>(
      "/public/content-location/search?keyword=" +
        keyword +
        "&page=" +
        page +
        "&size=" +
        size
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getSearchedPlaces;
