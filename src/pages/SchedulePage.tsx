import { Button } from "@/components/ui/button.tsx";
import { Inbox, MapPlus } from "@/components/icons";
import { Container as MapContainer } from "react-naver-maps";
import { MARKER_ARTIST, MARKER_DRAMA, MARKER_MOVIE } from "@/constants/mock.ts";
import SchedulePageMap from "@/components/Map/SchedulePageMap.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select.tsx";
import AddNewScheduleDialog from "@/components/Dialog/AddNewScheduleDialog.tsx";
import getSchedule from "@/apis/getSchedule.ts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import getScheduleDetail from "@/apis/getScheduleDetail.ts";
import WayPointPreview from "@/components/Preview/WayPointPreview.tsx";
import { toast } from "sonner";
import getOptimizedSchedule from "@/apis/getOptimizedSchedule.ts";
import { useI18n } from "@/hooks/useI18n.ts";

const TEMP_MARKER_DATA = [...MARKER_ARTIST, ...MARKER_DRAMA, ...MARKER_MOVIE];

const SchedulePage = () => {
  const [currentScheduleId, setCurrentScheduleId] = useState<string | null>(
    null
  );
  const [currentWayPointId, setCurrentWayPointId] = useState<string | null>(
    null
  );
  const t = useI18n();
  const { data: userSchedule } = useQuery({
    queryKey: ["userSchedule"],
    queryFn: getSchedule
  });
  const { data: scheduleDetail, refetch: refetchScheduleDetail } = useQuery({
    queryKey: ["scheduleDetail", currentScheduleId],
    queryFn: () => getScheduleDetail(currentScheduleId!),
    enabled: Boolean(currentScheduleId)
  });

  const handleOptimizeSchedule = (scheduleId: number) => {
    toast.promise(
      getOptimizedSchedule(scheduleId).then(() => refetchScheduleDetail()),
      {
        loading: "여행 경로를 최적화하고 있습니다...",
        success: "여행 경로가 최적화되었습니다!",
        error: "여행 경로 최적화에 실패했습니다."
      }
    );
  };
  return (
    <div className={"flex flex-col px-[20px] items-center"}>
      <div className={"w-full flex justify-between py-[17px]"}>
        <AddNewScheduleDialog
          trigger={
            <Button
              variant={"ghost"}
              className={
                "w-fit h-[34px] border border-main-secondary rounded-[40px] shadow-md"
              }>
              {t("schedule.button.label.addNewSchedule")}
            </Button>
          }
          refetchUserSchedule={refetchScheduleDetail}
        />
        <button
          className={
            "w-[32px] h-[32px] bg-main-primary rounded-full flex justify-center items-center shadow-md"
          }
          onClick={() => toast.info("준비중인 페이지입니다!")}>
          <Inbox
            width={22}
            height={22}
            className={"z-1"}
          />
        </button>
      </div>
      <div className={"w-[350px] h-[200px] rounded-xl overflow-hidden"}>
        <MapContainer style={{ width: "360px", height: "210px" }}>
          <SchedulePageMap markerData={TEMP_MARKER_DATA} />
        </MapContainer>
      </div>
      <div
        className={
          "flex w-full justify-between items-center my-[25px] pl-[10px]"
        }>
        <span
          className={
            "w-[160px] h-[40px] text-[12px] bg-background-section rounded-[5px] text-center flex flex-col items-center justify-center"
          }>
          {currentScheduleId ? (
            <>
              <span>
                {
                  userSchedule?.find((schedule) => {
                    return schedule.id === Number(currentScheduleId);
                  })?.startDate
                }
              </span>
              <span>
                {`~ ${
                  userSchedule?.find((schedule) => {
                    return schedule.id === Number(currentScheduleId);
                  })?.endDate
                }
              `}
              </span>
            </>
          ) : (
            <span>{t("schedule.callout.label.pleaseSelectSchedule")}</span>
          )}
        </span>
        <Select onValueChange={(value) => setCurrentScheduleId(value)}>
          <SelectTrigger className={"w-[135px] h-[31px]"}>
            <SelectValue
              placeholder={t("schedule.dropdown.label.selectSchedule")}
            />
          </SelectTrigger>
          <SelectContent>
            {userSchedule?.map((schedule) => (
              <SelectItem
                value={schedule.id?.toString()}
                key={schedule.id}>
                {schedule.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className={"flex flex-col items-center gap-[15px] w-full"}>
        {scheduleDetail?.segments.map((segment) => (
          <WayPointPreview
            wayPoint={segment}
            key={segment.waypointId}
            isCurrentFocus={segment.waypointId === Number(currentWayPointId)}
            onClick={() => setCurrentWayPointId(segment.waypointId.toString())}
            handleRefetchWayPoints={refetchScheduleDetail}
          />
        ))}
      </div>
      <div className={"flex flex-col items-center gap-[15px] my-[17px]"}>
        <div
          className={
            "flex justify-center items-center gap-2 h-[33px] border border-main-primary rounded-[40px] px-[24px] py-[8px]"
          }>
          <span className={"text-[12px] text-main-primary"}>
            {t("schedule.label.totalTime")}
          </span>
          <span className={"text-[12px] text-font-head font-semibold"}>
            {scheduleDetail?.totalDurationString || "-"}
          </span>
        </div>
        <Button
          className={"w-[330px] h-[56px] bg-point-high rounded-[10px]"}
          onClick={() => {
            if (!currentScheduleId) {
              return;
            }
            handleOptimizeSchedule(Number(currentScheduleId));
          }}
          disabled={!currentScheduleId}>
          <span className={"flex gap-2 text-white text-[16px]"}>
            <MapPlus
              fill={"#fff"}
              width={20}
              height={20}
            />
            {t("schedule.button.label.optimize")}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SchedulePage;
