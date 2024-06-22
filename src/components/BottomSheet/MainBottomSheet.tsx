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

const MainBottomSheet = () => {
  const [snapPoint, setSnapPoint] = useState<number | string | null>("126px");
  const { isRegistered } = authStore();
  const { data } = useQuery({
    queryKey: ["selfData"],
    queryFn: getUserSelfData,
    enabled: Boolean(isRegistered)
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
                  "h-16 flex flex-col  items-center pt-[2px] pb-[6px] "
                }>
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
              {isRegistered
                ? `${data?.nickname}님을 위한 여행이에요`
                : `로그인 후 이용해주세요`}
            </h1>
            <Carousel
              opts={{
                loop: true
              }}
              plugins={[Autoplay({ delay: 2000, stopOnMouseEnter: true })]}>
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div
                      className={
                        "w-full h-[180px] bg-background-deep rounded-[8px] text-black flex items-center justify-center"
                      }>{`여행지 사진-${index}`}</div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <h2>{"푸른 바다의 전설, 제주도로 떠나요"}</h2>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default MainBottomSheet;
