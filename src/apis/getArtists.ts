import { baseInstance } from "@/apis/index.ts";
import { ArtistItem } from "@/apis/types.ts";

const getArtists = async () => {
  try {
    const response = await baseInstance.get<ArtistItem[]>("/artists");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getArtists;
