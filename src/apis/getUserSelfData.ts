import { baseInstance } from "@/apis/index.ts";
import { UserSelfData } from "@/apis/types.ts";

const getUserSelfData = async () => {
  try {
    const response = await baseInstance.get<UserSelfData>("/user/me");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getUserSelfData;
