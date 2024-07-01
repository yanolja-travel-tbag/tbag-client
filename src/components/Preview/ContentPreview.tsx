import { Camera, Shortcut, Sort } from "@/components/icons";
import { SearchedPlace, SearchedWork } from "@/apis/types.ts";
import { SEARCH_TYPE_LABEL } from "@/constants";

interface ContentPreviewProps {
  type: "work" | "place" | "star";
  data: SearchedWork | SearchedPlace;
}

const ContentPreview = ({ type, data }: ContentPreviewProps) => {
  const isSearchedPlace = (data: SearchedPlace): data is SearchedPlace => {
    return "locationId" in data;
  };
  const isSearchedWork = (data: SearchedWork): data is SearchedWork => {
    return "genres" in data;
  };
  return (
    <div className={"w-full flex justify-between items-center p-[10px]"}>
      {/* 작품 */}
      {type === "work" && isSearchedWork(data) && (
        <div className={"flex gap-[14px]"}>
          <img
            src={data.contentImages?.[0]}
            alt={data.title}
            className={"w-[80px] h-[100px] rounded-md"}
          />
          <div className={"flex flex-col"}>
            <span className={"text-[16px] text-font-head font-semibold"}>
              {`${data.title} [${SEARCH_TYPE_LABEL[type]}명]`}
            </span>
            <p
              className={
                "flex flex-col text-font-info text-[12px] gap-0.5 mt-[8px] mb-[16px]"
              }>
              <span className={"flex gap-1 items-center"}>
                <Sort
                  width={12}
                  height={12}
                />
                <span>{data.genres?.join(", ")}</span>
              </span>
              <span className={"flex gap-1 items-center"}>
                <Camera
                  width={12}
                  height={12}
                />
                <span className={"w-[200px] truncate text-ellipsis"}>
                  {data.members
                    ?.slice(0, 3)
                    ?.map((member) => member.name)
                    .join(", ")}
                </span>
              </span>
            </p>
            <span
              className={
                "text-[10px] text-font-info"
              }>{`조회 ${data.viewCount}`}</span>
          </div>
        </div>
      )}
      {/* 장소 */}
      {type === "place" && !isSearchedWork(data) && isSearchedPlace(data) && (
        <div className={"flex gap-[14px]"}>
          <img
            src={data.contentImages[0]}
            alt={data.placeName}
            className={"w-[80px] h-[100px] rounded-md"}
          />
          <div className={"flex flex-col"}>
            <span className={"text-[16px] text-font-head font-semibold"}>
              {`${data.placeName} [${SEARCH_TYPE_LABEL[type]}명]`}
            </span>
            <p
              className={
                "flex flex-col text-font-info text-[12px] gap-0.5 mt-[8px] mb-[16px]"
              }>
              <span className={"flex gap-1 items-center"}>
                <Sort
                  width={12}
                  height={12}
                />
                <span>{data.placeType}</span>
              </span>
              <span className={"flex gap-1 items-center"}>
                <Camera
                  width={12}
                  height={12}
                />
                <span>{`${data.contentGenres[0]} | ${data.contentTitle}`}</span>
              </span>
            </p>
            <span
              className={
                "text-[10px] text-font-info"
              }>{`조회 ${data.viewCount}`}</span>
          </div>
        </div>
      )}

      {/* 연예인 */}
      <Shortcut
        width={16}
        height={16}
      />
    </div>
  );
};

export default ContentPreview;
