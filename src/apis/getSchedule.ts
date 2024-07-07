import { baseInstance } from "@/apis/index.ts";
import { Schedule } from "@/apis/types.ts";

const getSchedule = async () => {
  const response = await baseInstance.get<Schedule[]>("/travel");
  return response.data;
};

export default getSchedule;
