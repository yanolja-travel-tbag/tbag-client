import { baseInstance } from "@/apis/index.ts";
import { SearchedWorksByActorResponse } from "@/apis/types.ts";

const getSearchedWorksByActor = async ({
  keyword,
  page,
  size
}: {
  keyword: string;
  page: number;
  size: number;
}) => {
  try {
    const response = await baseInstance.get<SearchedWorksByActorResponse>(
      "/public/actor/search?keyword=" +
        keyword +
        "&page=" +
        page +
        "&size=" +
        size
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getSearchedWorksByActor;
