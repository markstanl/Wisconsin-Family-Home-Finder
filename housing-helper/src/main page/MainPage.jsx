import React, { useState } from "react";
import { motion } from "framer-motion";
import WisconsinMapMain from "../wisconsin map/WisconsinMapMain";
import SideMenu from "../side filters/SideMenu";
import SideMenuButton from "../side filters/SideMenuButton";

const MainPage = () => {
  const [pressed, setPressed] = useState(false);
  const [rankingArray, setRankingArray] = useState([null, null, null]);

  return (
    <div className="w-full h-full relative">
      <WisconsinMapMain />
      <motion.div
        className="flex flex-row h-full absolute top-0"
        initial={{ x: "0%" }}
        animate={{ x: pressed ? "0%" : "-85%" }}
        transition={{ duration: 0.5 }}
      >
        <SideMenu
          rankingArray={rankingArray}
          setRankingArray={setRankingArray}
        />
        <SideMenuButton setPressed={setPressed} pressed={pressed} />
      </motion.div>
    </div>
  );
};

export default MainPage;
