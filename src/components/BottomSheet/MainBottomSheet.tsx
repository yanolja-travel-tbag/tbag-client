import {
  Drawer,
  DrawerContent,
  DrawerPortal
} from "@/components/ui/drawer.tsx";
import { useState } from "react";
import { Contents, History, Plane, User } from "@/components/icons";

const MainBottomSheet = () => {
  const [snapPoint, setSnapPoint] = useState<number | string | null>("126px");
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
          <div className={"w-full h-full bg-white flex justify-center"}>
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
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default MainBottomSheet;
