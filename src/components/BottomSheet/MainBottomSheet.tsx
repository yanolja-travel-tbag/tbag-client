import {
  Drawer,
  DrawerContent,
  DrawerPortal
} from "@/components/ui/drawer.tsx";
import { useState } from "react";

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
          <div className={"w-full h-full bg-white"}>
            <div className={"w-full h-[50px] flex items-center justify-center"}>
              <h1 className={"text-lg font-bold"}>Bottom Sheet</h1>
            </div>
            <div className={"w-full h-[calc(100%-50px)]"}>
              <p className={"text-center"}>Bottom Sheet Content</p>
            </div>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default MainBottomSheet;
