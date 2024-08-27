import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../mock";
import styled from "styled-components";
import { useState } from "react";

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
    <Main>
      <Dashboard
        selectedPokemon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} addPokemon={addPokemon} />
      {/* <PokemonList pokemonList={MOCK_DATA} /> */}
    </Main>
  );
};

export default Dex;

const Main = styled.div`
  /* display: flex;
  flex-direction: column;
  padding: 20px; */
`;
