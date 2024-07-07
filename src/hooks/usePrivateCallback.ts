import authStore from "@/store/authStore.ts";
import dialogStore from "@/store/dialogStore.ts";

const usePrivateCallback = (callback: () => void) => {
  const { isRegistered } = authStore();
  const { setIsNeedLoginDialogOpen } = dialogStore();
  const privateCallback = () => {
    if (isRegistered) {
      callback();
    }
    if (!isRegistered) {
      setIsNeedLoginDialogOpen(true);
    }
  };
  return { privateCallback };
};

export default usePrivateCallback;
