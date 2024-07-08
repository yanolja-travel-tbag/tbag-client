import { Container as MapContainer } from "react-naver-maps";
import MainBottomSheet from "@/components/BottomSheet/MainBottomSheet.tsx";
import { useState } from "react";
import FilterItem from "@/components/Filter/FilterItem.tsx";
import { MARKER_ARTIST, MARKER_DRAMA, MARKER_MOVIE } from "@/constants/mock.ts";
import PlaceDetailBottomSheet from "@/components/BottomSheet/PlaceDetailBottomSheet.tsx";
import MainPageMap from "@/components/Map/MainPageMap.tsx";
import NeedLoginDialog from "@/components/Dialog/NeedLoginDialog.tsx";

const MARKER_FILTER_LABEL = {
  all: "filters.label.all",
  drama: "filters.label.drama",
  movie: "filters.label.movie",
  artist: "filters.label.artist"
};

const TEMP_MARKER_DATA = [...MARKER_ARTIST, ...MARKER_DRAMA, ...MARKER_MOVIE];

const MainPage = () => {
  const [markerFilter, setMarkerFilter] = useState("all");
  // const { data: markerData } = useSuspenseQuery({
  //   queryKey: ["markers", markerFilter],
  //   queryFn: () => getMarker(markerFilter),
  //   staleTime: 1000 * 60 * 5 // 5분
  // });

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
        <MainPageMap markerData={TEMP_MARKER_DATA} />
      </MapContainer>
      <MainBottomSheet />
      <PlaceDetailBottomSheet />
      <NeedLoginDialog />
    </>
  );
};

export default MainPage;
