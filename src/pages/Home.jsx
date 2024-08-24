import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <img src="https://fontmeme.com/images/Pokemon-Logo.jpg" alt="pokemon" />
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

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
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
  position: relative;
  bottom: 150px;
`;
