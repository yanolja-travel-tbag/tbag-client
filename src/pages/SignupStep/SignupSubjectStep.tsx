import { Button } from "@/components/ui/button.tsx";
import { Dispatch, SetStateAction } from "react";

const STEP_INFO = {
  title: "관심있는 주제를 모두 선택해주세요.",
  description: (
    <span>
      내게 맞는 여행지 추천을 위해
      <br /> 관심있는 주제를
      <span className={"text-main-primary"}>1가지</span> 이상 선택해주세요!
    </span>
  )
};

interface SignupSubjectStepProps {
  handleNextStep: Dispatch<SetStateAction<"number">>;
}

const SignupSubjectStep = ({ handleNextStep }: SignupSubjectStepProps) => {
  return (
    <div className={"flex flex-col items-center"}>
      <div className={"flex flex-col mt-32 gap-[14px] mb-[55px] items-center"}>
        <h1 className={"text-[16px] font-semibold"}>{STEP_INFO.title}</h1>
        <h2 className={"text-[12px] text-center"}>{STEP_INFO.description}</h2>
      </div>
      <div className={"flex flex-col gap-[6px] mb-[62px]"}>
        {["드라마", "영화", "아이돌"].map((subject) => (
          <Button
            key={subject}
            variant={"ghost"}
            className={
              "w-[308px] h-[50px] bg-white border border-main-primary drop-shadow rounded-[10px] text-black"
            }>
            {subject}
          </Button>
        ))}
      </div>
      <Button
        variant={"ghost"}
        className={
          "w-[123px] h-[34px] rounded-[40px] bg-white border border-main-secondary drop-shadow text-black"
        }
        onClick={() => handleNextStep}>
        {"계속하기"}
      </Button>
    </div>
  );
};

export default SignupSubjectStep;
