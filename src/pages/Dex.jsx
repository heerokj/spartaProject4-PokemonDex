import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
//Mock Data 파일을 부모 컨포넌트에 import 시켜주기
import MOCK_DATA from "../mock";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]); //{}로?

  return (
    <Main>
      <Dashboard
        MOCK_DATA={MOCK_DATA}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokemonList MOCK_DATA={MOCK_DATA} />
    </Main>
  );
};

export default Dex;

const Main = styled.div``;
