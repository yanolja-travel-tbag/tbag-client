import Divider from "@/components/Divider/Divider.tsx";
import localeStore from "@/store/localeStore.ts";
import { Button } from "@/components/ui/button.tsx";
import { useEffect, useState } from "react";
import { Check } from "@/components/icons";
import BasicFooter from "@/components/Footer/BasicFooter.tsx";
import { toast } from "sonner";

const LanguagePage = () => {
  const [currentLocale, setCurrentLocale] = useState<"ko" | "en">("ko");
  const { locale, setLocale } = localeStore();

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);
  return (
    <>
      <div className={"w-full flex flex-col items-center"}>
        <h1 className={"text-[16px] font-semibold"}>Languages</h1>
        <Divider className={"border-4 mt-[52px] mb-[11px]"} />
        <div className={"w-full flex flex-col gap-2 items-start px-[20px]"}>
          {/* 영어 */}
          <div
            className={"w-full flex justify-between cursor-pointer"}
            onClick={() => setCurrentLocale("en")}>
            <div
              className={
                "w-full flex flex-col gap-1 border-b border-b-font-info pb-[10px]"
              }>
              <span className={"text-[14px] text-main-primary"}>English</span>
              <span className={"text-[12px] text-font-info"}>영어</span>
            </div>
            {currentLocale === "en" && (
              <div
                className={
                  "w-[20px] h-[20px] flex justify-center items-center bg-main-primary rounded-full shadow-lg p-[3px] mt-[10px]"
                }>
                <Check
                  className={"shadow-md"}
                  width={14}
                  height={14}
                />
              </div>
            )}
          </div>
          {/* 한국어 */}
          <div
            className={"w-full flex justify-between cursor-pointer"}
            onClick={() => setCurrentLocale("ko")}>
            <div
              className={
                "w-full flex flex-col gap-1 border-b border-b-font-info pb-[10px]"
              }>
              <span className={"text-[14px] text-main-primary"}>한국어</span>
              <span className={"text-[12px] text-font-info"}>Korean</span>
            </div>
            {currentLocale === "ko" && (
              <div
                className={
                  "w-[20px] h-[20px] flex justify-center items-center bg-main-primary rounded-full shadow-lg p-[3px] mt-[10px]"
                }>
                <Check
                  className={"shadow-md"}
                  width={14}
                  height={14}
                />
              </div>
            )}
          </div>
        </div>

        <Button
          className={
            "border border-main-primary shadow-md rounded-[40px] px-[52px] py-[8px] my-[25px]"
          }
          variant={"ghost"}
          onClick={() => {
            setLocale(currentLocale);
            toast.success(
              "언어 설정이 저장되었습니다! 새로고침 시 적용될거예요!"
            );
          }}>
          {"저장"}
        </Button>
      </div>
      <BasicFooter />
    </>
  );
};

export default LanguagePage;
