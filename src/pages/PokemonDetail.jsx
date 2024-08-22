import React from "react";
import { useSearchParams } from "react-router-dom";
//???
import MOCK_DATA from "../mock";

const PokemonDetail = ({ MOCK_DATA }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log("id : ", id);
  console.log("MOCK_DATA : ", MOCK_DATA);

  return <div>PokemonDetail</div>;
};

export default PokemonDetail;
