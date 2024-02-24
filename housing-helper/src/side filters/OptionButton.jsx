import React, { useState } from "react";

const OptionButton = ({ options }) => {
  const [optionPicked, setOptionPicked] = useState(null);

  const bgcolor = "bg-accent";

  const styles = [
    `h-full w-1/3 ${bgcolor} rounded-l-lg flex justify-center items-center`,
    `h-full w-1/3 ${bgcolor} border-l-2 border-r-2 border-black flex justify-center items-center`,
    `h-full w-1/3 ${bgcolor} rounded-r-lg flex justify-center items-center`,
  ];

  return (
    <div
      className={`h-16 w-3/5 ${bgcolor} button-container flex flex-row justify-between`}
    >
      {options.map((option, index) => {
        return (
          <div
            className={styles[index]}
            onClick={() => {
              setOptionPicked(option);
            }}
            key={index}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};

export default OptionButton;
