import { baseInstance } from "@/apis/index.ts";
import { MarkerData } from "@/apis/types.ts";

const getMarker = async (mediaType: string) => {
  try {
    const response = await baseInstance.get<MarkerData[]>(
      "/public/content-location" + "?mediaType=" + mediaType
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getMarker;
