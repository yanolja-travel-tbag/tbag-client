import {
  Drawer,
  DrawerContent,
  DrawerPortal
} from "@/components/ui/drawer.tsx";
import { useEffect, useState } from "react";
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
import bottomSheetStore from "@/store/bottomSheetStore.ts";
import usePrivateNavigate from "@/hooks/usePrivateNavigate.ts";
import { useI18n } from "@/hooks/useI18n.ts";

const MARKER_FILTER_LABEL = {
  drama: "filters.label.drama",
  movie: "filters.label.movie",
  artist: "filters.label.artist"
};

const TRIP_IMAGE_SRCSET = [
  "/assets/tripImage-1.png",
  "/assets/tripImage-2.png",
  "/assets/tripImage-3.png",
  "/assets/tripImage-4.png",
  "/assets/tripImage-5.png"
];

const MainBottomSheet = () => {
  const navigate = useNavigate();
  const { privateNavigate } = usePrivateNavigate();
  const [snapPoint, setSnapPoint] = useState<number | string | null>("126px");
  const [topFivePlacesFilter, setTopFivePlacesFilter] = useState("drama");
  const [newPlacesFilter, setNewPlacesFilter] = useState("drama");
  const { isRegistered } = authStore();
  const { isMainBottomSheetOpen } = bottomSheetStore();
  const { data: userSelfData } = useQuery({
    queryKey: ["selfData"],
    queryFn: getUserSelfData,
    enabled: Boolean(isRegistered)
  });
  const t = useI18n();

  const { data: topFivePlaces, refetch: refetchTopFivePlaces } = useQuery({
    queryKey: ["topFivePlaces"],
    queryFn: () => getTopFivePlaces(topFivePlacesFilter)
  });

  const { data: newFivePlaces, refetch: refetchNewFivePlaces } = useQuery({
    queryKey: ["newPlaces"],
    queryFn: () => getNewFivePlaces(newPlacesFilter)
  });

  useEffect(() => {
    refetchTopFivePlaces();
  }, [topFivePlacesFilter, refetchTopFivePlaces]);

  useEffect(() => {
    refetchNewFivePlaces();
  }, [newPlacesFilter, refetchNewFivePlaces]);

  return (
    <Drawer
      open={isMainBottomSheetOpen}
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
              <div className={"flex gap-[20px] mt-[22px]"}>
                <div
                  className={
                    "h-16 w-[74px] flex flex-col  items-center pt-[2px] pb-[6px] cursor-pointer"
                  }
                  onClick={() => navigate("/contents")}>
                  <Contents
                    width={38}
                    height={38}
                  />
                  <span className={"text-main-primary font-semibold mx-4"}>
                    {t(`nav.content`)}
                  </span>
                </div>
                <div
                  className={
                    "h-16 w-[74px] flex flex-col  items-center pt-[2px] pb-[6px] cursor-pointer"
                  }
                  onClick={() => privateNavigate("/schedule")}>
                  <Plane
                    width={38}
                    height={38}
                  />
                  <span className={"text-main-primary font-semibold mx-1"}>
                    {t(`nav.schedule`)}
                  </span>
                </div>
                <div
                  className={
                    "h-16 w-[74px] flex flex-col  items-center  pt-[2px] pb-[6px] cursor-pointer"
                  }
                  onClick={() => privateNavigate("/history")}>
                  <History
                    width={38}
                    height={38}
                  />
                  <span className={"text-main-primary font-semibold mx-2"}>
                    {t(`nav.history`)}
                  </span>
                </div>
                <div
                  className={
                    "h-16 w-[74px] flex flex-col  items-center  pt-[2px] pb-[6px] cursor-pointer"
                  }
                  onClick={() => privateNavigate("/profile")}>
                  <User
                    width={38}
                    height={38}
                  />
                  <span className={"text-main-primary font-semibold mx-5"}>
                    {t(`nav.profile`)}
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
                    {t(`main.bottomsheet.headings.intro`)}
                  </span>
                ) : (
                  <span>{t(`main.bottomsheet.headings.needLogin`)}</span>
                )}
              </h1>
              <Carousel
                opts={{
                  loop: true
                }}
                plugins={[Autoplay({ delay: 2000 })]}>
                <CarouselContent>
                  {TRIP_IMAGE_SRCSET.map((src, index) => (
                    <CarouselItem
                      key={index}
                      className={"flex flex-col gap-[10px]"}>
                      <img
                        src={src}
                        alt={`여행지 사진-${index}`}
                        className={"w-full h-[180px]"}
                      />
                      <span>
                        {t(`main.bottomsheet.headings.subIntro.${index}`)}
                      </span>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              {/*<span>{t(`main.bottomsheet.headings.subIntro`)}</span>*/}
            </div>
            <section className={"flex flex-col mt-[50px] px-[20px]"}>
              <div className={"flex justify-between"}>
                <h2 className={"text-[20px] font-semibold"}>
                  {t("main.bottomsheet.content.label.top5places")}
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
                <h2 className={"text-[20px] font-semibold"}>
                  {t("main.bottomsheet.content.label.newPlaces")}
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
