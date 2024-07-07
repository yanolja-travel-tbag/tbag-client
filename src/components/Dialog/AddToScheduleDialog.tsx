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
import { Button } from "@/components/ui/button.tsx";
import AddNewScheduleDialog from "@/components/Dialog/AddNewScheduleDialog.tsx";

const AddToScheduleDialog = () => {
  return (
    <AlertDialog open={false}>
      <AlertDialogContent
        className={"w-[280px] h-fit px-[30px] py-[24px] rounded-[8px]"}>
        <AlertDialogHeader className={"flex justify-center items-center"}>
          <AlertDialogTitle className={"text-[16px] text-main-tertiary"}>
            일정 담기
          </AlertDialogTitle>
          <AlertDialogDescription className={"text-center text-font-head"}>
            일정을 포함시키고자하는 <br /> 여행 계획을 선택해주세요!
          </AlertDialogDescription>
          <AddNewScheduleDialog
            trigger={
              <Button
                className={
                  "h-[33px] text-[12px] rounded-[4px] bg-font-body text-white"
                }>
                새 여행일정 추가
              </Button>
            }
          />
        </AlertDialogHeader>
        <AlertDialogFooter
          className={"flex flex-row justify-between items-center"}>
          <AlertDialogAction
            className={"w-[100px] h-[40px] bg-main-tertiary"}
            onClick={() => console.log("확인")}>
            확인
          </AlertDialogAction>
          <AlertDialogCancel
            className={
              "w-[100px] h-[40px] bg-background-deep text-font-info outline-0 border-0 mt-0"
            }
            onClick={() => {}}>
            취소
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddToScheduleDialog;
