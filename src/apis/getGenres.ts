import { baseInstance } from "@/apis/index.ts";
import { GenreItem } from "@/apis/types.ts";

const getGenres = async () => {
  try {
    const response = await baseInstance.get<GenreItem[]>("/genres");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getGenres;
