import { baseInstance } from "@/apis/index.ts";
import { RecommendedContentsResponse } from "@/apis/types.ts";

const getRecommended = async () => {
  const response = await baseInstance.get<RecommendedContentsResponse>(
    "/content/recommended"
  );
  return response.data;
};

export default getRecommended;
