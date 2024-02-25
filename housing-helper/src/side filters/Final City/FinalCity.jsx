import React from "react";
import FinalCityComponent from "./FinalCityComponent";
import cityImage from "./City Images/Madison.jpg";

const FinalCity = ({ setTryAgain }) => {
  const cityName = "Madison";
  const cityDescription =
    "Madison is the capital of Wisconsin. It is a city with a rich history and a vibrant culture. It is home to the University of Wisconsin-Madison, which is one of the top public universities in the United States. The city is known for its beautiful lakes, parks, and bike trails. Madison is also a great place for foodies, with a wide variety of restaurants and food trucks. The city has a strong economy and is a great place to live and work.";
  return (
    <>
      <FinalCityComponent
        cityName={cityName}
        cityImage={cityImage}
        cityDescription={cityDescription}
        setTryAgain={setTryAgain}
      />
    </>
  );
};

export default FinalCity;
