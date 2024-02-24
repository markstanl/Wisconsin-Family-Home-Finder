import React, { useState, useEffect } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const WisconsinMapMain = () => {
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
          mapStyle="mapbox://styles/ignasd/clt0fp2za00ee01qf2xxfgflu"
          mapboxAccessToken={
            "pk.eyJ1IjoiaWduYXNkIiwiYSI6ImNsdDBkb3dxczB4em4yb21uZ2hmdDZ3aXoifQ.pbbOUb_r8sNLbwrJPNmlkw"
          }
          //onChangeViewport={setViewport}
          //dragPan={true}
        ></ReactMapGL>
      </div>
    </div>
  );
};

export default WisconsinMapMain;
