import { Camera, Shortcut, Sort } from "@/components/icons";
import { SearchedPlace, SearchedWork } from "@/apis/types.ts";

interface ContentPreviewProps {
  type: "work" | "place" | "star";
  data?: SearchedWork | SearchedPlace;
}

const ContentPreview = ({ type, data }: ContentPreviewProps) => {
  const isSearchedWork = (data: SearchedWork): data is SearchedWork => {
    return "genres" in data;
  };
  return (
    <div className={"w-full flex justify-between items-center p-[10px]"}>
      {/* 작품 */}
      {type === "work" && data && isSearchedWork(data) && (
        <div className={"flex gap-[14px]"}>
          {/* TODO: 이미지 대체 */}
          <img
            src={data.contentImages?.[0]}
            alt={data.title}
            className={"w-[80px] h-[100px] rounded-md"}
          />
          <div className={"flex flex-col"}>
            <span className={"text-[16px] text-font-head font-semibold"}>
              {`${data.title} [${type}명]`}
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
      {type === "place" && (
        <div className={"flex gap-[14px]"}>
          {/* TODO: 이미지 대체 */}
          <div className={"w-[80px] h-[100px] rounded-md bg-font-info"} />
          <div className={"flex flex-col"}>
            <span className={"text-[16px] text-font-head font-semibold"}>
              {"해를 품은 달 [작품명]"}
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
                <span>{"드라마"}</span>
              </span>
              <span className={"flex gap-1 items-center"}>
                <Camera
                  width={12}
                  height={12}
                />
                <span>{"출연 “아티스트” 대표 3~4명"}</span>
              </span>
            </p>
            <span className={"text-[10px] text-font-info"}>{"조회 999+"}</span>
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
