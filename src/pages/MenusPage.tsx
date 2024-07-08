import { Contents, History, Language, Plane, User } from "@/components/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel.tsx";
import Autoplay from "embla-carousel-autoplay";
import authStore from "@/store/authStore.ts";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getUserSelfData from "@/apis/getUserSelfData.ts";
import usePrivateNavigate from "@/hooks/usePrivateNavigate.ts";
import NeedLoginDialog from "@/components/Dialog/NeedLoginDialog.tsx";
import { useI18n } from "@/hooks/useI18n.ts";

const MenusPage = () => {
  const { isRegistered } = authStore();
  const navigate = useNavigate();
  const t = useI18n();
  const { privateNavigate } = usePrivateNavigate();
  const { data } = useQuery({
    queryKey: ["selfData"],
    queryFn: getUserSelfData,
    enabled: Boolean(isRegistered)
  });
  return (
    <>
      <div className={"flex flex-col"}>
        {/* 유저 정보 영역 */}
        <div
          className={
            "flex justify-between w-full h-[144px] bg-main-primary text-white p-5"
          }>
          {isRegistered && (
            <div className={"flex flex-col gap-10"}>
              <h1>{`환영합니다! ${data?.nickname} 님`}</h1>
              <h2 className={"flex"}>
                <a
                  className={"cursor-pointer"}
                  onClick={() => navigate("/signout")}>
                  {t("menus.signout")}
                </a>
              </h2>
            </div>
          )}
          {!isRegistered && (
            <div className={"flex flex-col gap-10"}>
              <h1>{t("menus.needLogin")}</h1>
              <h2 className={"flex gap-2 text-center"}>
                <a
                  className={"cursor-pointer"}
                  onClick={() => navigate("/signin")}>
                  {t("menus.signin")}
                </a>
              </h2>
            </div>
          )}
          <div
            className={"flex flex-col items-center cursor-pointer"}
            onClick={() => navigate("/languages")}>
            <Language
              width={20}
              height={20}
            />
            <span className={"text-[12px] text-background-deep"}>
              Languages
            </span>
          </div>
        </div>
        {/* 서비스 바로가기 Nav 영역. 컴포넌트 분리 필요 */}
        <div className={"flex flex-col p-[20px]"}>
          <span className={"mt-[40px] mb-[35px] font-semibold text-[20px]"}>
            {t("menus.service.shortcut")}
          </span>
          <div className={"flex gap-[22px]"}>
            <div
              className={
                "h-16 w-[80px] flex flex-col bg-background-main items-center pt-[2px] pb-[6px] rounded-[5px] cursor-pointer"
              }
              onClick={() => navigate("/contents")}>
              <Contents
                width={38}
                height={38}
              />
              <span className={"text-main-primary font-semibold mx-4"}>
                {t(`nav.content`)}
              </span>
            </div>
            <div
              className={
                "h-16 w-[74px] flex flex-col bg-background-main items-center pt-[2px] pb-[6px] rounded-[5px] cursor-pointer"
              }
              onClick={() => privateNavigate("/schedule")}>
              <Plane
                width={38}
                height={38}
              />
              <span className={"text-main-primary font-semibold mx-1"}>
                {t(`nav.schedule`)}
              </span>
            </div>
            <div
              className={
                "h-16 w-[78px] flex flex-col bg-background-main items-center  pt-[2px] pb-[6px] rounded-[5px] cursor-pointer"
              }
              onClick={() => privateNavigate("/history")}>
              <History
                width={38}
                height={38}
              />
              <span className={"text-main-primary font-semibold mx-2"}>
                {t(`nav.history`)}
              </span>
            </div>
            <div
              className={
                "h-16 w-[74px] flex flex-col bg-background-main items-center  pt-[2px] pb-[6px] rounded-[5px] cursor-pointer"
              }
              onClick={() => privateNavigate("/profile")}>
              <User
                width={38}
                height={38}
              />
              <span className={"text-main-primary font-semibold mx-5"}>
                {t(`nav.profile`)}
              </span>
            </div>
          </div>
        </div>
        {/* 서비스 메뉴 하단 영역  */}
        <div className={"flex flex-col p-[20px] mt-[110px]"}>
          <span className={"text-font-info text-[14px]"}>
            자주 묻는 질문 ｜ 고객센터
          </span>
          <div className={"h-0.5 border border-background-deep w-full my-5"} />
          <Carousel
            opts={{
              loop: true
            }}
            plugins={[Autoplay({ delay: 2000 })]}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div
                    className={
                      "w-full h-[90px] bg-background-deep rounded-[8px] text-black flex items-center justify-center"
                    }>{`광고-${index}`}</div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <NeedLoginDialog />
    </>
  );
};

export default MenusPage;
