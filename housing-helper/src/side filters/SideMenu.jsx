import React, { useState, useEffect } from "react";
import OptionButton from "./OptionButton";
import Submit from "./Submit";
import PriceTextBox from "./PriceTextBox";

const SideMenu = ({ rankingArray, setRankingArray }) => {
  const [educationRanking, setEducationRanking] = useState(null);
  const [incomeRanking, setIncomeRanking] = useState(null);
  const [crimeRanking, setCrimeRanking] = useState(null);

  useEffect(() => {
    setRankingArray([educationRanking, incomeRanking, crimeRanking]);
  }, [educationRanking, incomeRanking, crimeRanking]);

  return (
    <div className="w-1/5 h-full bg-backgroundLight flex flex-col items-center">
      <div className="w-full h-16 flex" />
      <div className="text-center">
        <h1 className="primary-accent-text-gradient">Filter Options</h1>
        <h2 className="text-white font-semibold">Rank these on importance</h2>
        <p className="text-m text-white">
          {"Not important ---> Very important"}
        </p>
      </div>
      <div className="w-full h-[60%] flex flex-col justify-around ">
        <div className="flex flex-col items-center">
          <p className="text-primary font-bold text-xl">Education</p>
          <OptionButton
            options={[1, 2, 3, 4, 5]}
            setPressed={setEducationRanking}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-primary font-bold text-xl">Income</p>
          <OptionButton
            options={[1, 2, 3, 4, 5]}
            setPressed={setIncomeRanking}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-primary font-bold text-xl">Crime {crimeRanking}</p>
          <OptionButton
            options={[1, 2, 3, 4, 5]}
            setPressed={setCrimeRanking}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-primary font-bold text-xl">Input Budget</p>
          <PriceTextBox />
        </div>
      </div>
      <Submit rankingArray={rankingArray} />
    </div>
  );
};

export default SideMenu;
