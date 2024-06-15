import {
  GoogleStart,
  KakaoStart,
  NonMemberStart,
  TbagTitle
} from "@/components/icons";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className={
        "h-full flex flex-col items-center justify-center gap-y-[66px]"
      }>
      <div className={"flex flex-col items-center gap-y-4"}>
        <TbagTitle
          width={290}
          height={90}
        />
        <h1 className={"text-[20px] font-semibold"}>시작하기</h1>
      </div>
      <div className={"flex flex-col items-center gap-y-2"}>
        <KakaoStart
          width={287}
          height={39}
          className={"cursor-pointer"}
          onClick={() =>
            (window.location.href = import.meta.env.VITE_TBAG_KAKAO_LOGIN_URL)
          }
        />
        <GoogleStart
          width={287}
          height={39}
          className={"cursor-pointer"}
          onClick={() =>
            (window.location.href = import.meta.env.VITE_TBAG_GOOGLE_LOGIN_URL)
          }
        />
        <NonMemberStart
          width={287}
          height={39}
          onClick={() => navigate("/")}
          className={"cursor-pointer"}
        />
      </div>
    </div>
  );
};

export default SigninPage;
