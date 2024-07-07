import { baseInstance } from "@/apis/index.ts";
import { PostScheduleRequest } from "@/apis/types.ts";

const postNewSchedule = async (schedule: PostScheduleRequest) => {
  const response = await baseInstance.post("/travel/request", schedule);
  return response.data;
};

export default postNewSchedule;
