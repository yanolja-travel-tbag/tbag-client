import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import {
  Drawer,
  DrawerContent,
  DrawerPortal
} from "@/components/ui/drawer.tsx";
import bottomSheetStore from "@/store/bottomSheetStore.ts";

const PlaceDetailBottomSheet = () => {
  const {
    isPlaceDetailBottomSheetOpen,
    placeDetailBottomSheetSnapPoint,
    setPlaceDetailBottomSheetSnapPoint
  } = bottomSheetStore();
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
          <ScrollArea className={"h-[75%]"}></ScrollArea>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default PlaceDetailBottomSheet;
