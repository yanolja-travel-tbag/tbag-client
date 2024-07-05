import { baseInstance } from "@/apis/index.ts";
import { Content } from "@/apis/types.ts";

const getTopFiveRecommend = async (mediaType: string) => {
  try {
    const response = await baseInstance.get<Content[]>(
      "/public/content/top-viewed?mediaType=" + mediaType
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getTopFiveRecommend;
