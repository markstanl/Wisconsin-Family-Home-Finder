import React from "react";
import FinalCityComponent from "./FinalCityComponent";
import cityImage from "./City Images/Madison.jpg";

const FinalCity = ({ setTryAgain, finalCity }) => {
  const cityName = finalCity.city;
  const cityDescription =
    "Madison is the capital of Wisconsin. It is a city with a rich history and a vibrant culture. It is home to the University of Wisconsin-Madison, which is one of the top public universities in the United States. The city is known for its beautiful lakes, parks, and bike trails. Madison is also a great place for foodies, with a wide variety of restaurants and food trucks. The city has a strong economy and is a great place to live and work.";
  return (
    <>
      {finalCity && (
        <FinalCityComponent
          cityName={cityName}
          cityImage={cityImage}
          cityDescription={cityDescription}
          setTryAgain={setTryAgain}
        />
      )}
      {/* {!finalCity && (
        <>
          <h1 className="primary-accent-text-gradient">Oops</h1>
          <p>
            Seems like your query didn't return any results, try a different
            input!
          </p>
          <div
            className="w-full h-16 flex reset-button-container mb-10"
            onClick={() => {
              setTryAgain(true);
            }}
          >
            Reset
          </div>
        </>
      )} */}
    </>
  );
};

export default FinalCity;
