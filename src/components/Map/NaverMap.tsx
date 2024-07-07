import { Marker, NaverMap, useNavermaps } from "react-naver-maps";
import { MarkerData, MarkerDataDetail } from "@/apis/types.ts";
import { useDebouncedCallback } from "@/hooks/useDebouncedCallback.ts";
import { useState } from "react";
import getMarkerDetail from "@/apis/getMarkerDetail.ts";
import bottomSheetStore from "@/store/bottomSheetStore.ts";

interface NaverMapsProps {
  markerData: MarkerData[];
}

const MARKER_ICON_PATH = {
  movie: "/assets/marker-movie.png",
  drama: "/assets/marker-drama.png",
  artist: "/assets/marker-artist.png"
};

const NaverMaps = ({ markerData }: NaverMapsProps) => {
  const [markers, setMarkers] = useState<MarkerData[]>(markerData ?? []);
  const maps = useNavermaps();
  const [map, setMap] = useState<naver.maps.Map | null>();
  const initialCenter = new maps.LatLng(37.5632772, 126.986827);
  const handleFilterMarkers = useDebouncedCallback(
    (value: naver.maps.Bounds) => {
      const filteredMarkers = markerData.filter((data) => {
        return value.hasPoint(
          new naver.maps.LatLng(data.latitude, data.longitude)
        );
      });
      setMarkers(filteredMarkers);
    },
    500
  );

  const {
    setIsPlaceDetailBottomSheetOpen,
    setPlaceDetailBottomSheetSnapPoint,
    setPlaceDetailId
  } = bottomSheetStore();

  const basicInfoWindow = ({
    content,
    position
  }: {
    content: MarkerDataDetail;
    position: naver.maps.LatLng;
  }) =>
    new maps.InfoWindow({
      content: [
        `<div class="marker_info_window">`,
        `<img class="marker_info_window__image" src=${content.image.imageUrl} />`,
        `<p class="marker_info_window__content">`,
        `<span class="marker_info_window__title">${content.placeName}</span>`,
        `<span class="marker_info_window__description">${content.locationString}</span>`,
        `</p>`,
        `</div>`
      ].join(""),
      position: position,
      disableAnchor: true,
      borderWidth: 0,
      pixelOffset: new maps.Point(0, -42),
      maxWidth: 200
    });

  return (
    <NaverMap
      defaultCenter={initialCenter}
      defaultZoom={14}
      onBoundsChanged={(value) => handleFilterMarkers(value)}
      onCenterChanged={() => setIsPlaceDetailBottomSheetOpen(false)}
      ref={setMap}>
      {markers.map((data, index) => (
        <Marker
          key={index}
          position={new maps.LatLng(data.latitude, data.longitude)}
          onClick={() => {
            getMarkerDetail(data.locationId)
              .then((data) => {
                const infoWindow = basicInfoWindow({
                  content: data,
                  position: new maps.LatLng(data.latitude, data.longitude)
                });
                infoWindow.open(map!);
                infoWindow.getContentElement().addEventListener("click", () => {
                  setPlaceDetailId(data.locationId);
                  setPlaceDetailBottomSheetSnapPoint(0.8);
                  setIsPlaceDetailBottomSheetOpen(true);
                  infoWindow.close();
                });
              })
              .catch((error) => console.error(error));
          }}
          icon={{
            content: `<div class="marker_layout">
              <img src="${
                MARKER_ICON_PATH[
                  data.contentMediaType.toLowerCase() as keyof typeof MARKER_ICON_PATH
                ]
              }" alt="${data.contentTitle}-marker" width="42" height="42" />
            <span class="marker_label">${data.contentTitle}</span>
            </div>`,
            scaledSize: new maps.Size(42, 42),
            origin: new maps.Point(0, 0)
          }}
        />
      ))}
    </NaverMap>
  );
};

export default NaverMaps;
