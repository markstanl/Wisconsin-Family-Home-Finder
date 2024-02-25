import React, { useState } from "react";
import { motion } from "framer-motion";
import WisconsinMapMain from "../wisconsin map/WisconsinMapMain";
import SideMenu from "../side filters/SideMenu";
import SideMenuButton from "../side filters/SideMenuButton";
import FinalCity from "../side filters/Final City/FinalCity";
import HandleJson from "../side filters/HandleJson";

const MainPage = () => {
  const [pressed, setPressed] = useState(false);
  const [rankingArray, setRankingArray] = useState([null, null, null]);
  const [finalCity, setFinalCity] = useState("");
  const [tryAgain, setTryAgain] = useState(false);

  return (
    <div className="w-full h-full relative">
      <WisconsinMapMain finalCity={finalCity} />
      <HandleJson rankingArray={rankingArray} />
      <motion.div
        className="flex flex-row h-full absolute top-0"
        initial={{ x: "0%" }}
        animate={{ x: pressed ? "0%" : "-85%" }}
        transition={{ duration: 0.5 }}
      >
        {(tryAgain || !finalCity) && (
          <SideMenu
            rankingArray={rankingArray}
            setRankingArray={setRankingArray}
            setFinalCity={setFinalCity}
            setTryAgain={setTryAgain}
          />
        )}
        {!tryAgain && finalCity && (
          <FinalCity setTryAgain={setTryAgain} finalCity={finalCity} />
        )}
        <SideMenuButton setPressed={setPressed} pressed={pressed} />
      </motion.div>
    </div>
  );
};

export default MainPage;
