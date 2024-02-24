import React, { useState } from "react";

const OptionButton = ({ options }) => {
  const [optionPicked, setOptionPicked] = useState(null);

  const bgcolor = "bg-white";

  const regStyles = [
    `h-full w-1/3 ${bgcolor} flex justify-center items-center color-black`,
    `h-full w-1/3 ${bgcolor} border-l-2 border-r-2 border-black flex justify-center items-center color-black`,
    `h-full w-1/3 ${bgcolor}  flex justify-center items-center color-black`,
  ];

  const selectedbgcolor = "bg-accent";

  const selectedStyles = [
    `h-full w-1/3 ${selectedbgcolor} flex justify-center items-center color-white`,
    `h-full w-1/3 ${selectedbgcolor} border-l-2 border-r-2 border-black flex justify-center items-center color-white`,
    `h-full w-1/3 ${selectedbgcolor} rounded-r-lg flex justify-center items-center color-white`,
  ];

  return (
    <div
      className={`h-16 w-3/5 ${bgcolor} button-container flex flex-row justify-between overflow-hidden`}
    >
      {options.map((option, index) => {
        return (
          <div
            className={
              optionPicked === index + 1
                ? selectedStyles[index]
                : regStyles[index]
            }
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
