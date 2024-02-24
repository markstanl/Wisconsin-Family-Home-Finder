import React, { useState, useEffect } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const WisconsinMapMain = () => {

  // Add the locations, see if can add hover effect
  // Limit the map around wisconsin,
  // Change map theme to be less ugly
  
  
  return (
    <div>
      <div className="h-14 w-full" />
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
         
        ></ReactMapGL>
      </div>
    </div>
  );
};

export default WisconsinMapMain;
