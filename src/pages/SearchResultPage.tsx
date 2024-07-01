import { useLocation } from "react-router-dom";
import { queryOptions, useQuery } from "@tanstack/react-query";
import getSearchedPlaces from "@/apis/getSearchedPlaces.ts";
import getSearchedWorks from "@/apis/getSearchedWorks.ts";
import getSearchedWorksByActor from "@/apis/getSearchedWorksByActor.ts";
import getSearchedArtistsByMember from "@/apis/getSearchedArtistsByMember.ts";
import ContentPreview from "@/components/Preview/ContentPreview.tsx";
import { SEARCH_TYPE_LABEL } from "@/constants";

const SearchQueryMap = {
  place: (keyword: string) => {
    return queryOptions({
      queryKey: ["place", keyword],
      queryFn: () => getSearchedPlaces({ keyword: keyword, page: 0, size: 10 })
    });
  },
  work: (keyword: string) => {
    return queryOptions({
      queryKey: ["work", keyword],
      queryFn: () => getSearchedWorks({ keyword: keyword, page: 0, size: 10 })
    });
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
  const { data: searchedWorks } = useQuery({
    ...SearchQueryMap.work(getSearchKeyword()),
    enabled: getSearchType() === "work"
  });

  const { data: searchedPlaces } = useQuery({
    ...SearchQueryMap.place(getSearchKeyword()),
    enabled: getSearchType() === "place"
  });

  const { data: searchedStars } = useQuery({
    ...SearchQueryMap.star(getSearchKeyword()),
    enabled: getSearchType() === "star"
  });

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
          <span>{`(${searchedWorks?.totalElements || searchedPlaces?.totalElements})`}</span>
        </h2>
      </div>
      <div
        className={
          "w-full h-[490px] flex flex-col px-[10px] overflow-y-scroll"
        }>
        {getSearchType() === "work" &&
          searchedWorks?.content.map((work) => (
            <ContentPreview
              key={work.contentId}
              type={"work"}
              data={work}
            />
          ))}
        {getSearchType() === "place" &&
          searchedPlaces?.content.map((place) => (
            <ContentPreview
              key={place.locationId}
              type={"place"}
              data={place}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchResultPage;
