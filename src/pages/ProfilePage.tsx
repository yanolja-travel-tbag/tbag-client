import Divider from "@/components/Divider/Divider.tsx";
import { ArrowRight, Edit, Setting, UserThin } from "@/components/icons";
import { useQuery } from "@tanstack/react-query";
import getUserSelfData from "@/apis/getUserSelfData.ts";
import authStore from "@/store/authStore.ts";
import CategoryItem from "@/components/Item/CategoryItem.tsx";
import { useNavigate } from "react-router-dom";
import postUserDeactivate from "@/apis/postUserDeactivate.ts";
import { toast } from "sonner";

const ProfilePage = () => {
  const { userId, isRegistered, removeAllAuthInfo } = authStore();
  const navigate = useNavigate();
  const { data: userSelfData } = useQuery({
    queryKey: ["selfData"],
    queryFn: getUserSelfData,
    enabled: Boolean(isRegistered)
  });
  return (
    <div className={"flex flex-col"}>
      <section
        className={
          "flex justify-between items-center px-[22px] pt-[25px] pb-[15px]"
        }>
        <div className={"flex items-center gap-[15px]"}>
          <div
            className={
              "flex justify-center items-center w-[68px] h-[68px] rounded-full bg-main-primary"
            }>
            <UserThin
              width={40}
              height={40}
            />
          </div>
          <span className={"text-[24px] font-semibold"}>
            {userSelfData?.nickname}
          </span>
        </div>
        <Setting
          width={20}
          height={20}
          className={"cursor-pointer"}
        />
      </section>
      <Divider className={"border-4"} />
      <section className={"flex flex-col py-[25px]"}>
        <div className={"flex justify-between items-center px-[22px]"}>
          <span className={"text-[16px]"}>관심있는 카테고리</span>
          <Edit
            width={20}
            height={20}
            className={"cursor-pointer"}
          />
        </div>
        <div className={"flex flex-col pl-[40px]"}>
          <div className={"flex flex-col gap-[10px]"}>
            <span className={"text-[14px]"}>드라마</span>
            <div className={"flex flex-wrap gap-[4px]"}>
              {userSelfData?.preferredGenres?.drama?.map((genre) => (
                <CategoryItem
                  className={"w-fit"}
                  item={genre}
                  key={genre.genreId}
                />
              ))}
            </div>
          </div>
          <div className={"flex flex-col gap-[10px] mt-[10px]"}>
            <span className={"text-[14px]"}>영화</span>
            <div className={"flex flex-wrap gap-[4px]"}>
              {userSelfData?.preferredGenres?.movie?.map((genre) => (
                <CategoryItem
                  className={"w-fit"}
                  item={genre}
                  key={genre.genreId}
                />
              ))}
            </div>
          </div>
          <div className={"flex flex-col gap-[10px] mt-[10px]"}>
            <span className={"text-[14px]"}>아티스트</span>
            <div className={"flex flex-wrap gap-[4px]"}>
              {userSelfData?.preferredArtists?.map((artist) => (
                <CategoryItem
                  className={"w-fit"}
                  item={artist}
                  key={artist.artistId}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Divider className={"border-4"} />
      <section
        className={"flex flex-col gap-[24px] pt-[23px] pb-[78px] px-[22px]"}>
        <div className={"flex justify-between items-center"}>
          <span>언어 설정</span>
          <ArrowRight
            width={20}
            height={20}
          />
        </div>
        <div className={"flex justify-between items-center"}>
          <span>자주 묻는 질문 / 고객센터</span>
          <ArrowRight
            width={20}
            height={20}
          />
        </div>
        <div className={"flex gap-[12px]"}>
          <span
            className={"text-[14px] text-font-info underline cursor-pointer"}
            onClick={() => navigate("/signout")}>
            로그아웃
          </span>
          <span
            className={"text-[14px] text-font-info/40 underline cursor-pointer"}
            onClick={() => {
              if (!userId) {
                return;
              }
              postUserDeactivate(userId)
                .then(() => {
                  removeAllAuthInfo();
                  toast.success("회원탈퇴가 완료되었습니다.");
                  navigate("/");
                })
                .catch(() => {
                  toast.error("회원탈퇴에 실패했습니다.");
                });
            }}>
            회원탈퇴
          </span>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
