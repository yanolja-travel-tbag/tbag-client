import { Container as MapContainer } from "react-naver-maps";
import MainBottomSheet from "@/components/BottomSheet/MainBottomSheet.tsx";
import NaverMaps from "@/components/Map/NaverMap.tsx";

const MainPage = () => {
  return (
    <>
      <MapContainer style={{ width: "100%", height: "100%" }}>
        <NaverMaps />
      </MapContainer>
      <MainBottomSheet />
    </>
  );
};

export default MainPage;
