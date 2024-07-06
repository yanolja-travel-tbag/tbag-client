import {
  Drawer,
  DrawerContent,
  DrawerPortal
} from "@/components/ui/drawer.tsx";
import { useState } from "react";
import {
  Contents,
  History,
  Location,
  MapPlus,
  Plane,
  User
} from "@/components/icons";
import authStore from "@/store/authStore.ts";
import { useQuery } from "@tanstack/react-query";
import getUserSelfData from "@/apis/getUserSelfData.ts";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel.tsx";
import { useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button.tsx";
import getTopFivePlaces from "@/apis/getTopFivePlaces.ts";

const MARKER_FILTER_LABEL = {
  drama: "드라마",
  movie: "영화",
  artist: "아이돌"
};

const MainBottomSheet = () => {
  const navigate = useNavigate();
  const [snapPoint, setSnapPoint] = useState<number | string | null>("126px");
  const [topFivePlacesFilter, setTopFivePlacesFilter] = useState<
    "drama" | "movie" | "artist"
  >("drama");
  const [newPlacesFilter, setNewPlacesFilter] = useState<
    "drama" | "movie" | "artist"
  >("drama");
  const { isRegistered } = authStore();
  const { data: userSelfData } = useQuery({
    queryKey: ["selfData"],
    queryFn: getUserSelfData,
    enabled: Boolean(isRegistered)
  });

  const { data: topFivePlaces } = useQuery({
    queryKey: ["topFivePlaces"],
    queryFn: () => getTopFivePlaces(topFivePlacesFilter)
  });
  return (
    <Drawer
      open={true}
      dismissible={false}
      modal={false}
      snapPoints={["126px", 0.8]}
      activeSnapPoint={snapPoint}
      setActiveSnapPoint={setSnapPoint}>
      <DrawerPortal>
        <DrawerContent
          className={
            "border-b-none z-20 mx-auto flex h-full flex-col rounded-t-[10px] border border-gray-200 bg-white outline-0 w-[390px]"
          }
          onInteractOutside={() => setSnapPoint("126px")}
          onOpenAutoFocus={(event) => event.preventDefault()}>
          <div className={"bg-white flex flex-col items-center"}>
            <div className={"flex gap-[22px] mt-[22px]"}>
              <div
                className={
                  "h-16 flex flex-col  items-center pt-[2px] pb-[6px] cursor-pointer"
                }
                onClick={() => navigate("/contents")}>
                <Contents
                  width={38}
                  height={38}
                />
                <span className={"text-main-primary font-semibold mx-4"}>
                  {"콘텐츠"}
                </span>
              </div>
              <div
                className={
                  "h-16 flex flex-col  items-center pt-[2px] pb-[6px] "
                }>
                <Plane
                  width={38}
                  height={38}
                />
                <span className={"text-main-primary font-semibold mx-1"}>
                  {"여행 일정"}
                </span>
              </div>
              <div
                className={
                  "h-16 flex flex-col  items-center  pt-[2px] pb-[6px] "
                }>
                <History
                  width={38}
                  height={38}
                />
                <span className={"text-main-primary font-semibold mx-2"}>
                  {"히스토리"}
                </span>
              </div>
              <div
                className={
                  "h-16 flex flex-col  items-center  pt-[2px] pb-[6px] "
                }>
                <User
                  width={38}
                  height={38}
                />
                <span className={"text-main-primary font-semibold mx-5"}>
                  {"마이"}
                </span>
              </div>
            </div>
            <div
              className={"h-0.5 border-2 border-background-deep w-full mt-5"}
            />
          </div>
          <div className={"flex flex-col p-5 mt-[11px] gap-[10px]"}>
            <h1 className={"text-[20px] font-semibold"}>
              {isRegistered ? (
                <span>
                  <span className={"text-point-high"}>
                    {userSelfData?.nickname}
                  </span>
                  님을 위한 여행이에요{" "}
                </span>
              ) : (
                <span>로그인 후 이용해주세요</span>
              )}
            </h1>
            <Carousel
              opts={{
                loop: true
              }}
              plugins={[Autoplay({ delay: 2000 })]}>
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    {/* TODO: 제주도 풍경 이미지로 대체 */}
                    <div
                      className={
                        "w-full h-[180px] bg-background-deep rounded-[8px] text-black flex items-center justify-center"
                      }>{`여행지 사진-${index}`}</div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <span>{"푸른 바다의 전설, 제주도로 떠나요"}</span>
          </div>
          <section className={"flex flex-col mt-[50px] px-[20px]"}>
            {/* 필터 영역 */}
            <div className={"flex justify-between"}>
              <h2 className={"text-[20px] font-semibold"}>{"TOP 5 여행지"}</h2>
              <div className={"flex gap-2"}>
                <div
                  className={clsx(
                    "w-fit h-8 z-10 rounded-[50px] cursor-pointer",
                    "flex items-center justify-center text-[12px] border border-font-info",
                    topFivePlacesFilter === "drama"
                      ? "bg-font-body text-white"
                      : "bg-white text-font-info"
                  )}
                  onClick={() => setTopFivePlacesFilter("drama")}>
                  <span className={"my-2 mx-4"}>
                    {MARKER_FILTER_LABEL.drama}
                  </span>
                </div>
                <div
                  className={clsx(
                    "w-fit h-8 z-10 rounded-[50px] cursor-pointer",
                    "flex items-center justify-center text-[12px] border border-font-info",
                    topFivePlacesFilter === "movie"
                      ? "bg-font-body text-white"
                      : "bg-white text-font-info"
                  )}
                  onClick={() => setTopFivePlacesFilter("movie")}>
                  <span className={"my-2 mx-4"}>
                    {MARKER_FILTER_LABEL.movie}
                  </span>
                </div>
                <div
                  className={clsx(
                    "w-fit h-8 z-10 rounded-[50px] cursor-pointer",
                    "flex items-center justify-center text-[12px] border border-font-info",
                    topFivePlacesFilter === "artist"
                      ? "bg-font-body text-white"
                      : "bg-white text-font-info"
                  )}
                  onClick={() => setTopFivePlacesFilter("artist")}>
                  <span className={"my-2 mx-4"}>
                    {MARKER_FILTER_LABEL.artist}
                  </span>
                </div>
              </div>
            </div>
            {/* 데이터 영역 */}
            <div className={"flex justify-between items-center"}>
              <div className={"flex gap-2 items-center"}>
                <span className={"text-[20px] font-semibold text-main-primary"}>
                  1
                </span>
                <div
                  className={
                    "w-[70px] h-[70px] bg-background-section rounded-[5px]"
                  }
                />
                <div className={"flex flex-col"}>
                  <span className={"text-[16px] font-semibold"}>
                    {"제주도"}
                  </span>
                  <div className={"flex gap-1 items-center"}>
                    <Location
                      width={8}
                      height={11}
                    />
                    <span className={"text-[12px] text-font-info"}>
                      {"위치 정보"}
                    </span>
                  </div>
                  <span className={"text-[10px] text-font-info mt-[16px]"}>
                    {"조회수 999+"}
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
                  <span
                    className={"text-[12px] font-semibold text-main-primary"}>
                    일정 담기
                  </span>
                </div>
              </Button>
            </div>
          </section>
          <section className={"flex flex-col mt-[50px]"}>
            <div className={"flex justify-between px-[20px]"}>
              <h2 className={"text-[20px] font-semibold"}>{"이달의 신규"}</h2>
              <div className={"flex gap-2"}>
                <div
                  className={clsx(
                    "w-fit h-8 z-10 rounded-[50px] cursor-pointer",
                    "flex items-center justify-center text-[12px] border border-font-info",
                    newPlacesFilter === "drama"
                      ? "bg-font-body text-white"
                      : "bg-white text-font-info"
                  )}
                  onClick={() => setNewPlacesFilter("drama")}>
                  <span className={"my-2 mx-4"}>
                    {MARKER_FILTER_LABEL.drama}
                  </span>
                </div>
                <div
                  className={clsx(
                    "w-fit h-8 z-10 rounded-[50px] cursor-pointer",
                    "flex items-center justify-center text-[12px] border border-font-info",
                    newPlacesFilter === "movie"
                      ? "bg-font-body text-white"
                      : "bg-white text-font-info"
                  )}
                  onClick={() => setNewPlacesFilter("movie")}>
                  <span className={"my-2 mx-4"}>
                    {MARKER_FILTER_LABEL.movie}
                  </span>
                </div>
                <div
                  className={clsx(
                    "w-fit h-8 z-10 rounded-[50px] cursor-pointer",
                    "flex items-center justify-center text-[12px] border border-font-info",
                    newPlacesFilter === "artist"
                      ? "bg-font-body text-white"
                      : "bg-white text-font-info"
                  )}
                  onClick={() => setNewPlacesFilter("artist")}>
                  <span className={"my-2 mx-4"}>
                    {MARKER_FILTER_LABEL.artist}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default MainBottomSheet;
