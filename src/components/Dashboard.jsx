import React from "react";
import styled from "styled-components";

const Dashboard = ({ selectedPokemon, setSelectedPokemon }) => {
  console.log("selectedPokemon", selectedPokemon);
  return (
    <DashboardContainer>
      <h3>나만의 포켓몬</h3>
      {selectedPokemon.map((poke) => {
        <GridItem key={poke.id}>
          <GridImg src={poke.img_url} alt="" />
          <GridTextDiv>
            <GridTextTitle>{poke.korean_name}</GridTextTitle>
            <GridTextNo>No. {poke.id}</GridTextNo>
          </GridTextDiv>
          <GridButton id={poke.id}>삭제</GridButton>
        </GridItem>;
      })}
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  text-align: center;
  height: 200px;
  border: 1px solid gray;
  margin-top: 20px;
  border-radius: 5px;
`;

const DashImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DashImg = styled.img`
  width: 50px;
  height: 50px;
`;

{
  /* <DashImgDiv>
          <div>
            <DashImg src="src\assets\pokeball.png" alt="pokeball" />
          </div>
          <div>
            <DashImg src="src\assets\pokeball.png" alt="pokeball" />
          </div>
          <div>
            <DashImg src="src\assets\pokeball.png" alt="pokeball" />
          </div>
          <div>
            <DashImg src="src\assets\pokeball.png" alt="pokeball" />
          </div>
          <div>
            <DashImg src="src\assets\pokeball.png" alt="pokeball" />
          </div>
          <div>
            <DashImg src="src\assets\pokeball.png" alt="pokeball" />
          </div>
        </DashImgDiv> */
}
