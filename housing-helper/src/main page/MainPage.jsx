import React from "react";
import WisconsinMapMain from "../wisconsin map/WisconsinMapMain";
import SideMenu from "../side filters/SideMenu";

const MainPage = () => {
  return (
    <div className="w-full h-full">
      <SideMenu />
      <WisconsinMapMain />
    </div>
  );
};

export default MainPage;
