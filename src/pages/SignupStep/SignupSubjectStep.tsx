import { Button } from "@/components/ui/button.tsx";
import { Dispatch, SetStateAction } from "react";
import { clsx } from "clsx";
import { toast } from "sonner";

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

const ITEM_LABEL = [
  {
    subject: "drama",
    ko: "드라마",
    en: "Drama"
  },
  {
    subject: "movie",
    ko: "영화",
    en: "Movie"
  },
  {
    subject: "artist",
    ko: "아이돌",
    en: "Idol"
  }
];

interface SignupSubjectStepProps {
  selectedSubjects: string[];
  setSelectedSubjects: Dispatch<SetStateAction<string[]>>;
  handleNextStep: Dispatch<SetStateAction<number>>;
}

const SignupSubjectStep = ({
  selectedSubjects,
  setSelectedSubjects,
  handleNextStep
}: SignupSubjectStepProps) => {
  const handleSelectSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };
  const handleClickNextStep = () => {
    if (selectedSubjects.length === 0) {
      toast.info("관심있는 주제를 1가지 이상 선택해주세요.");
    } else {
      handleNextStep(2);
    }
  };
  return (
    <div className={"flex flex-col items-center"}>
      <div className={"flex flex-col mt-32 gap-[14px] mb-[55px] items-center"}>
        <h1 className={"text-[16px] font-semibold"}>{STEP_INFO.title}</h1>
        <h2 className={"text-[12px] text-center"}>{STEP_INFO.description}</h2>
      </div>
      <div className={"flex flex-col gap-[6px] mb-[62px]"}>
        {ITEM_LABEL.map((item, index) => (
          <Button
            key={index}
            variant={"ghost"}
            className={clsx(
              "w-[308px] h-[50px] bg-white border border-main-primary drop-shadow rounded-[10px] text-black",
              selectedSubjects.includes(item.subject) &&
                "bg-main-primary/25 text-black hover:bg-main-primary/25 hover:text-black"
            )}
            onClick={() => handleSelectSubject(item.subject)}>
            {item.ko}
          </Button>
        ))}
      </div>
      <Button
        variant={"ghost"}
        className={
          "w-[123px] h-[34px] rounded-[40px] bg-white border border-main-secondary drop-shadow text-black"
        }
        onClick={handleClickNextStep}>
        {"계속하기"}
      </Button>
    </div>
  );
};

export default SignupSubjectStep;
