import { Location, MapPlus } from "@/components/icons";
import { Button } from "@/components/ui/button.tsx";
import { Place } from "@/apis/types.ts";

interface PlacePreviewProps {
  index: number;
  place: Place;
}

const PlacePreview = ({ index, place }: PlacePreviewProps) => {
  return (
    <div className={"w-full h-[90px] flex justify-between items-center"}>
      <div className={"flex gap-[10px] items-center"}>
        <span className={"text-[20px] font-semibold text-main-primary"}>
          {index}
        </span>
        <img
          className={"w-[70px] h-[70px] rounded-[5px]"}
          alt={place.placeName}
          src={place.image.thumbnailUrl}
          onError={(event) => {
            event.currentTarget.src = "/assets/tbag-logo.png";
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
            {`조회수 ${place.viewCount}`}
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
            일정 담기
          </span>
        </div>
      </Button>
    </div>
  );
};

export default PlacePreview;
