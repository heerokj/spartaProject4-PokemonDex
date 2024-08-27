import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import { PokemonProvider } from "../context/PokemonContext";
import MOCK_DATA from "../mock";
import styled from "styled-components";

import { useSelector } from "react-redux"; // import 해주세요.

const Dex = () => {
  const pokeSelectStore = useSelector((state) => state);
  console.log("pokeSelectStore", pokeSelectStore);

  return (
    <PokemonProvider>
      <Main>
        <Dashboard />
        <PokemonList MOCK_DATA={MOCK_DATA} />
      </Main>
    </PokemonProvider>
  );
};

export default Dex;

const Main = styled.div``;
