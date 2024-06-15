import {
  GoogleStart,
  KakaoStart,
  NonMemberStart,
  TbagTitle
} from "@/components/icons";

const SigninPage = () => {
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
        />
        <GoogleStart
          width={287}
          height={39}
        />
        <NonMemberStart
          width={287}
          height={39}
        />
      </div>
    </div>
  );
};

export default SigninPage;
