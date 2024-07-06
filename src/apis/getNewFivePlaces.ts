import { Place } from "@/apis/types.ts";
import { baseInstance } from "@/apis/index.ts";

const getNewFivePlaces = async (mediaType: string) => {
  try {
    const response = await baseInstance.get<Place[]>(
      "/public/content-location/latest?mediaType=" + mediaType
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getNewFivePlaces;
