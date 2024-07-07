import { create } from "zustand";

type DialogStore = {
  isNeedLoginDialogOpen: boolean;
  setIsNeedLoginDialogOpen: (isOpen: boolean) => void;
};

const dialogStore = create<DialogStore>((set) => ({
  isNeedLoginDialogOpen: false,
  setIsNeedLoginDialogOpen: (isOpen) => set({ isNeedLoginDialogOpen: isOpen })
}));

export default dialogStore;
