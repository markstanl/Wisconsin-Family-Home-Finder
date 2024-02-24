import React from "react";
import OptionButton from "./OptionButton";

const SideMenu = () => {
  return (
    <div className="w-1/5 h-full bg-backgroundLight flex flex-col items-center ">
      <div className="w-full h-16 flex" />
      <div>
        <h1 className="primary-accent-text-gradient">Filter Options</h1>
      </div>
      <OptionButton options={[1, 2, 3]} />
    </div>
  );
};

export default SideMenu;
