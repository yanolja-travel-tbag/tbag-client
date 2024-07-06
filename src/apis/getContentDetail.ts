import { ContentDetail } from "@/apis/types.ts";
import { baseInstance } from "@/apis/index.ts";

const getContentDetail = async (id: string) => {
  try {
    const response = await baseInstance.get<ContentDetail>("/content/" + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getContentDetail;
