import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <HomeImg
        src="https://fontmeme.com/images/Pokemon-Logo.jpg"
        alt="pokemon"
      />
      <HomeButton
        onClick={() => {
          navigate("/Dex");
        }}
      >
        포켓몬 도감 시작하기
      </HomeButton>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;

const HomeImg = styled.img`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const HomeButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border-color: gray;
  border: none;
  cursor: pointer;
  background-color: red;
  color: white;
  &:hover {
    background-color: #c0bcbc;
  }
  /* position: relative;
  top: 100px; */
`;
