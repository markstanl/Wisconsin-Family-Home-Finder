import React from "react";

const SideMenuButton = ({ setPressed, pressed }) => {
  return (
    <div className="h-full w-16 bg-green-500 flex flex-row justify-center">
      <div className="w-full h-16 flex" />
      <button onClick={() => setPressed(!pressed)}>Open</button>
    </div>
  );
};

export default SideMenuButton;
