import styled from "styled-components";
import PokemonCard from "./PokemonCard";
// import { useContext } from "react";
// import { PokemonContext } from "../context/PokemonContext";

const Dashboard = ({ selectedPokemon, removePokemon }) => {
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
  /* justify-content: space-between; */
`;

// //=== 포켓몬 카드 ======================================================
// const DashItemDiv = styled.div`
//   border: 1px solid #ffffff51;
//   background-color: white;
//   border-radius: 5px;
//   padding: 20px 30px;
// `;

// const DashImg = styled.img`
//   display: block;
//   width: 80px;
//   height: 80px;
// `;

// const DashTextDiv = styled.div`
//   padding: 5px;
// `;

// const DashTextTitle = styled.p`
//   padding-bottom: 15px;
//   font-weight: bold;
//   font-size: 13px;
// `;

// const DashTextNo = styled.p`
//   font-size: 10px;
// `;

// const DashButton = styled.button`
//   margin-top: 10px;
//   border-radius: 5px;
//   border: none;
//   padding: 5px 10px;
//   cursor: pointer;
//   background-color: red;
//   color: white;
//   &:hover {
//     background-color: #c0bcbc;
//   }
// `;
