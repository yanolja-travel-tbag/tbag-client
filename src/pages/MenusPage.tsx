import { Contents, History, Plane, User } from "@/components/icons";

const MenusPage = () => {
  return (
    <div className={"flex flex-col"}>
      <div className={"w-full h-[144px] bg-main-primary text-white"}>
        {"유저 정보 영역"}
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
    </div>
  );
};

export default MenusPage;
