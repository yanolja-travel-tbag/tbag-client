import { baseInstance } from "@/apis/index.ts";

const deleteWayPoint = async (wayPointId: number) => {
  const response = await baseInstance.delete(`/travel/waypoint/${wayPointId}`);
  return response.data;
};

export default deleteWayPoint;
