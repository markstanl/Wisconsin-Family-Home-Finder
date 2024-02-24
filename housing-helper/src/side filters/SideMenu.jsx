import React, { useState } from "react";
import OptionButton from "./OptionButton";

const SideMenu = () => {
  const [educationRanking, setEducationRanking] = useState(null);

  return (
    <div className="w-1/5 h-full bg-backgroundLight flex flex-col items-center">
      <div className="w-full h-16 flex" />
      <div className="text-center">
        <h1 className="primary-accent-text-gradient">Filter Options</h1>
        <h2 className="text-white font-semibold">Rank these on importance</h2>
      </div>
      <p className="text-primary font-bold">Education</p>
      <OptionButton options={[1, 2, 3]} setPressed={setEducationRanking} />
    </div>
  );
};

export default SideMenu;
