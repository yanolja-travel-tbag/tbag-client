import { Button } from "@/components/ui/button.tsx";
import { useQuery } from "@tanstack/react-query";
import getGenres from "@/apis/getGenres.ts";
import getArtists from "@/apis/getArtists.ts";
import CategoryItem from "@/components/Item/CategoryItem.tsx";

const STEP_INFO = {
  title: "관심있는 카테고리를 모두 선택해주세요.",
  description: (
    <span>
      내게 맞는 여행지 추천을 위해
      <br /> 각 주제당 관심있는 주제를{" "}
      <span className={"text-main-primary"}>1가지</span> 이상 <br />
      선택해주세요!
    </span>
  )
};

const SignupCategoryStep = () => {
  const { data: genreLists } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres
  });
  const { data: artistLists } = useQuery({
    queryKey: ["artists"],
    queryFn: getArtists
  });
  return (
    <div className={"flex flex-col items-center"}>
      <p
        className={"flex flex-col mt-[85px] gap-[14px] mb-[36px] items-center"}>
        <h1 className={"text-[16px] font-semibold"}>{STEP_INFO.title}</h1>
        <h2 className={"text-[12px] text-center"}>{STEP_INFO.description}</h2>
      </p>
      <div className={"flex flex-col gap-[6px] mb-[62px]"}>
        <div className={"flex flex-col gap-[7px]"}>
          <span className={"text-[16px] font-semibold px-[14px]"}>
            {"드라마"}
          </span>
          <ul
            className={
              "flex flex-wrap gap-x-1 gap-y-[7px] bg-white border border-main-primary drop-shadow rounded-[10px] w-[344px] h-[233px] list-none p-2 overflow-y-scroll"
            }>
            {genreLists?.map((genre) => (
              <CategoryItem
                key={genre.id}
                item={genre}
              />
            ))}
          </ul>
          <span className={"text-[16px] font-semibold px-[14px]"}>
            {"영화"}
          </span>
          <ul
            className={
              "flex flex-wrap gap-x-1 gap-y-[7px] bg-white border border-main-primary drop-shadow rounded-[10px] w-[344px] h-[233px] list-none p-2 overflow-y-scroll"
            }>
            {genreLists?.map((genre) => (
              <CategoryItem
                key={genre.id}
                item={genre}
              />
            ))}
          </ul>
          <span className={"text-[16px] font-semibold px-[14px]"}>
            {"아이돌"}
          </span>
          <ul
            className={
              "flex flex-wrap gap-x-1 gap-y-[7px] bg-white border border-main-primary drop-shadow rounded-[10px] w-[344px] h-[233px] list-none p-2 overflow-y-scroll"
            }>
            {artistLists?.map((artist) => (
              <CategoryItem
                key={artist.id}
                item={artist}
              />
            ))}
          </ul>
        </div>
      </div>
      <Button
        className={
          "w-[123px] h-[34px] rounded-[40px] bg-white border border-main-secondary drop-shadow text-black p-2"
        }>
        {"계속하기"}
      </Button>
    </div>
  );
};

export default SignupCategoryStep;
