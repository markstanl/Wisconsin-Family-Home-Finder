import React, { useState, useEffect } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const WisconsinMapMain = () => {
  // Add the locations, see if can add hover effect
  // Limit the map around wisconsin,
  // Change map theme to be less ugly
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 43.784439,
    longitude: -88.787865,
    zoom: 4.49,
  });

  // Define maxBounds with correct coordinates
  const maxBounds = [
    [-93.38191, 46.899241], // [minLongitude, minLatitude]
    [-85.861953, 42.156888], // [maxLongitude, maxLatitude]
  ];

  const generousMaxBounds = [
    [-97.677088, 60], // [minLongitude, minLatitude]
    [-82.857848, 30], // [maxLongitude, maxLatitude]
  ];

  return (
    <div className="h-screen">
      <div className="h-screen w-screen">
        <ReactMapGL
          initialViewState={{
            latitude: 43.784439,
            longitude: -88.787865,
            zoom: 6,
          }}
          width="50vw"
          height="100vh"
          mapStyle="mapbox://styles/ignasd/clt0ndnh600sj01qs6v5n3ug8"
          mapboxAccessToken={
            "pk.eyJ1IjoiaWduYXNkIiwiYSI6ImNsdDBkb3dxczB4em4yb21uZ2hmdDZ3aXoifQ.pbbOUb_r8sNLbwrJPNmlkw"
          }
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          maxBounds={generousMaxBounds}
        ></ReactMapGL>
      </div>
    </div>
  );
};

export default WisconsinMapMain;
