import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import { clsx } from "clsx";
import { Calendar } from "@/components/ui/calendar.tsx";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { FormField } from "@/components/ui/form.tsx";
import { DateRange } from "react-day-picker";
import authStore from "@/store/authStore.ts";
import { format } from "date-fns";
import postNewSchedule from "@/apis/postNewSchedule.ts";
import { toast } from "sonner";

const newSchedule = z.object({
  name: z.string(),
  dateRange: z.object({
    from: z.date(),
    to: z.date()
  })
});

type NewSchedule = z.infer<typeof newSchedule>;

interface AddNewScheduleDialogProps {
  trigger?: React.ReactNode;
  refetchUserSchedule?: () => void;
}

const AddNewScheduleDialog = ({
  trigger,
  refetchUserSchedule
}: AddNewScheduleDialogProps) => {
  const { register, control, handleSubmit, reset } = useForm<NewSchedule>();
  const { userId } = authStore();

  const handleAddSchedule = (data: NewSchedule) => {
    const scheduleData = {
      userId: Number(userId),
      name: data.name,
      startDate: format(data.dateRange.from, "yyyy-MM-dd"),
      endDate: format(data.dateRange.to, "yyyy-MM-dd")
    };
    postNewSchedule(scheduleData).then(() => {
      toast.success("새로운 여행일정이 추가되었습니다!");
      reset();
      refetchUserSchedule && refetchUserSchedule();
    });
  };
  return (
    <AlertDialog>
      {trigger && <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>}
      <AlertDialogContent
        className={"w-[350px] h-fit px-[30px] py-[24px] rounded-[8px]"}>
        <form onSubmit={handleSubmit(handleAddSchedule)}>
          <AlertDialogHeader className={"flex justify-center items-center"}>
            <AlertDialogTitle className={"text-[16px] text-main-tertiary"}>
              새 여행일정 만들기
            </AlertDialogTitle>
            <AlertDialogDescription className={"hidden"} />
            <input
              className={clsx(
                "w-[263px] h-[50px] border border-font-info rounded-[4px] px-[25px]",
                "placeholder:text-[12px] placeholder:text-center"
              )}
              placeholder={"일정 이름을 입력해주세요"}
              {...register("name")}
            />
            <FormField
              render={({ field }) => (
                <Calendar
                  mode={"range"}
                  selected={field.value as unknown as DateRange}
                  onSelect={(date) => field.onChange(date)}
                />
              )}
              name={"dateRange"}
              control={control}
            />
          </AlertDialogHeader>
          <AlertDialogFooter
            className={"w-full flex flex-row sm:justify-evenly items-center"}>
            <AlertDialogAction
              className={"w-[100px] h-[40px] bg-main-tertiary"}
              type={"submit"}>
              확인
            </AlertDialogAction>
            <AlertDialogCancel
              className={
                "w-[100px] h-[40px] bg-background-deep text-font-info outline-0 border-0 mt-0"
              }
              onClick={() => reset()}>
              취소
            </AlertDialogCancel>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddNewScheduleDialog;
