import { useState } from "react";
import SignupCategoryStep from "@/pages/SignupStep/SignupCategoryStep.tsx";
import SignupSubjectStep from "@/pages/SignupStep/SignupSubjectStep.tsx";
import SignupCompleteStep from "@/pages/SignupStep/SignupCompleteStep.tsx";

const STEP_INFO = [
  {
    step: 1,
    name: "주제"
  },
  {
    step: 2,
    name: "카테고리"
  }
];

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  return (
    <div className={"flex flex-col items-center h-dvh"}>
      <div className={"flex"}>
        {STEP_INFO.map((info) => {
          if (info.step === step) {
            if (info.step === 1) {
              return (
                <div
                  key={info.step}
                  className={"flex"}>
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
            if (info.step === 2) {
              return (
                <div
                  key={info.step}
                  className={"flex"}>
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
          }
          if (info.step !== step && step !== 3) {
            return (
              <div
                key={info.step}
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
      {step === 1 && (
        <SignupSubjectStep
          selectedSubjects={selectedSubjects}
          setSelectedSubjects={setSelectedSubjects}
          handleNextStep={setStep}
        />
      )}
      {step === 2 && <SignupCategoryStep handleNextStep={setStep} />}
      {step === 3 && <SignupCompleteStep />}
    </div>
  );
};

export default SignupPage;
