import { Place } from "@/apis/types.ts";
import { baseInstance } from "@/apis/index.ts";

const getTopFivePlaces = async (mediaType: string) => {
  try {
    const response = await baseInstance.get<Place[]>(
      "/public/content/top-viewed?mediaType=" + mediaType
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getTopFivePlaces;
