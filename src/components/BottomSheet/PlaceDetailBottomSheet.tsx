import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import {
  Drawer,
  DrawerContent,
  DrawerPortal
} from "@/components/ui/drawer.tsx";
import bottomSheetStore from "@/store/bottomSheetStore.ts";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel.tsx";
import { useQuery } from "@tanstack/react-query";
import getPlaceDetail from "@/apis/getPlaceDetail.ts";
import Autoplay from "embla-carousel-autoplay";
import { clsx } from "clsx";
import { Badge } from "@/components/ui/badge.tsx";
import {
  Contact,
  Instagram,
  Link,
  Location,
  MapPlus,
  Schedule,
  Share
} from "@/components/icons";
import { Clock4 } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import Divider from "@/components/Divider/Divider.tsx";
import getRecommendedPlaces from "@/apis/getRecommendedPlaces.ts";
import ContentPreview from "@/components/Preview/ContentPreview.tsx";

const PlaceDetailBottomSheet = () => {
  const {
    isPlaceDetailBottomSheetOpen,
    placeDetailBottomSheetSnapPoint,
    setPlaceDetailBottomSheetSnapPoint,
    placeDetailId
  } = bottomSheetStore();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: placeDetail } = useQuery({
    queryKey: ["placeDetail", placeDetailId],
    queryFn: () => getPlaceDetail(placeDetailId!),
    enabled: Boolean(placeDetailId)
  });
  const { data: recommendedPlaces } = useQuery({
    queryKey: ["recommendedPlaces", placeDetailId],
    queryFn: () => getRecommendedPlaces(placeDetailId!),
    enabled: Boolean(placeDetailId)
  });

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCurrentSlide(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);
  return (
    <Drawer
      open={isPlaceDetailBottomSheetOpen}
      dismissible={false}
      modal={false}
      snapPoints={["126px", 0.8]}
      activeSnapPoint={placeDetailBottomSheetSnapPoint}
      setActiveSnapPoint={setPlaceDetailBottomSheetSnapPoint}>
      <DrawerPortal>
        <DrawerContent
          className={
            "border-b-none z-20 mx-auto flex flex-col rounded-t-[10px] border border-gray-200 bg-white outline-0 w-[390px] h-full"
          }
          onInteractOutside={() => setPlaceDetailBottomSheetSnapPoint("126px")}
          onOpenAutoFocus={(event) => event.preventDefault()}>
          {placeDetail && (
            <ScrollArea className={"h-[75%]"}>
              <section className={"flex flex-col px-[20px] pt-[40px]"}>
                <Carousel
                  opts={{
                    loop: true
                  }}
                  setApi={setCarouselApi}
                  plugins={[Autoplay({ delay: 5000 })]}>
                  <CarouselContent>
                    {placeDetail?.contentImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={image}
                          alt={`컨텐츠 이미지-${index}`}
                          className={"w-[350px] h-[280px] rounded-[8px]"}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div
                  className={"flex justify-center gap-1 mt-[20px] mb-[40px]"}>
                  {placeDetail?.contentImages.map((_, index) => (
                    <div
                      className={clsx(
                        "cursor-pointer",
                        index === currentSlide - 1
                          ? "w-5 h-2 bg-main-tertiary rounded-[5px]"
                          : "w-2 h-2 bg-font-disable rounded-full"
                      )}
                      key={index}
                      onClick={() => carouselApi?.scrollTo(index)}
                    />
                  ))}
                </div>
                <h1
                  className={
                    "text-[24px] font-semibold text-font-head truncate"
                  }>
                  {placeDetail.placeName}
                </h1>
                <span className={"text-[16px] font-semibold underline"}>
                  {placeDetail.contentTitle}
                </span>
                <div className={"flex flex-col gap-4 mt-[15px] mb-[20px]"}>
                  <div className={"flex gap-2"}>
                    {placeDetail.contentGenres.map((genre, index) => (
                      <Badge
                        key={index}
                        variant={"secondary"}
                        className={
                          "px-[12px] py-[6px] text-font-body bg-background-deep"
                        }>
                        <span className={"mx-1"}>{genre}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className={"flex flex-col gap-1"}>
                  <div className={"flex flex-col gap-2 mb-[30px]"}>
                    <p className={"flex gap-1 items-center"}>
                      <Location
                        width={12}
                        height={12}
                      />
                      <span className={"text-font-info text-[14px]"}>
                        {placeDetail.locationString}
                      </span>
                    </p>
                    <p className={"flex gap-1 items-center"}>
                      <Clock4
                        color={"#929292"}
                        width={12}
                        height={12}
                      />
                      <span className={"text-font-info text-[14px]"}>
                        {placeDetail.businessHours}
                      </span>
                    </p>
                  </div>
                  <div className={"flex gap-2"}>
                    <Button
                      className={
                        "w-[280px] h-[56px] bg-main-tertiary  rounded-[10px]"
                      }
                      onClick={() => {}}>
                      <span className={"flex gap-2 text-white text-[16px]"}>
                        <MapPlus
                          fill={"#fff"}
                          width={20}
                          height={20}
                        />
                        일정담기
                      </span>
                    </Button>
                    <Button
                      variant={"secondary"}
                      className={
                        "w-[56px] h-[56px] rounded-[10px] bg-background-deep"
                      }>
                      <Share
                        width={20}
                        height={20}
                      />
                    </Button>
                  </div>
                </div>
              </section>
              <Divider className={"border-2 mt-[30px] mb-[40px]"} />
              <section className={"flex flex-col px-[23px]"}>
                <h2 className={"text-[20px] font-semibold"}>{"장소 소개"}</h2>
                <p
                  className={
                    "py-[30px] px-[23px] bg-background-main rounded-[8px]"
                  }>
                  <span className={"text-[14px] text-font-info"}>
                    {placeDetail.placeDescription}
                  </span>
                </p>
                <h2 className={"text-[20px] font-semibold"}>{"정보"}</h2>
                <p
                  className={
                    "flex flex-col px-[21px] py-[30px] gap-[30px] bg-background-main rounded-[8px]"
                  }>
                  <span
                    className={
                      "flex gap-2 text-[14px] text-font-info items-center"
                    }>
                    <Link
                      width={24}
                      height={24}
                    />
                    <span>{"웹사이트 링크"}</span>
                  </span>
                  <span
                    className={
                      "flex gap-2 text-[14px] text-font-info items-center"
                    }>
                    <Instagram
                      width={24}
                      height={24}
                    />
                    <span>{"인스타그램 링크"}</span>
                  </span>
                  <span
                    className={
                      "flex gap-2 text-[14px] text-font-info break-keep items-center"
                    }>
                    <Schedule
                      width={24}
                      height={24}
                    />
                    <span>{placeDetail.businessHours}</span>
                  </span>
                  <span
                    className={
                      "flex gap-2 text-[14px] text-font-info items-center"
                    }>
                    <Contact
                      width={24}
                      height={24}
                    />
                    <span>{placeDetail.phoneNumber}</span>
                  </span>
                </p>
              </section>
              <Divider className={"my-[40px] border-2"} />
              <section className={"h-fit flex flex-col px-[20px]"}>
                <h3 className={"text-[20px] font-semibold ml-[10px] mb-[20px]"}>
                  <span className={"text-main-tertiary"}>
                    {placeDetail?.contentTitle}&nbsp;
                  </span>
                  <span className={"text-font-body"}>{"추천 장소"}</span>
                </h3>
                <div className={"flex flex-col mb-[40px]"}>
                  {recommendedPlaces?.content.map((place, index) => (
                    <ContentPreview
                      data={place}
                      key={index}
                    />
                  ))}
                </div>
              </section>
            </ScrollArea>
          )}
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default PlaceDetailBottomSheet;
