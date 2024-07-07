import { baseInstance } from "@/apis/index.ts";

const postAddToSchedule = async ({
  travelRequestId,
  locationId
}: {
  travelRequestId: number;
  locationId: number;
}) => {
  const response = await baseInstance.post("/travel/waypoint", {
    travelRequestId,
    locationId
  });
  return response.data;
};

export default postAddToSchedule;
