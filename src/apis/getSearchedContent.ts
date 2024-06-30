import { baseInstance } from "@/apis/index.ts";
import { SearchedContentResponse } from "@/apis/types.ts";

const getSearchedContent = async ({
  keyword,
  page,
  size
}: {
  keyword: string;
  page: number;
  size: number;
}) => {
  try {
    const response = await baseInstance.get<SearchedContentResponse>(
      "/public/content/search?keyword=" +
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

export default getSearchedContent;
