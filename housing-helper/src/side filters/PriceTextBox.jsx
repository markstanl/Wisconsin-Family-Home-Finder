import React, { useState } from "react";

const PriceTextBox = ({ setPriceValue }) => {
  const [price, setPrice] = useState("");
  const [isValidPrice, setIsValidPrice] = useState(false);

  const handleInputChange = (e) => {
    if (!isNaN(e.target.value)) {
      setPrice(e.target.value);
    }
    checkValidity();
  };

  const checkValidity = () => {
    if (price.length > 0) {
      setIsValidPrice(true);
      setPriceValue(price);
    } else {
      setIsValidPrice(false);
    }
  };

  return (
    <div className="h-12 w-full flex justify-center">
      <input
        className="input-container w-3/5"
        type="text"
        value={price}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PriceTextBox;
