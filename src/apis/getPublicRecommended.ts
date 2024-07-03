import { baseInstance } from "@/apis/index.ts";
import { PublicRecommendedContentsResponse } from "@/apis/types.ts";

const getPublicRecommended = async () => {
  try {
    const response = await baseInstance.get<PublicRecommendedContentsResponse>(
      "/public/content/recommended"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getPublicRecommended;
