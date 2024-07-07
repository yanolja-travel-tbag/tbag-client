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

const NeedLoginDialog = () => {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent className={"w-[272px] h-[190px]"}>
        <AlertDialogHeader className={"flex justify-center items-center"}>
          <AlertDialogTitle className={"text-[16px] text-main-tertiary"}>
            로그인 연결
          </AlertDialogTitle>
          <AlertDialogDescription className={"text-center text-font-head"}>
            로그인하고 <br /> 모든 기능을 이용하세요!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className={"flex justify-between"}>
          <AlertDialogAction className={"w-[100px] h-[40px] bg-main-tertiary"}>
            확인
          </AlertDialogAction>
          <AlertDialogCancel
            className={
              "w-[100px] h-[40px] bg-background-deep text-font-info outline-0 border-0"
            }>
            취소
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NeedLoginDialog;
