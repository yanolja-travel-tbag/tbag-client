import { baseInstance } from "@/apis/index.ts";
import { SearchedWorksByActorResponse } from "@/apis/types.ts";

const getSearchedWorksByActor = async (keyword: string) => {
  try {
    const response = await baseInstance.get<SearchedWorksByActorResponse>(
      "/public/search/actor?keyword=" + keyword
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getSearchedWorksByActor;
