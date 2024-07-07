import { create } from "zustand";

type DialogStore = {
  isNeedLoginDialogOpen: boolean;
  setIsNeedLoginDialogOpen: (isOpen: boolean) => void;
  isAddToScheduleDialogOpen: boolean;
  setIsAddToScheduleDialogOpen: (isOpen: boolean) => void;
};

const dialogStore = create<DialogStore>((set) => ({
  isNeedLoginDialogOpen: false,
  setIsNeedLoginDialogOpen: (isOpen) => set({ isNeedLoginDialogOpen: isOpen }),
  isAddToScheduleDialogOpen: false,
  setIsAddToScheduleDialogOpen: (isOpen) =>
    set({ isAddToScheduleDialogOpen: isOpen })
}));

export default dialogStore;
