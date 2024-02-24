import React, { useState } from "react";
import WisconsinMapMain from "../wisconsin map/WisconsinMapMain";
import SideMenu from "../side filters/SideMenu";
import SideMenuButton from "../side filters/SideMenuButton";

const MainPage = () => {
  const [pressed, setPressed] = useState(false);
  const [rankingArray, setRankingArray] = useState([null, null, null]);

  return (
    <div className="w-full h-full">
      <WisconsinMapMain />
      <div className="flex flex-row h-full absolute top-0">
        {pressed && (
          <SideMenu
            rankingArray={rankingArray}
            setRankingArray={setRankingArray}
          />
        )}
        <SideMenuButton setPressed={setPressed} pressed={pressed} />
      </div>
    </div>
  );
};

export default MainPage;
