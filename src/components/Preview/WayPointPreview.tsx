import { Segment } from "@/apis/types.ts";
import { Location } from "@/components/icons";
import { ComponentPropsWithoutRef } from "react";
import { ChevronRight } from "lucide-react";
import deleteWayPoint from "@/apis/deleteWayPoint.ts";
import { toast } from "sonner";

interface WayPointPreviewProps extends ComponentPropsWithoutRef<"div"> {
  wayPoint: Segment;
  isCurrentFocus: boolean;
  handleRefetchWayPoints: () => void;
}

const WayPointPreview = ({
  wayPoint,
  isCurrentFocus,
  handleRefetchWayPoints,
  ...props
}: WayPointPreviewProps) => {
  const handleDeleteWayPoint = () => {
    deleteWayPoint(wayPoint.waypointId)
      .then(() => {
        toast.success("해당 경유지가 삭제되었습니다.");
        handleRefetchWayPoints();
      })
      .catch(() => {
        toast.error("경유지 삭제에 실패했습니다.");
      });
  };
  if (isCurrentFocus) {
    return (
      <div className={"w-[300px] flex flex-col"}>
        <div
          className={
            "flex items-center justify-between h-[140px] bg-background-main rounded-t-[15px] pl-[20px] pr-[15px]"
          }>
          <div className={"flex flex-col gap-3"}>
            <p className={"flex flex-col"}>
              <span
                className={
                  "text-[14px] font-semibold text-font-head break-keep"
                }>
                {wayPoint.origin.placeName}
              </span>
              <span className={"flex justify-between"}>
                <span className={"flex gap-1 items-center"}>
                  <Location
                    width={8}
                    height={8}
                  />
                  <span className={"text-[12px] text-font-info"}>
                    {wayPoint.origin.addresses}
                  </span>
                </span>
              </span>
            </p>
            <div className={"flex"}>
              <div
                className={
                  "flex items-center bg-main-primary rounded-l-[5px] text-[12px] text-white px-[12px]"
                }>
                {wayPoint.distanceString}
              </div>
              <div
                className={
                  "flex items-center bg-white rounded-r-[5px] text-[12px] text-main-primary px-[5px]"
                }>
                {wayPoint.durationString}
              </div>
            </div>
          </div>
          <img
            src={wayPoint.origin.image}
            alt=""
            className={"w-[80px] h-[100px] rounded-[5px]"}
          />
        </div>
        <div
          className={
            "flex items-center justify-between h-[30px] bg-main-primary rounded-b-[15px] px-[18px] cursor-pointer"
          }
          onClick={handleDeleteWayPoint}>
          <span className={"text-[12px] text-white font-semibold"}>
            {"삭제하기"}
          </span>
          <ChevronRight
            width={20}
            height={20}
            color={"#fff"}
          />
        </div>
      </div>
    );
  }
  if (!isCurrentFocus) {
    return (
      <div
        className={
          "w-[300px] h-fit rounded-[15px] p-[16px] cursor-pointer bg-background-deep"
        }
        {...props}>
        <span className={"text-[14px] font-semibold text-font-head"}>
          {wayPoint.origin.placeName}
        </span>
        <span className={"flex justify-between"}>
          <span className={"flex gap-1 items-center"}>
            <Location
              width={8}
              height={8}
            />
            <span className={"text-[12px] text-font-info"}>
              {wayPoint.origin.addresses}
            </span>
          </span>
          <span className={"text-[12px] text-font-info"}>
            {wayPoint.durationString}
          </span>
        </span>
      </div>
    );
  }
};

export default WayPointPreview;
