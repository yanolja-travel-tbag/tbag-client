import { baseInstance } from "@/apis/index.ts";

const postUserSignout = async () => {
  try {
    const response = await baseInstance.post("/auth/logout");
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default postUserSignout;
