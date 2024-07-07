import { create } from "zustand";

type BottomSheetStore = {
  isMainBottomSheetOpen: boolean;
  isPlaceDetailBottomSheetOpen: boolean;
  setIsMainBottomSheetOpen: (isOpen: boolean) => void;
  setIsPlaceDetailBottomSheetOpen: (isOpen: boolean) => void;
  placeDetailBottomSheetSnapPoint: number | string | null;
  setPlaceDetailBottomSheetSnapPoint: (
    snapPoint: number | string | null
  ) => void;
};

const bottomSheetStore = create<BottomSheetStore>((set) => ({
  isMainBottomSheetOpen: true,
  isPlaceDetailBottomSheetOpen: false,
  setIsMainBottomSheetOpen: (isOpen: boolean) =>
    set({ isMainBottomSheetOpen: isOpen }),
  setIsPlaceDetailBottomSheetOpen: (isOpen: boolean) =>
    set({ isPlaceDetailBottomSheetOpen: isOpen }),
  placeDetailBottomSheetSnapPoint: 0.8,
  setPlaceDetailBottomSheetSnapPoint: (snapPoint: number | string | null) =>
    set({ placeDetailBottomSheetSnapPoint: snapPoint })
}));

export default bottomSheetStore;
