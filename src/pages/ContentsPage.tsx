import authStore from "@/store/authStore.ts";
import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select.tsx";
import getPublicRecommended from "@/apis/getPublicRecommended.ts";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel.tsx";
import getUserSelfData from "@/apis/getUserSelfData.ts";
import getRecommended from "@/apis/getRecommended.ts";
import getTopFiveRecommend from "@/apis/getTopFiveRecommend.ts";

const ContentsPage = () => {
  const { isRegistered } = authStore();
  // const navigate = useNavigate();
  const { data: selfData } = useQuery({
    queryKey: ["selfData"],
    queryFn: getUserSelfData,
    enabled: Boolean(isRegistered)
  });
  const { data: publicRecommend } = useQuery({
    queryKey: ["publicRecommendation"],
    queryFn: getPublicRecommended,
    enabled: Boolean(!isRegistered)
  });
  const { data: userRecommend } = useQuery({
    queryKey: ["userRecommendation"],
    queryFn: getRecommended,
    enabled: Boolean(isRegistered)
  });
  const { data: topFiveMovies } = useQuery({
    queryKey: ["topFiveMovies"],
    queryFn: () => getTopFiveRecommend("movie")
  });
  const { data: topFiveDramas } = useQuery({
    queryKey: ["topFiveDramas"],
    queryFn: () => getTopFiveRecommend("drama")
  });
  const { data: topFiveArtists } = useQuery({
    queryKey: ["topFiveArtists"],
    queryFn: () => getTopFiveRecommend("artist")
  });

  return (
    <div className={"w-full h-fit flex flex-col"}>
      <section className={"flex flex-col px-[20px] mt-[40px] mb-[14px]"}>
        <p className={"text-[20px] font-semibold mb-[20px]"}>
          {isRegistered ? (
            <span>
              <span className={"text-main-primary"}>
                {selfData?.nickname ?? "..."}
              </span>
              님 추천 K 콘텐츠
            </span>
          ) : (
            <span>
              <span className={"text-main-primary"}>{"TBAG"}</span>이 추천하는
              오늘의 콘텐츠
            </span>
          )}
        </p>
        <Carousel>
          <CarouselContent>
            {publicRecommend?.map((item, index) => (
              <CarouselItem
                key={index}
                className={"flex flex-col basis-1/4"}>
                <img
                  src={item.contentImage}
                  alt={item.contentTitle}
                  className={"w-[80px] h-[100px] rounded-[5px]"}
                />
                <span className={"text-[12px] mt-[8px] px-[5px]"}>
                  {item.contentTitle}
                </span>
              </CarouselItem>
            ))}
            {userRecommend?.map((item, index) => (
              <CarouselItem
                key={index}
                className={"flex flex-col basis-1/4"}>
                <img
                  src={item.contentImage}
                  alt={item.contentTitle}
                  className={"w-[80px] h-[100px] rounded-[5px]"}
                />
                <span className={"text-[12px] mt-[8px] px-[5px]"}>
                  {item.contentTitle}
                </span>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* TODO: 회원인 경우 노출 */}
      </section>
      <div className={"w-full h-0.5 border border-y-background-deep"} />
      <section className={"flex flex-col px-[20px] mt-[30px]"}>
        <p className={"text-[20px] font-semibold mb-[22px]"}>
          <span className={"text-main-primary"}>{"필터"}</span>로 콘텐츠를
          찾아보세요
        </p>
        <div className={"flex gap-[14px] mb-[40px]"}>
          <Select>
            <SelectTrigger className={"w-[100px] h-[30px] rounded-[8px]"}>
              <SelectValue placeholder={"테마 선택"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"drama"}>{"드라마"}</SelectItem>
              <SelectItem value={"movie"}>{"영화"}</SelectItem>
              <SelectItem value={"artist"}>{"아이돌"}</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className={"w-[100px] h-[30px] rounded-[8px]"}>
              <SelectValue placeholder={"장르 선택"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"adventure"}>{"어드벤처"}</SelectItem>
              <SelectItem value={"fantasy"}>{"판타지"}</SelectItem>
              <SelectItem value={"anime"}>{"애니"}</SelectItem>
              <SelectItem value={"horror"}>{"공포"}</SelectItem>
              <SelectItem value={"comedy"}>{"코미디"}</SelectItem>
              <SelectItem value={"history"}>{"역사"}</SelectItem>
              <SelectItem value={"thriller"}>{"스릴러"}</SelectItem>
              <SelectItem value={"sf"}>{"SF"}</SelectItem>
              <SelectItem value={"mystery"}>{"미스터리"}</SelectItem>
              <SelectItem value={"criminal"}>{"범죄"}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className={"flex flex-col gap-[12px] mb-[20px]"}>
          <span className={"text-[12px] font-semibold"}>{"드라마 TOP 5"}</span>
          <Carousel>
            <CarouselContent>
              {topFiveDramas?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={"flex flex-col basis-1/4"}>
                  <img
                    src={item.contentImage}
                    alt={item.contentTitle}
                    className={"w-[80px] h-[100px] rounded-[5px]"}
                  />
                  <span className={"text-[12px] mt-[8px] px-[5px]"}>
                    {item.contentTitle}
                  </span>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className={"flex flex-col gap-[12px] mb-[20px]"}>
          <span className={"text-[12px] font-semibold"}>{"아이돌 TOP 5"}</span>
          <Carousel>
            <CarouselContent>
              {topFiveArtists?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={"flex flex-col basis-1/4"}>
                  <img
                    src={item.contentImage}
                    alt={item.contentTitle}
                    className={"w-[80px] h-[100px] rounded-[5px]"}
                  />
                  <span className={"text-[12px] mt-[8px] px-[5px]"}>
                    {item.contentTitle}
                  </span>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className={"flex flex-col gap-[12px] mb-[20px]"}>
          <span className={"text-[12px] font-semibold"}>{"영화 TOP 5"}</span>
          <Carousel>
            <CarouselContent>
              {topFiveMovies?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={"flex flex-col basis-1/4"}>
                  <img
                    src={item.contentImage}
                    alt={item.contentTitle}
                    className={"w-[80px] h-[100px] rounded-[5px]"}
                  />
                  <span className={"text-[12px] mt-[8px] px-[5px]"}>
                    {item.contentTitle}
                  </span>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default ContentsPage;
