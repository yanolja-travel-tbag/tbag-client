import { useLocation } from "react-router-dom";
import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import getSearchedPlaces from "@/apis/getSearchedPlaces.ts";
import getSearchedWorks from "@/apis/getSearchedWorks.ts";
import getSearchedWorksByActor from "@/apis/getSearchedWorksByActor.ts";
import getSearchedArtistsByMember from "@/apis/getSearchedArtistsByMember.ts";
import ContentPreview from "@/components/Preview/ContentPreview.tsx";
import { SEARCH_TYPE_LABEL } from "@/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver.ts";
import { Fragment, useEffect, useState } from "react";
import { clsx } from "clsx";

const SearchQueryMap = {
  place: (keyword: string) => {
    return infiniteQueryOptions({
      queryKey: ["place", keyword],
      queryFn: ({ pageParam }) =>
        getSearchedPlaces({ keyword: keyword, page: pageParam, size: 10 }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage!.pageable.pageNumber + 1
    });
  },
  work: (keyword: string) => {
    return {
      ...infiniteQueryOptions({
        queryKey: ["work", keyword],
        queryFn: ({ pageParam }) =>
          getSearchedWorks({ keyword: keyword, page: pageParam, size: 10 }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage!.pageable.pageNumber + 1
      })
    };
  },
  star: (keyword: string) => ({
    works: infiniteQueryOptions({
      queryKey: ["star", keyword, "works"],
      queryFn: ({ pageParam }) =>
        getSearchedWorksByActor({
          keyword: keyword,
          page: pageParam,
          size: 10
        }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage!.pageable.pageNumber + 1
    }),
    artists: infiniteQueryOptions({
      queryKey: ["star", keyword, "artists"],
      queryFn: ({ pageParam }) =>
        getSearchedArtistsByMember({
          keyword: keyword,
          page: pageParam,
          size: 10
        }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage!.pageable.pageNumber + 1
    })
  })
};

const SearchResultPage = () => {
  const location = useLocation();
  const [viewType, setViewType] = useState<"works" | "artists">("works");
  const getSearchType = () => {
    const type = location.pathname.split("/")[2];
    if (type in SEARCH_TYPE_LABEL) {
      return type as keyof typeof SEARCH_TYPE_LABEL;
    } else {
      throw new Error("Invalid search type");
    }
  };
  const getSearchKeyword = () => {
    return decodeURI(location.search.split("=")[1]);
  };
  const { ref: bottomRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5
  });

  const { data: searchedWorks, fetchNextPage: fetchNextWorks } =
    useInfiniteQuery({
      ...SearchQueryMap.work(getSearchKeyword()),
      enabled: getSearchType() === "work"
    });

  const { data: searchedPlaces, fetchNextPage: fetchNextPlaces } =
    useInfiniteQuery({
      ...SearchQueryMap.place(getSearchKeyword()),
      enabled: getSearchType() === "place"
    });

  const { data: searchedWorksByActor, fetchNextPage: fetchNextWorksByActor } =
    useInfiniteQuery({
      ...SearchQueryMap.star(getSearchKeyword()).works,
      enabled: getSearchType() === "star"
    });

  const { data: searchedArtists, fetchNextPage: fetchNextArtists } =
    useInfiniteQuery({
      ...SearchQueryMap.star(getSearchKeyword()).artists,
      enabled: getSearchType() === "star"
    });

  useEffect(() => {
    isIntersecting && fetchNextPlaces();
    isIntersecting && fetchNextWorks();
    isIntersecting && fetchNextWorksByActor();
    isIntersecting && fetchNextArtists();
  }, [isIntersecting]);

  return (
    <div
      className={"w-full h-fit flex flex-col gap-[20px] mt-[40px] mb-[20px]"}>
      <h1 className={"text-[20px] font-semibold px-[30px]"}>
        <span className={"text-main-primary"}>{getSearchKeyword()}</span>
        &nbsp;
        <span>{SEARCH_TYPE_LABEL[getSearchType()]}</span>
        &nbsp;
        <span>{"검색 결과"}</span>
      </h1>
      <div className={"flex px-[20px]"}>
        {getSearchType() !== "star" ? (
          // 장소, 작품: 검색 결과 범주가 하나
          <h2 className={"text-[16px] text-font-info px-[10px]"}>
            <span>{SEARCH_TYPE_LABEL[getSearchType()]}</span>
            &nbsp;
            <span>{`(${searchedWorks?.pages[0]?.totalElements || searchedPlaces?.pages[0]?.totalElements || "..."})`}</span>
          </h2>
        ) : (
          // 연예인: 검색 결과 범주가 두 개
          <div className={"flex gap-[15px] items-center"}>
            <h2
              className={clsx(
                "text-[16px] px-[10px] font-semibold cursor-pointer",
                viewType === "works" ? "text-font-head" : "text-font-info"
              )}>
              <span onClick={() => setViewType("works")}>{"필모그래피"}</span>
              &nbsp;
              <span>{`(${searchedWorksByActor?.pages[0]?.totalElements || "..."})`}</span>
            </h2>
            <h2
              className={clsx(
                "text-[16px] px-[10px] font-semibold cursor-pointer",
                viewType === "artists" ? "text-font-head" : "text-font-info"
              )}>
              <span onClick={() => setViewType("artists")}>{"아이돌"}</span>
              &nbsp;
              <span>{`(${searchedArtists?.pages[0]?.totalElements || "..."})`}</span>
            </h2>
          </div>
        )}
      </div>
      <div
        className={
          "w-full h-[490px] flex flex-col px-[10px] overflow-y-scroll"
        }>
        {getSearchType() === "work" &&
          searchedWorks?.pages.map((workResult, index) => (
            <Fragment key={index}>
              {workResult?.content.map((work) => (
                <ContentPreview
                  key={work.contentId}
                  data={work}
                />
              ))}
              <div ref={bottomRef} />
            </Fragment>
          ))}
        {getSearchType() === "place" &&
          searchedPlaces?.pages.map((placeResult, index) => (
            <Fragment key={index}>
              {placeResult?.content.map((place) => (
                <ContentPreview
                  key={place.locationId}
                  data={place}
                />
              ))}
              <div ref={bottomRef} />
            </Fragment>
          ))}
        {getSearchType() === "star" && (
          <Fragment>
            {viewType === "works" &&
              searchedWorksByActor?.pages.map((work, index) => (
                <Fragment key={index}>
                  {work?.content.map((work) => (
                    <ContentPreview
                      key={work.contentId}
                      data={work}
                    />
                  ))}
                  <div ref={bottomRef} />
                </Fragment>
              ))}
            {viewType === "artists" &&
              searchedArtists?.pages.map((artist, index) => (
                <Fragment key={index}>
                  {artist?.content.map((artist) => (
                    <ContentPreview
                      key={artist.contentId}
                      data={artist}
                    />
                  ))}
                  <div ref={bottomRef} />
                </Fragment>
              ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;
