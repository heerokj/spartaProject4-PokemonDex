import React, { createContext, useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
//Mock Data 파일을 부모 컨포넌트에 import 시켜주기
import MOCK_DATA from "../mock";

export const PokemonContext = createContext();

const Dex = () => {
  //대시보드 관리할 useState
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList: MOCK_DATA,
        selectedPokemon: selectedPokemon,
        setSelectedPokemon: setSelectedPokemon,
      }}
    >
      <Main>
        <Dashboard />
        <PokemonList />
      </Main>
    </PokemonContext.Provider>
  );
};

export default Dex;

const Main = styled.div``;
