import authStore from "@/store/authStore.ts";
import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectGroup,
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
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form.tsx";
import getGenres from "@/apis/getGenres.ts";
import { useEffect, useRef } from "react";
import getFilteredContents from "@/apis/getFilteredContents.ts";
import Divider from "@/components/Divider/Divider.tsx";
import { useNavigate } from "react-router-dom";

const ContentsFilterSchema = z.object({
  mediaType: z.string(),
  genreId: z.optional(z.string())
});

type ContentsFilter = z.infer<typeof ContentsFilterSchema>;

const ContentsPage = () => {
  const { isRegistered } = authStore();
  const navigate = useNavigate();
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

  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres
  });

  const filterForm = useForm<ContentsFilter>({
    resolver: zodResolver(ContentsFilterSchema)
  });

  const filterFormRef = useRef<HTMLFormElement>(null);

  const handleSelectFilter = () => {
    filterFormRef.current?.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );
  };

  const mediaFilterOption = filterForm.watch("mediaType");
  const genreFilterOption = filterForm.watch("genreId");

  const { data: filteredContents, refetch: refetchFilteredContents } = useQuery(
    {
      queryKey: ["filteredContents", mediaFilterOption],
      queryFn: () =>
        getFilteredContents({
          mediaType: mediaFilterOption,
          genreId: genreFilterOption
        }),
      enabled: Boolean(
        (mediaFilterOption !== "artist" && genreFilterOption) ||
          mediaFilterOption === "artist"
      )
    }
  );

  useEffect(() => {
    if (mediaFilterOption && mediaFilterOption !== "artist") {
      refetchFilteredContents();
    }
  }, [genreFilterOption]);

  const handleMoveToDetail = (id: number | string) => {
    navigate(`/contents/${id}`);
  };

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
                className={"flex flex-col basis-1/4 cursor-pointer"}
                onClick={() => handleMoveToDetail(item.contentId)}>
                <img
                  src={item.contentImage}
                  alt={item.contentTitle}
                  className={"w-[80px] h-[100px] rounded-[5px]"}
                />
                <span className={"text-[12px] mt-[8px] px-[5px] break-words"}>
                  {item.contentTitle}
                </span>
              </CarouselItem>
            ))}
            {userRecommend?.map((item, index) => (
              <CarouselItem
                key={index}
                className={"flex flex-col basis-1/4 cursor-pointer"}
                onClick={() => handleMoveToDetail(item.contentId)}>
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
      </section>
      <Divider />
      <section className={"flex flex-col px-[20px] mt-[30px]"}>
        <p className={"text-[20px] font-semibold mb-[22px]"}>
          <span className={"text-main-primary"}>{"필터"}</span>로 콘텐츠를
          찾아보세요
        </p>
        <div className={"flex gap-[14px] mb-[40px]"}>
          <Form {...filterForm}>
            <form
              className={"flex gap-[14px]"}
              ref={filterFormRef}>
              <FormField
                control={filterForm.control}
                name={"mediaType"}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        if (value === "artist") {
                          handleSelectFilter();
                        }
                      }}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className={"w-[100px] h-[30px] rounded-[8px]"}>
                          <SelectValue placeholder={"테마 선택"} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value={"drama"}>{"드라마"}</SelectItem>
                          <SelectItem value={"movie"}>{"영화"}</SelectItem>
                          <SelectItem value={"artist"}>{"아이돌"}</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={filterForm.control}
                name={"genreId"}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleSelectFilter();
                      }}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className={"w-[100px] h-[30px] rounded-[8px]"}>
                          <SelectValue placeholder={"장르 선택"} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {genres?.map((genre) => (
                          <SelectItem
                            key={genre.id}
                            value={genre.id.toString()}>
                            {genre.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        {mediaFilterOption ? (
          <div
            className={
              "flex flex-wrap gap-x-[20px] gap-y-[50px] justify-start text-center mb-[40px]"
            }>
            {filteredContents?.content.map((content, index) => (
              <div
                key={index}
                className={"flex flex-col basis-[28%] cursor-pointer"}
                onClick={() => handleMoveToDetail(content.contentId)}>
                <img
                  src={content.contentImage}
                  alt={content.contentTitle}
                  className={"w-[100px] h-[140px] rounded-[5px]"}
                />
                <span className={"text-[12px] mt-[8px] px-[5px]"}>
                  {content.contentTitle}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className={"flex flex-col gap-[12px] mb-[20px]"}>
              <span className={"text-[12px] font-semibold"}>
                {"드라마 TOP 5"}
              </span>
              <Carousel>
                <CarouselContent>
                  {topFiveDramas?.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className={"flex flex-col basis-1/4 cursor-pointer"}
                      onClick={() => handleMoveToDetail(item.contentId)}>
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
              <span className={"text-[12px] font-semibold"}>
                {"아이돌 TOP 5"}
              </span>
              <Carousel>
                <CarouselContent>
                  {topFiveArtists?.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className={"flex flex-col basis-1/4 cursor-pointer"}
                      onClick={() => handleMoveToDetail(item.contentId)}>
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
              <span className={"text-[12px] font-semibold"}>
                {"영화 TOP 5"}
              </span>
              <Carousel>
                <CarouselContent>
                  {topFiveMovies?.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className={"flex flex-col basis-1/4 cursor-pointer"}
                      onClick={() => handleMoveToDetail(item.contentId)}>
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
          </>
        )}
      </section>
    </div>
  );
};

export default ContentsPage;
