import { baseInstance } from "@/apis/index.ts";

const postUserDeactivate = (userId: string) => {
  return baseInstance.post(`/user/${userId}/deactivate`);
};

export default postUserDeactivate;
