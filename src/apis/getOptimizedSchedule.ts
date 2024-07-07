import { baseInstance } from "@/apis/index.ts";

const getOptimizedSchedule = async (scheduleId: number) => {
  const response = baseInstance.get(`/travel/optimize/${scheduleId}`);
  return response;
};

export default getOptimizedSchedule;
