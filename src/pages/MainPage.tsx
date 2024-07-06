import { Container as MapContainer } from "react-naver-maps";
import MainBottomSheet from "@/components/BottomSheet/MainBottomSheet.tsx";
import NaverMaps from "@/components/Map/NaverMap.tsx";
import { useState } from "react";
import FilterItem from "@/components/Filter/FilterItem.tsx";

const MARKER_FILTER_LABEL = {
  all: "전체",
  drama: "드라마",
  movie: "영화",
  artist: "아이돌"
};

const MainPage = () => {
  const [markerFilter, setMarkerFilter] = useState("all");

  return (
    <>
      <MapContainer
        className={"relative"}
        style={{ width: "100%", height: `calc(100vh - 82px)` }}>
        <div className={"absolute top-[22px] left-[20px] flex gap-2"}>
          {Object.keys(MARKER_FILTER_LABEL).map((key) => (
            <FilterItem
              key={key}
              filterValue={key}
              filterLabel={
                MARKER_FILTER_LABEL[key as keyof typeof MARKER_FILTER_LABEL]
              }
              currentFilter={markerFilter}
              setFilter={setMarkerFilter}
            />
          ))}
        </div>
        <NaverMaps />
      </MapContainer>
      <MainBottomSheet />
    </>
  );
};

export default MainPage;
