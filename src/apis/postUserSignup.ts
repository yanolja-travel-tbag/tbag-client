import { baseInstance } from "@/apis/index.ts";
import { UserSignupData } from "@/apis/types.ts";

const postUserSignup = async (userId: string, data: UserSignupData) => {
  try {
    const res = await baseInstance.post(
      `/user/${userId}/update-registration`,
      data,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default postUserSignup;
