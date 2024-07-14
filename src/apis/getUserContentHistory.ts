import { baseInstance } from "@/apis/index.ts";
import { ContentHistoryResponse } from "@/apis/types.ts";

const getUserContentHistory = async (userId: string) => {
  try {
    const response = await baseInstance.get<ContentHistoryResponse>(
      `/user/${userId}/contents-history`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getUserContentHistory;
