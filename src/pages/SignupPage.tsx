import { useState } from "react";
import SignupCategoryStep from "@/pages/SignupStep/SignupCategoryStep.tsx";
import SignupSubjectStep from "@/pages/SignupStep/SignupSubjectStep.tsx";
import SignupCompleteStep from "@/pages/SignupStep/SignupCompleteStep.tsx";

const STEP_INFO = [
  {
    step: 1,
    name: "주제",
    title: "관심있는 주제를 모두 선택해주세요.",
    description: (
      <span>
        내게 맞는 여행지 추천을 위해
        <br /> 관심있는 주제를
        <span className={"text-main-primary"}>1가지</span> 이상 선택해주세요!
      </span>
    )
  },
  {
    step: 2,
    name: "카테고리",
    title: "관심있는 카테고리를 모두 선택해주세요.",
    description: (
      <span>
        내게 맞는 여행지 추천을 위해
        <br /> 각 주제당 관심있는 주제를{" "}
        <span className={"text-main-primary"}>1가지</span> 이상 <br />
        선택해주세요!
      </span>
    )
  }
];

const SignupPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className={"flex flex-col items-center h-dvh"}>
      <div className={"flex"}>
        {STEP_INFO.map((info) => {
          if (info.step === step) {
            if (info.step !== 1) {
              return (
                <div className={"flex"}>
                  <div
                    className={
                      "flex items-center border border-main-primary w-10 h-0.5 my-auto"
                    }
                  />
                  <div
                    key={info.step}
                    className={
                      "flex items-center justify-center w-[120px] h-[30px] rounded-[15px] bg-main-primary"
                    }>
                    {info.name}
                  </div>
                </div>
              );
            }
            return (
              <div className={"flex"}>
                <div
                  key={info.step}
                  className={
                    "flex items-center justify-center w-[120px] h-[30px] rounded-[15px] bg-main-primary"
                  }>
                  {info.name}
                </div>
                <div
                  className={
                    "flex items-center border border-main-primary w-10 h-0.5 my-auto"
                  }
                />
              </div>
            );
          }
          if (info.step !== step) {
            return (
              <div
                className={
                  "flex items-center justify-center w-[30px] h-[30px] rounded-full bg-main-primary cursor-pointer"
                }
                onClick={() => setStep(info.step)}>
                {info.step}
              </div>
            );
          }
        })}
      </div>
      {/* Signup Steps */}
      {step === 1 && <SignupSubjectStep />}
      {step === 2 && <SignupCategoryStep />}
      {step === 3 && <SignupCompleteStep />}
    </div>
  );
};

export default SignupPage;
