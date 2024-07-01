import { baseInstance } from "@/apis/index.ts";
import { SearchedArtistsByMemberResponse } from "@/apis/types.ts";

const getSearchedArtistsByMember = async (keyword: string) => {
  try {
    const response = await baseInstance.get<SearchedArtistsByMemberResponse>(
      "/public/artist/search?keyword=" + keyword
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getSearchedArtistsByMember;
