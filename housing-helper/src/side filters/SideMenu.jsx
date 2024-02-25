import React, { useState, useEffect } from "react";
import OptionButton from "./OptionButton";
import Submit from "./Submit";
import PriceTextBox from "./PriceTextBox";

const SideMenu = ({
  rankingArray,
  setRankingArray,
  setFinalCity,
  setTryAgain,
}) => {
  const [educationRanking, setEducationRanking] = useState(null);
  const [incomeRanking, setIncomeRanking] = useState(null);
  const [crimeRanking, setCrimeRanking] = useState(null);
  const [priceValue, setPriceValue] = useState(null);

  useEffect(() => {
    setRankingArray([
      educationRanking,
      incomeRanking,
      crimeRanking,
      priceValue,
    ]);
  }, [educationRanking, incomeRanking, crimeRanking, priceValue]);

  return (
    <div className="w-[20vw] h-full bg-backgroundLight flex flex-col items-center">
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
          <p className="text-primary font-bold text-xl">Crime</p>
          <OptionButton
            options={[1, 2, 3, 4, 5]}
            setPressed={setCrimeRanking}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-primary font-bold text-xl">Input Budget</p>
          <PriceTextBox
            setPriceValue={setPriceValue}
            setTryAgain={setTryAgain}
          />
        </div>
      </div>
      <Submit
        rankingArray={rankingArray}
        setFinalCity={setFinalCity}
        setTryAgain={setTryAgain}
      />
    </div>
  );
};

export default SideMenu;
