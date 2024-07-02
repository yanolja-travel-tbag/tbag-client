import { useLocation } from "react-router-dom";
import {
  infiniteQueryOptions,
  queryOptions,
  useInfiniteQuery
} from "@tanstack/react-query";
import getSearchedPlaces from "@/apis/getSearchedPlaces.ts";
import getSearchedWorks from "@/apis/getSearchedWorks.ts";
import getSearchedWorksByActor from "@/apis/getSearchedWorksByActor.ts";
import getSearchedArtistsByMember from "@/apis/getSearchedArtistsByMember.ts";
import ContentPreview from "@/components/Preview/ContentPreview.tsx";
import { SEARCH_TYPE_LABEL } from "@/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver.ts";
import { Fragment, useEffect } from "react";

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
    // return queryOptions({
    //   queryKey: ["work", keyword],
    //   queryFn: () => getSearchedWorks({ keyword: keyword, page: 0, size: 10 })
    // });
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
  star: (keyword: string) => {
    return queryOptions({
      queryKey: ["star", keyword],
      queryFn: () => {
        return {
          works: getSearchedWorksByActor(keyword),
          artists: getSearchedArtistsByMember(keyword)
        };
      }
    });
  }
};

const SearchResultPage = () => {
  const location = useLocation();

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

  // const { data: searchedPlaces } = useQuery({
  //   ...SearchQueryMap.place(getSearchKeyword()),
  //   enabled: getSearchType() === "place"
  // });

  const { data: searchedPlaces, fetchNextPage: fetchNextPlaces } =
    useInfiniteQuery({
      ...SearchQueryMap.place(getSearchKeyword()),
      enabled: getSearchType() === "place"
    });

  // const { data: searchedStars } = useQuery({
  //   ...SearchQueryMap.star(getSearchKeyword()),
  //   enabled: getSearchType() === "star"
  // });

  useEffect(() => {
    isIntersecting && fetchNextPlaces();
    isIntersecting && fetchNextWorks();
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
      <div className={"flex flex-col px-[20px] gap-[12px]"}>
        <h2 className={"text-[16px] text-font-info px-[10px]"}>
          <span>{SEARCH_TYPE_LABEL[getSearchType()]}</span>
          &nbsp;
          <span>{`(${searchedWorks?.pages[0]?.totalElements || searchedPlaces?.pages[0]?.totalElements || "..."})`}</span>
        </h2>
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
                  type={"work"}
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
                  type={"place"}
                  data={place}
                />
              ))}
              <div ref={bottomRef} />
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default SearchResultPage;
