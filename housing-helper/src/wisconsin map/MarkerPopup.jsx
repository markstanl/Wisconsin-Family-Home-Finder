import React from "react";
import { Marker, Popup } from "react-map-gl";
import pin from "./pin.png";

const MarkerPopup = ({ lat, long, finalCity }) => {
  // < 250 1 <    400 < 2    1800 < 3    4000 < 4    > 5

  const getSafety = (val) => {
    if (val < 250) {
      return "Excellent";
    } else if (val < 400) {
      return "Good";
    } else if (val < 1800) {
      return "Average";
    } else if (val < 4000) {
      return "Poor";
    } else {
      return "Bad";
    }
  };

  const getWord = (val) => {
    if (val < 0.2) {
      return "Bad";
    } else if (val < 0.4) {
      return "Poor";
    } else if (val < 0.6) {
      return "Average";
    } else if (val < 0.8) {
      return "Good";
    } else {
      return "Excellent";
    }
  };
  return (
    <div>
      <Marker longitude={long} latitude={lat} anchor="bottom">
        <img src={pin} className="w-10" />
      </Marker>
      <Popup
        longitude={long}
        latitude={lat + 0.01}
        anchor="bottom"
        onClose={() => setShowPopup(false)}
        style={{ color: "#242424" }}
      >
        <h1>{finalCity.city}</h1>
        <h2> Population: {finalCity.population}</h2>
        <h2> Average House Price: {finalCity.house_median_value}</h2>
        <p> Education: {getWord(finalCity.crime_index)}</p>
        <p> Employability: {getWord(finalCity.employed_percentage_norm)}</p>
        <p> Safety: {getSafety(finalCity.crime_index)}</p>
      </Popup>
    </div>
  );
};

export default MarkerPopup;
