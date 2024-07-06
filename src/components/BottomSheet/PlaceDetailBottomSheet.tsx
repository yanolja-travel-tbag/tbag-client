import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import {
  Drawer,
  DrawerContent,
  DrawerPortal
} from "@/components/ui/drawer.tsx";
import { useState } from "react";

const PlaceDetailBottomSheet = () => {
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
            "border-b-none z-20 mx-auto flex flex-col rounded-t-[10px] border border-gray-200 bg-white outline-0 w-[390px] h-full"
          }
          onInteractOutside={() => setSnapPoint("126px")}
          onOpenAutoFocus={(event) => event.preventDefault()}>
          <ScrollArea className={"h-[75%]"}></ScrollArea>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default PlaceDetailBottomSheet;
