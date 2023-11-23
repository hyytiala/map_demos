import Map from "react-map-gl/maplibre";
import { style } from "./style";

export default function App() {
  return (
    <Map
      initialViewState={{
        longitude: 24.92,
        latitude: 60.17,
        zoom: 10,
      }}
      mapStyle={style}
    />
  );
}
