import { baseInstance } from "@/apis/index.ts";
import { FilteredContentsResponse } from "@/apis/types.ts";

const getFilteredContents = async ({
  mediaType,
  genreId
}: {
  mediaType: string;
  genreId?: string;
}) => {
  try {
    const response = await baseInstance.get<FilteredContentsResponse>(
      "/public/content/filter?mediaType=" +
        mediaType +
        (genreId ? "&genreId=" + genreId : "")
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getFilteredContents;
