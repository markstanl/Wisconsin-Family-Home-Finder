import React, { useState } from "react";
import WisconsinMapMain from "../wisconsin map/WisconsinMapMain";
import SideMenu from "../side filters/SideMenu";
import SideMenuButton from "../side filters/SideMenuButton";

const MainPage = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="w-full h-full">
      <WisconsinMapMain />
      <div className="flex flex-row h-full w-full absolute top-0">
        {pressed && <SideMenu />}
        <SideMenuButton setPressed={setPressed} pressed={pressed} />
      </div>
    </div>
  );
};

export default MainPage;
