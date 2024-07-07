import { baseInstance } from "@/apis/index.ts";
import { RecommendedPlaces } from "@/apis/types.ts";

const getRecommendedPlaces = async (placeId: number) => {
  const response = await baseInstance.get<RecommendedPlaces>(
    `/public/content-location/${placeId}/recommended`
  );
  return response.data;
};

export default getRecommendedPlaces;
