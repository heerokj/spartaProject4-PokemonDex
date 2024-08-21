import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <HomeImg
          src="https://fontmeme.com/images/Pokemon-Logo.jpg"
          alt="pokemon"
        />
      </div>
      <HomeButtonDiv>
        <HomeButton
          onClick={() => {
            navigate("/Dex");
          }}
        >
          포켓몬 도감 시작하기
        </HomeButton>
      </HomeButtonDiv>
    </div>
  );
};

export default Home;

const HomeImg = styled.img`
  position: relative;
  bottom: 100px;
`;

const HomeButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeButton = styled.button`
  position: relative;
  bottom: 250px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border-color: gray;
`;
