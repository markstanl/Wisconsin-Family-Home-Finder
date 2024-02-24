import React from "react";

const SideMenuButton = ({ setPressed, pressed }) => {
  return (
    <div className="h-full w-16 bg-primary flex flex-row justify-center overflow-hidden">
      <div className="w-screen h-full flex" />
      <button className="h-full w-full" onClick={() => setPressed(!pressed)}>
        <div className="transform rotate-90 whitespace-nowrap flex justify-center">
          CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE
          CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE
          CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE
          CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE
          CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE
          CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE
        </div>
      </button>
    </div>
  );
};

export default SideMenuButton;
