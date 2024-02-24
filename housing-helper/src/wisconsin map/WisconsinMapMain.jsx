import React, {useState} from "react";
import ReactMapGL from "react-map-gl";

const WisconsinMapMain = () => {
  const [viewport, setViewport] = useState({
    latitude: 43.784439,
    longitude:-88.787865,
    height: "50vh",
    width: "50wh",
    zoom: 6
  });


  return <div>
    <ReactMapGL {...viewport}  width="100%" height="100%"
      mapStyle="mapbox://styles/ignasd/clt0fp2za00ee01qf2xxfgflu"
      mapboxAccessToken={"pk.eyJ1IjoiaWduYXNkIiwiYSI6ImNsdDBkb3dxczB4em4yb21uZ2hmdDZ3aXoifQ.pbbOUb_r8sNLbwrJPNmlkw"} 
      onViewportChange={viewport => (setViewport(viewport))}
      />
        markers here
      

  </div>
};

export default WisconsinMapMain;
