import { Camera, Shortcut, Sort } from "@/components/icons";
import {
  SearchedArtistsByMember,
  PlaceDetail,
  SearchedWork,
  SearchedWorksByActor
} from "@/apis/types.ts";
import bottomSheetStore from "@/store/bottomSheetStore.ts";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/hooks/useI18n.ts";

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
    return "members" in data;
  };
  const isSearchedWorksByActor = (
    data:
      | SearchedWork
      | SearchedWorksByActor
      | SearchedArtistsByMember
      | PlaceDetail
  ): data is SearchedWorksByActor => {
    return "actorName" in data;
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

  const navigate = useNavigate();
  const t = useI18n();

  const {
    setIsPlaceDetailBottomSheetOpen,
    setPlaceDetailBottomSheetSnapPoint,
    setPlaceDetailId
  } = bottomSheetStore();
  return (
    <div className={"w-full flex justify-between items-center p-[10px]"}>
      {/* 작품 */}
      {isSearchedWork(data) && (
        <div
          className={"flex gap-[14px] cursor-pointer"}
          onClick={() => navigate(`/contents/${data.contentId}`)}>
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
                "h-full flex flex-col text-font-info text-[12px] justify-between mt-[8px]"
              }>
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
              <span className={"text-[10px] text-font-info"}>
                {t("preview.content.viewCount", { count: data.viewCount })}
              </span>
            </p>
          </div>
        </div>
      )}
      {/* 장소 */}
      {isPlaceDetail(data) && (
        <div
          className={"flex gap-[14px] cursor-pointer"}
          onClick={() => {
            navigate("/");
            setPlaceDetailId(data.locationId);
            setPlaceDetailBottomSheetSnapPoint(0.8);
            setIsPlaceDetailBottomSheetOpen(true);
          }}>
          <img
            src={
              data.image ? data.image.imageUrl : "/assets/tbag-fallback-md.png"
            }
            alt={data.placeName}
            className={"w-[80px] h-[100px] rounded-md"}
            onError={(event) => {
              event.currentTarget.src = "/assets/tbag-fallback-md.png";
            }}
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
                <span>{data.contentTitle}</span>
              </span>
            </p>
            <span className={"text-[10px] text-font-info"}>
              {t("preview.content.viewCount", { count: data.viewCount })}
            </span>
          </div>
        </div>
      )}

      {/* 필모그래피 */}
      {isSearchedWorksByActor(data) && (
        <div
          className={"flex gap-[14px] cursor-pointer"}
          onClick={() => navigate(`/contents/${data.contentId}`)}>
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
            <span className={"text-[10px] text-font-info"}>
              {t("preview.content.viewCount", { count: data.viewCount })}
            </span>
          </div>
        </div>
      )}

      {/* 아이돌 */}
      {isSearchedArtistsByMember(data) && (
        <div
          className={"flex gap-[14px] cursor-pointer"}
          onClick={() => navigate(`/contents/${data.contentId}`)}>
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
            <span className={"text-[10px] text-font-info"}>
              {t("preview.content.viewCount", { count: data.viewCount })}
            </span>
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
