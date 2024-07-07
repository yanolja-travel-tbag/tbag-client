import { baseInstance } from "@/apis/index.ts";
import { PlaceDetail } from "@/apis/types.ts";

const getPlaceDetail = async (placeId: number) => {
  const response = await baseInstance.get<PlaceDetail>(
    `/public/content-location/${placeId}/detailed`
  );
  return response.data;
};

export default getPlaceDetail;
