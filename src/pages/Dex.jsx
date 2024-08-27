import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const Dex = () => {
  return (
    <Main>
      <Dashboard />
      <PokemonList pokemonList={MOCK_DATA} />
    </Main>
  );
};

export default Dex;

const Main = styled.div``;
