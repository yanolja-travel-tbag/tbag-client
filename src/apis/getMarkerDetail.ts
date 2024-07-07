import { baseInstance } from "@/apis/index.ts";
import { MarkerDataDetail } from "@/apis/types.ts";

const getMarkerDetail = async (id: number) => {
  const response = await baseInstance.get<MarkerDataDetail>(
    `/public/content-location/${id}`
  );
  return response.data;
};

export default getMarkerDetail;
