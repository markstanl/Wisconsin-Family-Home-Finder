import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-yellow-400">
      <h1 className="text-green-400">Hello Wisconsin</h1>
    </div>
  );
}

export default App;
