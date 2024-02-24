import { useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./styles.css";

import WebRouter from "./WebRouter";

function App() {
  return (
    <div className="w-screen h-screen">
      <WebRouter />
    </div>
  );
}

export default App;
