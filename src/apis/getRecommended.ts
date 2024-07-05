import { baseInstance } from "@/apis/index.ts";
import { Content } from "@/apis/types.ts";

const getRecommended = async () => {
  const response = await baseInstance.get<Content[]>("/content/recommended");
  return response.data;
};

export default getRecommended;
