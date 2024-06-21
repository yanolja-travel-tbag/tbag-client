import { TbagTitle } from "@/components/icons";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";

const SignupCompleteStep = () => {
  const navigate = useNavigate();

  return (
    <div className={"flex flex-col items-center gap-[18px] mt-[164px]"}>
      <TbagTitle
        width={290}
        height={90}
      />
      <div className={"flex flex-col items-center mb-[132px]"}>
        <h1 className={"text-[16px] font-semibold"}>
          {"회원 가입이 완료됐습니다!"}
        </h1>
        <h2 className={"text-[16px] font-semibold"}>
          {"TBAG 회원이 되신 것을 환영합니다. "}
        </h2>
      </div>
      <Button
        variant={"ghost"}
        className={
          "w-[229px] h-[43px] rounded-[40px] bg-white border border-main-primary drop-shadow text-black"
        }
        onClick={() => navigate("/")}>
        {"시작하기"}
      </Button>
    </div>
  );
};

export default SignupCompleteStep;
