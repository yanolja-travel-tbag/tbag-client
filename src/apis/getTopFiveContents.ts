import { baseInstance } from "@/apis/index.ts";
import { Content } from "@/apis/types.ts";

const getTopFiveContents = async (mediaType: string) => {
  try {
    const response = await baseInstance.get<Content[]>(
      "/public/content/top-viewed?mediaType=" + mediaType
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getTopFiveContents;
