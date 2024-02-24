import React, { useState, useEffect } from "react";

const OptionButton = ({ options, setPressed }) => {
  const [optionPicked, setOptionPicked] = useState(null);

  //Set a passed variable to the value of the current picked option
  useEffect(() => {
    setPressed(optionPicked);
  }, [optionPicked]);

  const bgcolor = "bg-white";

  const regStyles = [
    `h-full w-1/3 ${bgcolor} flex justify-center items-center text-background`,
    `h-full w-1/3 ${bgcolor} border-l-2 border-r-2 border-accent flex justify-center items-center text-background`,
    `h-full w-1/3 ${bgcolor} border-r-2 border-accent flex justify-center items-center text-background`,
    `h-full w-1/3 ${bgcolor} border-r-2 border-accent flex justify-center items-center text-background`,
    `h-full w-1/3 ${bgcolor}  flex justify-center items-center text-background`,
  ];

  const selectedbgcolor = "bg-accent";

  const selectedStyles = [
    `h-full w-1/3 ${selectedbgcolor} flex justify-center items-center text-white`,
    `h-full w-1/3 ${selectedbgcolor} border-l-2 border-r-2 border-accent flex justify-center items-center text-white`,
    `h-full w-1/3 ${selectedbgcolor} border-r-2 border-accent flex justify-center items-center text-white`,
    `h-full w-1/3 ${selectedbgcolor} border-r-2 border-accent flex justify-center items-center text-white`,
    `h-full w-1/3 ${selectedbgcolor} flex justify-center items-center text-white`,
  ];

  return (
    <div
      className={`h-12 w-3/5 ${bgcolor} button-container flex flex-row justify-between overflow-hidden`}
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
