import { Camera, Shortcut, Sort } from "@/components/icons";
import {
  SearchedArtistsByMember,
  PlaceDetail,
  SearchedWork,
  SearchedWorksByActor
} from "@/apis/types.ts";

interface ContentPreviewProps {
  data:
    | SearchedWork
    | PlaceDetail
    | SearchedWorksByActor
    | SearchedArtistsByMember;
}

const ContentPreview = ({ data }: ContentPreviewProps) => {
  const isPlaceDetail = (
    data:
      | SearchedWork
      | SearchedWorksByActor
      | SearchedArtistsByMember
      | PlaceDetail
  ): data is PlaceDetail => {
    return "locationId" in data;
  };
  const isSearchedWork = (
    data:
      | SearchedWork
      | SearchedWorksByActor
      | SearchedArtistsByMember
      | PlaceDetail
  ): data is SearchedWork => {
    return "genres" in data;
  };
  const isSearchedWorksByActor = (
    data:
      | SearchedWork
      | SearchedWorksByActor
      | SearchedArtistsByMember
      | PlaceDetail
  ): data is SearchedWorksByActor => {
    return "posterPath" in data;
  };
  const isSearchedArtistsByMember = (
    data:
      | SearchedWork
      | SearchedWorksByActor
      | SearchedArtistsByMember
      | PlaceDetail
  ): data is SearchedArtistsByMember => {
    return "member" in data;
  };
  return (
    <div className={"w-full flex justify-between items-center p-[10px]"}>
      {/* 작품 */}
      {isSearchedWork(data) && (
        <div className={"flex gap-[14px]"}>
          <img
            src={data.contentImages?.[0]}
            alt={data.title}
            className={"w-[80px] h-[100px] rounded-md"}
          />
          <div className={"flex flex-col"}>
            <span className={"text-[16px] text-font-head font-semibold"}>
              {`${data.title}`}
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
      {isPlaceDetail(data) && (
        <div className={"flex gap-[14px]"}>
          <img
            src={data.contentImages[0]}
            alt={data.placeName}
            className={"w-[80px] h-[100px] rounded-md"}
          />
          <div className={"flex flex-col"}>
            <span className={"text-[16px] text-font-head font-semibold"}>
              {`${data.placeName}`}
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
                <span>
                  {data.contentGenres[0]
                    ? `${data.contentGenres[0]} | ${data.contentTitle}`
                    : data.contentTitle}
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

      {/* 필모그래피 */}
      {isSearchedWorksByActor(data) && (
        <div className={"flex gap-[14px]"}>
          <img
            src={data.posterPath}
            alt={data.title}
            className={"w-[80px] h-[100px] rounded-md"}
          />
          <div className={"flex flex-col"}>
            <span className={"text-[16px] text-font-head font-semibold"}>
              {data.title}
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
                <span>{data.mediaType}</span>
              </span>
              <span className={"flex gap-1 items-center"}>
                <Camera
                  width={12}
                  height={12}
                />
                <span>{data.character}</span>
              </span>
            </p>
            <span
              className={
                "text-[10px] text-font-info"
              }>{`조회 ${data.viewCount}`}</span>
          </div>
        </div>
      )}

      {/* 아이돌 */}
      {isSearchedArtistsByMember(data) && (
        <div className={"flex gap-[14px]"}>
          <img
            src={data.member?.profileImage}
            alt={data.member?.name}
            className={"w-[80px] h-[100px] rounded-md"}
          />
          <div className={"flex flex-col"}>
            <span className={"text-[16px] text-font-head font-semibold"}>
              {data.member?.name}
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
                <span>{data.mediaType}</span>
              </span>
              <span className={"flex gap-1 items-center"}>
                <Camera
                  width={12}
                  height={12}
                />
                <span>{data.artistName}</span>
              </span>
            </p>
            <span
              className={
                "text-[10px] text-font-info"
              }>{`조회 ${data.viewCount}`}</span>
          </div>
        </div>
      )}
      <Shortcut
        width={16}
        height={16}
      />
    </div>
  );
};

export default ContentPreview;
