import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
// import { PokemonProvider } from "../context/PokemonContext";
import styled from "styled-components";
import PokemonProvider from "../context/PokemonContext"; //default 로 export시켜준거는 {}하면 안됨...

const Dex = () => {
  return (
    <PokemonProvider>
      <Main>
        <Dashboard />
        <PokemonList />
      </Main>
    </PokemonProvider>
  );
};

export default Dex;

const Main = styled.div``;
