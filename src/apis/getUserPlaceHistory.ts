import { baseInstance } from "@/apis/index.ts";
import { PlaceHistoryResponse } from "@/apis/types.ts";

const getUserPlaceHistory = async (userId: string) => {
  try {
    const response = await baseInstance.get<PlaceHistoryResponse>(
      `/user/${userId}/locations-history`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getUserPlaceHistory;
