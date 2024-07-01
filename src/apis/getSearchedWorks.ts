import { baseInstance } from "@/apis/index.ts";
import { SearchedWorksResponse } from "@/apis/types.ts";

const getSearchedWorks = async ({
  keyword,
  page,
  size
}: {
  keyword: string;
  page: number;
  size: number;
}) => {
  try {
    const response = await baseInstance.get<SearchedWorksResponse>(
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

export default getSearchedWorks;
