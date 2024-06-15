import { Marker, NaverMap, useNavermaps } from "react-naver-maps";

const NaverMaps = () => {
  const maps = useNavermaps();

  return (
    <NaverMap
      defaultCenter={new maps.LatLng(37.3595704, 127.105399)}
      defaultZoom={16}>
      <Marker defaultPosition={new maps.LatLng(37.3595704, 127.105399)} />
    </NaverMap>
  );
};

export default NaverMaps;
