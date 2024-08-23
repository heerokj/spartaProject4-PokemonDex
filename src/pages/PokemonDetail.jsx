import React, { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
//???
//import MOCK_DATA from "../mock";
import styled from "styled-components";

const PokemonDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const location = useLocation();
  const pokeData = location.state.data;

  const checkedPokemon = pokeData.filter((poke) => {
    if (poke.id == id) {
      return true;
    } else {
      return false;
    }
  });

  const navigate = useNavigate();
  return (
    <DetailContainer>
      <div>
        <img src={checkedPokemon[0].img_url} alt="" />
      </div>
      <div>
        <h3>{checkedPokemon[0].korean_name}</h3>
        <p>타입 : {checkedPokemon[0].types}</p>
        <p>{checkedPokemon[0].description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/Dex");
        }}
      >
        뒤로 가기
      </button>
    </DetailContainer>
  );
};

export default PokemonDetail;

const DetailContainer = styled.div`
  border: 1px solid gray;
  text-align: center;
`;
