import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../mock";
import styled from "styled-components";
import { createContext, useState } from "react";

export const PokemonContext = createContext();

const Dex = () => {
  const [selectedPokemon, setSelectPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
      return;
    }
    if (selectedPokemon.includes(pokemon)) {
      alert("이미 추가된 포켓몬입니다.");
    } else {
      setSelectPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    const newPokemon = selectedPokemon.filter((poke) => poke.id !== pokemon.id);
    setSelectPokemon(newPokemon);
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        removePokemon,
        addPokemon,
        pokemonList: MOCK_DATA,
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
