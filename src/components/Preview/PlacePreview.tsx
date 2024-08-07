import { Location, MapPlus } from "@/components/icons";
import { Button } from "@/components/ui/button.tsx";
import { Place } from "@/apis/types.ts";
import bottomSheetStore from "@/store/bottomSheetStore.ts";
import { useI18n } from "@/hooks/useI18n.ts";

interface PlacePreviewProps {
  index: number;
  place: Place;
}

const PlacePreview = ({ index, place }: PlacePreviewProps) => {
  const {
    setIsPlaceDetailBottomSheetOpen,
    setPlaceDetailBottomSheetSnapPoint,
    setPlaceDetailId
  } = bottomSheetStore();
  const t = useI18n();
  return (
    <div className={"w-full h-[90px] flex justify-between items-center"}>
      <div
        className={"flex gap-[10px] items-center cursor-pointer"}
        onClick={() => {
          setPlaceDetailId(place.locationId);
          setPlaceDetailBottomSheetSnapPoint(0.8);
          setIsPlaceDetailBottomSheetOpen(true);
        }}>
        <span className={"text-[20px] font-semibold text-main-primary"}>
          {index}
        </span>
        <img
          className={"w-[70px] h-[70px] rounded-[5px]"}
          alt={place.placeName}
          src={
            place.image ? place.image.imageUrl : "/assets/tbag-fallback-sm.png"
          }
          onError={(event) => {
            event.currentTarget.src = "/assets/tbag-fallback-sm.png";
          }}
        />
        <div className={"w-[140px] h-[70px] flex flex-col justify-between"}>
          <div className={"flex flex-col"}>
            <span className={"text-[16px] font-semibold truncate"}>
              {place.placeName}
            </span>
            <div className={"flex gap-1 items-center"}>
              <Location
                width={8}
                height={11}
              />
              <span className={"text-[12px] text-font-info truncate"}>
                {place.locationString}
              </span>
            </div>
          </div>
          <span className={"text-[10px] text-font-info"}>
            {t("preview.place.viewCount", { count: place.viewCount })}
          </span>
        </div>
      </div>
      <Button
        variant={"ghost"}
        className={"hover:bg-background-section"}
        asChild>
        <div
          className={
            "flex flex-col gap-2 w-[56px] h-[66px] bg-background-section rounded-[10px] cursor-pointer"
          }>
          <MapPlus
            width={20}
            height={20}
          />
          <span className={"text-[12px] font-semibold text-main-primary"}>
            {t("preview.place.button.addSchedule")}
          </span>
        </div>
      </Button>
    </div>
  );
};

export default PlacePreview;
