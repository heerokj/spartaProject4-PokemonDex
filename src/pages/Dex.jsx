import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
//Mock Data 파일을 부모 컨포넌트에 import 시켜주기
import MOCK_DATA from "../mock";

const Dex = () => {
  //대시보드 관리할 useState
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <Main>
      <Dashboard
        MOCK_DATA={MOCK_DATA}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      {/* 보낼이름(여기에도 데이터가 들어가야?) = {진짜데이터} */}
      <PokemonList
        MOCK_DATA={MOCK_DATA}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </Main>
  );
};

export default Dex;

const Main = styled.div``;
