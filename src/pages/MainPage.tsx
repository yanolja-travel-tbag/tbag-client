import { Container as MapContainer } from "react-naver-maps";
import MainBottomSheet from "@/components/BottomSheet/MainBottomSheet.tsx";
import NaverMaps from "@/components/Map/NaverMap.tsx";
import { clsx } from "clsx";
import { useState } from "react";

const MARKER_FILTER_LABEL = {
  all: "전체",
  drama: "드라마",
  movie: "영화",
  artist: "아이돌"
};

const MainPage = () => {
  const [markerFilter, setMarkerFilter] =
    useState<keyof typeof MARKER_FILTER_LABEL>("all");

  return (
    <>
      <MapContainer
        className={"relative"}
        style={{ width: "100%", height: "100%" }}>
        <div className={"absolute top-[22px] left-[20px] flex gap-2"}>
          <div
            className={clsx(
              "w-fit h-8 z-10 rounded-[50px] cursor-pointer",
              "flex items-center justify-center text-[12px] drop-shadow-lg border border-font-info",
              markerFilter === "all"
                ? "bg-font-body text-white"
                : "bg-white text-font-info"
            )}
            onClick={() => setMarkerFilter("all")}>
            <span className={"my-2 mx-4"}>{MARKER_FILTER_LABEL.all}</span>
          </div>
          <div
            className={clsx(
              "w-fit h-8 z-10 rounded-[50px] cursor-pointer",
              "flex items-center justify-center text-[12px] drop-shadow-lg border border-font-info",
              markerFilter === "drama"
                ? "bg-font-body text-white"
                : "bg-white text-font-info"
            )}
            onClick={() => setMarkerFilter("drama")}>
            <span className={"my-2 mx-4"}>{MARKER_FILTER_LABEL.drama}</span>
          </div>
          <div
            className={clsx(
              "w-fit h-8 z-10 rounded-[50px] cursor-pointer",
              "flex items-center justify-center text-[12px] drop-shadow-lg border border-font-info",
              markerFilter === "movie"
                ? "bg-font-body text-white"
                : "bg-white text-font-info"
            )}
            onClick={() => setMarkerFilter("movie")}>
            <span className={"my-2 mx-4"}>{MARKER_FILTER_LABEL.movie}</span>
          </div>
          <div
            className={clsx(
              "w-fit h-8 z-10 rounded-[50px] cursor-pointer",
              "flex items-center justify-center text-[12px] drop-shadow-lg border border-font-info",
              markerFilter === "artist"
                ? "bg-font-body text-white"
                : "bg-white text-font-info"
            )}
            onClick={() => setMarkerFilter("artist")}>
            <span className={"my-2 mx-4"}>{MARKER_FILTER_LABEL.artist}</span>
          </div>
        </div>
        <NaverMaps />
      </MapContainer>
      <MainBottomSheet />
    </>
  );
};

export default MainPage;
