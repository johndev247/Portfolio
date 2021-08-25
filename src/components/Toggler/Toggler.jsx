import React, {useEffect, useState} from "react";
import {Button, LeftLabel, RightLabel, Round, ToggleBox} from "./toggler.style";
const Toggler = ({toggleTheme}) => {
  const [right, setRight] = useState(localStorage.getItem("right") === "true");

  useEffect(() => {
    localStorage.setItem("right", right);
  }, [right]);

  const toggleButton = () => {
    setRight(!right);
  };

  return (
    <Button
      onClick={() => {
        toggleTheme();
        toggleButton();
      }}
    >
      <ToggleBox>
        <LeftLabel left={!right}>Light</LeftLabel>
        <Round right={right}></Round>
        <RightLabel right={right}>Night</RightLabel>
      </ToggleBox>
    </Button>
  );
};
export default Toggler;
