import { baseInstance } from "@/apis/index.ts";
import { ScheduleDetail } from "@/apis/types.ts";

const getScheduleDetail = async (scheduleId: string) => {
  const response = await baseInstance.get<ScheduleDetail>(
    `/travel/request/${scheduleId}`
  );
  return response.data;
};

export default getScheduleDetail;
