import { baseInstance } from "@/apis/index.ts";
import { Schedule } from "@/apis/types.ts";

const postNewSchedule = async (schedule: Schedule) => {
  const response = await baseInstance.post("/travel/request", schedule);
  return response.data;
};

export default postNewSchedule;
