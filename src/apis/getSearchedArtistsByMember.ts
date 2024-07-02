import { baseInstance } from "@/apis/index.ts";
import { SearchedArtistsByMemberResponse } from "@/apis/types.ts";

const getSearchedArtistsByMember = async ({
  keyword,
  page,
  size
}: {
  keyword: string;
  page: number;
  size: number;
}) => {
  try {
    const response = await baseInstance.get<SearchedArtistsByMemberResponse>(
      "/public/artist/search?keyword=" +
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

export default getSearchedArtistsByMember;
