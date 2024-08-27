import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../pages/Dex";

const Dashboard = () => {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext);
  return (
    <DashboardContainer>
      <DashTitle>나만의 포켓몬</DashTitle>
      {selectedPokemon.length === 0 ? (
        <DashP>선택된 포켓몬이 없습니다.</DashP>
      ) : (
        <DashItemsDiv>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isSelected={true}
              removePokemon={removePokemon}
            />
          ))}
        </DashItemsDiv>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  text-align: center;
  height: 250px;
  border: 1px solid gray;
  margin-top: 20px;
  padding: 0px 20px 30px 20px;
  border-radius: 5px;
  border: 1px solid #ffffff51;
  background-color: #f1f4f7;
`;

const DashTitle = styled.h3`
  color: red;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0px;
`;

const DashP = styled.p`
  margin-top: 50px;
  color: gray;
`;

const DashItemsDiv = styled.div`
  display: flex;
  gap: 20px;
`;
