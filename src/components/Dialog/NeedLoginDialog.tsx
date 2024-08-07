import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog.tsx";
import dialogStore from "@/store/dialogStore.ts";
import { useNavigate } from "react-router-dom";

const NeedLoginDialog = () => {
  const { isNeedLoginDialogOpen, setIsNeedLoginDialogOpen } = dialogStore();
  const navigate = useNavigate();

  return (
    <AlertDialog open={isNeedLoginDialogOpen}>
      <AlertDialogContent
        className={"w-[280px] h-[190px] px-[30px] py-[24px] rounded-[8px]"}>
        <AlertDialogHeader className={"flex justify-center items-center"}>
          <AlertDialogTitle className={"text-[16px] text-main-tertiary"}>
            로그인 연결
          </AlertDialogTitle>
          <AlertDialogDescription className={"text-center text-font-head"}>
            로그인하고 <br /> 모든 기능을 이용하세요!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter
          className={"flex flex-row justify-between items-center"}>
          <AlertDialogAction
            className={"w-[100px] h-[40px] bg-main-tertiary"}
            onClick={() => {
              setIsNeedLoginDialogOpen(false);
              navigate("/signin");
            }}>
            확인
          </AlertDialogAction>
          <AlertDialogCancel
            className={
              "w-[100px] h-[40px] bg-background-deep text-font-info outline-0 border-0 mt-0"
            }
            onClick={() => setIsNeedLoginDialogOpen(false)}>
            취소
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NeedLoginDialog;
