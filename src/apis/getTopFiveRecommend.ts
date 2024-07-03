import { baseInstance } from "@/apis/index.ts";

const getTopFiveRecommend = async (mediaType: string) => {
  try {
    const response = await baseInstance.get(
      "/public/content/top-viewed?mediaType=" + mediaType
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getTopFiveRecommend;
