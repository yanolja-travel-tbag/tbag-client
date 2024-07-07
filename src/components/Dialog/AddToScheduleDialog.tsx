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
import { useQuery } from "@tanstack/react-query";
import getSchedule from "@/apis/getSchedule.ts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select.tsx";
import AddNewScheduleDialog from "@/components/Dialog/AddNewScheduleDialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import postAddToSchedule from "@/apis/postAddToSchedule.ts";
import { useState } from "react";
import { toast } from "sonner";

interface AddToScheduleDialogProps {
  locationId: number | undefined;
}

const AddToScheduleDialog = ({ locationId }: AddToScheduleDialogProps) => {
  const [currentScheduleId, setCurrentScheduleId] = useState<string | null>(
    null
  );
  const { isAddToScheduleDialogOpen, setIsAddToScheduleDialogOpen } =
    dialogStore();
  const { data: userSchedule } = useQuery({
    queryKey: ["userSchedule"],
    queryFn: getSchedule
  });

  const handleAddToSchedule = () => {
    if (!locationId || !currentScheduleId) {
      return;
    }
    postAddToSchedule({
      travelRequestId: Number(currentScheduleId),
      locationId
    }).then(() => [
      toast.success("선택하신 여행 계획에 일정이 추가되었습니다!")
    ]);
    setIsAddToScheduleDialogOpen(false);
  };
  return (
    <AlertDialog open={isAddToScheduleDialogOpen}>
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
          <Select onValueChange={(value) => setCurrentScheduleId(value)}>
            <SelectTrigger>
              <SelectValue placeholder={"여행 계획 선택"} />
            </SelectTrigger>
            <SelectContent>
              {userSchedule?.map((schedule) => (
                <SelectItem
                  value={schedule.id?.toString()}
                  key={schedule.id}>
                  {schedule.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </AlertDialogHeader>
        <AlertDialogFooter
          className={"flex flex-row justify-between items-center"}>
          <AlertDialogAction
            className={"w-[100px] h-[40px] bg-main-tertiary"}
            onClick={handleAddToSchedule}>
            확인
          </AlertDialogAction>
          <AlertDialogCancel
            className={
              "w-[100px] h-[40px] bg-background-deep text-font-info outline-0 border-0 mt-0"
            }
            onClick={() => setIsAddToScheduleDialogOpen(false)}>
            취소
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddToScheduleDialog;
