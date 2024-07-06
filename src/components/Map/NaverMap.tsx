import { Marker, NaverMap, useNavermaps } from "react-naver-maps";
import { MarkerData } from "@/apis/types.ts";
import { useDebouncedCallback } from "@/hooks/useDebouncedCallback.ts";
import { useState } from "react";

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

  return (
    <NaverMap
      defaultCenter={initialCenter}
      defaultZoom={14}
      onBoundsChanged={(value) => handleFilterMarkers(value)}>
      {markers.map((data, index) => (
        <Marker
          key={index}
          position={new maps.LatLng(data.latitude, data.longitude)}
          onClick={() => alert(data.contentMediaType)}
          icon={{
            content: `<div class="marker_layout">
              <img src="${
                MARKER_ICON_PATH[
                  data.contentMediaType.toLowerCase() as keyof typeof MARKER_ICON_PATH
                ]
              }" width="42" height="42" />
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
