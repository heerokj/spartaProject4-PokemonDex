import React from "react";
import styled from "styled-components";

const Dashboard = ({ selectedPokemon }) => {
  console.log("selectedPokemon", selectedPokemon);
  return (
    <DashboardContainer>
      <h3>나만의 포켓몬</h3>
      {selectedPokemon.length === 0 ? (
        <DashImgDiv>
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
        </DashImgDiv>
      ) : (
        <p>선택 map으로 뿌려주기</p>
      )}
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
