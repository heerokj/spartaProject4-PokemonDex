import React from "react";
import { flushSync } from "react-dom";
import { MOCK_DATA } from "../mock";

const PokemonCard = ({ MOCK_DATA }) => {
  console.log("MOCK_DATA");
  console.log("MOCK_DATA", MOCK_DATA[0]);
  return <div>PokemonCard</div>;
};

export default PokemonCard;
