import { useState } from "react";
import "./styles.css";
import WebRouter from "./WebRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WebRouter />
    </>
  );
}

export default App;
