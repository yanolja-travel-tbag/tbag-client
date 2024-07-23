import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel.tsx";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getContentDetail from "@/apis/getContentDetail.ts";
import Divider from "@/components/Divider/Divider.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { getRelatedPlaces } from "@/apis/getRelatedPlaces.ts";
import ContentPreview from "@/components/Preview/ContentPreview.tsx";
import { useI18n } from "@/hooks/useI18n.ts";

const ContentsDetailPage = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { id } = useParams();
  const t = useI18n();

  const { data: contentDetail } = useQuery({
    queryKey: ["contentDetail", id],
    queryFn: () => getContentDetail(id!),
    enabled: Boolean(id)
  });

  const { data: relatedPlaces } = useQuery({
    queryKey: ["relatedPlaces", id],
    queryFn: () => getRelatedPlaces(id!),
    enabled: Boolean(id)
  });

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCurrentSlide(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);
  return (
    <div className={"w-full h-fit flex flex-col"}>
      <section className={"flex flex-col px-[20px] pt-[40px]"}>
        <Carousel
          opts={{
            loop: true
          }}
          setApi={setCarouselApi}
          plugins={[Autoplay({ delay: 5000 })]}>
          <CarouselContent>
            {contentDetail?.contentImages.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={`컨텐츠 이미지-${index}`}
                  className={
                    "w-[350px] h-[280px] rounded-[8px] object-contain bg-black"
                  }
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className={"flex justify-center gap-1 mt-[20px] mb-[40px]"}>
          {contentDetail?.contentImages.map((_, index) => (
            <div
              className={clsx(
                "cursor-pointer",
                index === currentSlide - 1
                  ? "w-5 h-2 bg-main-tertiary rounded-[5px]"
                  : "w-2 h-2 bg-font-disable rounded-full"
              )}
              key={index}
              onClick={() => carouselApi?.scrollTo(index)}
            />
          ))}
        </div>
        <h1 className={"text-[24px] font-semibold text-font-head ml-[10px]"}>
          {contentDetail?.title}
        </h1>
        {contentDetail?.genres ? (
          <div className={"flex flex-col gap-4 mt-[15px]"}>
            <div className={"flex gap-2"}>
              {contentDetail.genres.map((genre, index) => (
                <Badge
                  key={index}
                  variant={"secondary"}
                  className={
                    "px-[12px] py-[6px] text-font-body bg-background-deep"
                  }>
                  <span className={"mx-1"}>{genre}</span>
                </Badge>
              ))}
            </div>
            <h2
              className={
                "text-[16px] text-font-info ml-[10px] mt-[25px] mb-[16px]"
              }>
              {t("contentDetail.headings.label.character")}
            </h2>
          </div>
        ) : (
          <h2
            className={
              "text-[16px] text-font-info ml-[10px] mt-[25px] mb-[16px]"
            }>
            {t("contentDetail.headings.label.members")}
          </h2>
        )}

        <Carousel>
          <CarouselContent className={"gap-[12px]"}>
            {contentDetail?.members.map((character, index) => (
              <div
                className={"flex flex-col items-start"}
                key={index}>
                <div className={"w-[95px] h-[95px]"}>
                  <img
                    className={"w-[95px] h-[95px] rounded-[8px]"}
                    src={character.profilePath}
                  />
                </div>
                <p className={"flex flex-col"}>
                  <span className={"text-[16px] text-font-head"}>
                    {character.stageName}
                  </span>
                  <span className={"text-[12px] text-font-info"}>
                    {character.name}
                  </span>
                </p>
              </div>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <Divider className={"my-[25px] border-2"} />
      <section className={"h-fit flex flex-col px-[20px]"}>
        <h3
          className={"text-[20px] text-font-body font-semibold ml-[10px]"}
          dangerouslySetInnerHTML={{
            __html: t("contentDetail.headings.label.related", {
              title: contentDetail?.title
            })
          }}
        />

        <div className={"flex flex-col mb-[40px]"}>
          {relatedPlaces?.content.map((place, index) => (
            <ContentPreview
              data={place}
              key={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContentsDetailPage;
