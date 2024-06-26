import { Contents, History, Plane, User } from "@/components/icons";
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

const MenusPage = () => {
  const { isRegistered } = authStore();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["selfData"],
    queryFn: getUserSelfData,
    enabled: Boolean(isRegistered)
  });
  return (
    <div className={"flex flex-col"}>
      {/* 유저 정보 영역 */}
      <div
        className={
          "flex flex-col w-full h-[144px] bg-main-primary text-white p-5"
        }>
        {isRegistered && (
          <div className={"flex flex-col gap-10"}>
            <h1>{`환영합니다! ${data?.nickname} 님`}</h1>
            <h2 className={"flex"}>
              <a
                className={"cursor-pointer"}
                onClick={() => navigate("/signout")}>
                {"로그아웃"}
              </a>
            </h2>
          </div>
        )}
        {!isRegistered && (
          <div className={"flex flex-col gap-10"}>
            <h1>{"환영합니다! 로그인 후 시작하세요."}</h1>
            <h2 className={"flex gap-2 text-center"}>
              <a
                className={"cursor-pointer"}
                onClick={() => navigate("/signin")}>
                로그인
              </a>
              <span>{" | "}</span>
              <a
                className={"cursor-pointer"}
                onClick={() => navigate("/signup")}>
                회원가입
              </a>
            </h2>
          </div>
        )}
      </div>
      {/* 서비스 바로가기 Nav 영역. 컴포넌트 분리 필요 */}
      <div className={"flex flex-col p-[20px]"}>
        <span className={"mt-[40px] mb-[35px] font-semibold text-[20px]"}>
          {"서비스 바로가기"}
        </span>
        <div className={"flex gap-[22px]"}>
          <div
            className={
              "flex flex-col bg-background-main items-center pt-[2px] pb-[6px] rounded-[5px]"
            }>
            <Contents
              width={38}
              height={38}
            />
            <span className={"text-main-primary font-semibold mx-4"}>
              {"콘텐츠"}
            </span>
          </div>
          <div
            className={
              "flex flex-col bg-background-main items-center pt-[2px] pb-[6px] rounded-[5px]"
            }>
            <Plane
              width={38}
              height={38}
            />
            <span className={"text-main-primary font-semibold mx-1"}>
              {"여행 일정"}
            </span>
          </div>
          <div
            className={
              "flex flex-col bg-background-main items-center  pt-[2px] pb-[6px] rounded-[5px]"
            }>
            <History
              width={38}
              height={38}
            />
            <span className={"text-main-primary font-semibold mx-2"}>
              {"히스토리"}
            </span>
          </div>
          <div
            className={
              "flex flex-col bg-background-main items-center  pt-[2px] pb-[6px] rounded-[5px]"
            }>
            <User
              width={38}
              height={38}
            />
            <span className={"text-main-primary font-semibold mx-5"}>
              {"마이"}
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
  );
};

export default MenusPage;
