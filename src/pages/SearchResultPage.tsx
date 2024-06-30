import { useLocation } from "react-router-dom";
import ContentPreview from "@/components/Preview/ContentPreview.tsx";

const SEARCH_TYPE_LABEL = {
  place: "장소",
  work: "작품",
  star: "연예인"
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
          <span>{`(${1})`}</span>
        </h2>
      </div>
      <div
        className={
          "w-full h-[490px] flex flex-col px-[10px] overflow-y-scroll"
        }>
        <ContentPreview />
        <ContentPreview />
        <ContentPreview />
        <ContentPreview />
        <ContentPreview />
        <ContentPreview />
      </div>
    </div>
  );
};

export default SearchResultPage;
