import React from "react";

const FinalCityComponent = ({
  cityName,
  cityDescription,
  cityImage,
  setTryAgain,
}) => {
  return (
    <div className="h-screen w-[20vw]">
      <div className="w-[20vw] h-screen bg-backgroundLight flex flex-col justify-around items-center p-3">
        <div className="flex flex-col items-center mt-10">
          <p className="text-text pb-4">your city is...</p>
          <h1 className="primary-accent-text-gradient">{cityName}</h1>
          <img src={cityImage} alt="city" className="w-[90%]" />
          <p className="text-text text-sm pt-4">{cityDescription}</p>
        </div>
        <div
          className="w-full h-16 flex reset-button-container mb-10"
          onClick={() => {
            setTryAgain(true);
          }}
        >
          Reset
        </div>
      </div>
    </div>
  );
};

export default FinalCityComponent;
