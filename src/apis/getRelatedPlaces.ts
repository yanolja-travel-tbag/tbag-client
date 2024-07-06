import { baseInstance } from "@/apis/index.ts";
import { RelatedPlaces } from "@/apis/types.ts";

export const getRelatedPlaces = async (id: string) => {
  try {
    const response = await baseInstance.get<RelatedPlaces>(
      "/content/" + id + "/related-location"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
