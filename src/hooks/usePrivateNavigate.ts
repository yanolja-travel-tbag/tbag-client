import authStore from "@/store/authStore.ts";
import { useNavigate } from "react-router-dom";
import dialogStore from "@/store/dialogStore.ts";

const usePrivateNavigate = () => {
  const navigate = useNavigate();
  const { isRegistered } = authStore();
  const { setIsNeedLoginDialogOpen } = dialogStore();
  const privateNavigate = (path: string) => {
    if (isRegistered) {
      navigate(path);
    }
    if (!isRegistered) {
      setIsNeedLoginDialogOpen(true);
    }
  };

  return { privateNavigate };
};

export default usePrivateNavigate;
