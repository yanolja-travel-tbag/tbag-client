import {
  Drawer,
  DrawerContent,
  DrawerPortal
} from "@/components/ui/drawer.tsx";
import { useState } from "react";
import { Contents, History, Plane, User } from "@/components/icons";
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
import getTopFivePlaces from "@/apis/getTopFivePlaces.ts";
import PlacePreview from "@/components/Preview/PlacePreview.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import getNewFivePlaces from "@/apis/getNewFivePlaces.ts";
import FilterItem from "@/components/Filter/FilterItem.tsx";

const MARKER_FILTER_LABEL = {
  drama: "드라마",
  movie: "영화",
  artist: "아이돌"
};

const MainBottomSheet = () => {
  const navigate = useNavigate();
  const [snapPoint, setSnapPoint] = useState<number | string | null>("126px");
  const [topFivePlacesFilter, setTopFivePlacesFilter] = useState("drama");
  const [newPlacesFilter, setNewPlacesFilter] = useState("drama");
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

  const { data: newFivePlaces } = useQuery({
    queryKey: ["newPlaces"],
    queryFn: () => getNewFivePlaces(newPlacesFilter)
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
            "border-b-none z-20 mx-auto flex flex-col rounded-t-[10px] border border-gray-200 bg-white outline-0 w-[390px] h-full"
          }
          onInteractOutside={() => setSnapPoint("126px")}
          onOpenAutoFocus={(event) => event.preventDefault()}>
          <ScrollArea className={"h-[75%]"}>
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
              <div className={"flex justify-between"}>
                <h2 className={"text-[20px] font-semibold"}>
                  {"TOP 5 여행지"}
                </h2>
                <div className={"flex gap-2"}>
                  {Object.keys(MARKER_FILTER_LABEL).map((key) => (
                    <FilterItem
                      key={key}
                      filterValue={key}
                      filterLabel={
                        MARKER_FILTER_LABEL[
                          key as keyof typeof MARKER_FILTER_LABEL
                        ]
                      }
                      currentFilter={topFivePlacesFilter}
                      setFilter={setTopFivePlacesFilter}
                    />
                  ))}
                </div>
              </div>
              {/* 데이터 영역 */}
              <div
                className={
                  "flex flex-col items-center gap-2 px-[15px] mt-[30px]"
                }>
                {topFivePlaces?.map((place, index) => (
                  <PlacePreview
                    key={index}
                    index={index + 1}
                    place={place}
                  />
                ))}
              </div>
            </section>
            <section className={"flex flex-col mt-[50px] px-[20px]"}>
              <div className={"flex justify-between"}>
                <h2 className={"text-[20px] font-semibold"}>{"이달의 신규"}</h2>
                <div className={"flex gap-2"}>
                  {Object.keys(MARKER_FILTER_LABEL).map((key) => (
                    <FilterItem
                      key={key}
                      filterValue={key}
                      filterLabel={
                        MARKER_FILTER_LABEL[
                          key as keyof typeof MARKER_FILTER_LABEL
                        ]
                      }
                      currentFilter={newPlacesFilter}
                      setFilter={setNewPlacesFilter}
                    />
                  ))}
                </div>
              </div>
              {/* 데이터 영역 */}
              <div
                className={
                  "flex flex-col items-center gap-2 px-[15px] mt-[30px]"
                }>
                {newFivePlaces?.map((place, index) => (
                  <PlacePreview
                    key={index}
                    index={index + 1}
                    place={place}
                  />
                ))}
              </div>
            </section>
          </ScrollArea>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default MainBottomSheet;
