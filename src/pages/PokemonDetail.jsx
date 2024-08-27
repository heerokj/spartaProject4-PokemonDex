import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const location = useLocation();
  const pokemonId = location.search.substr(4);
  const selectedPokemon = MOCK_DATA.find((poke) => poke.id == pokemonId);

  const navigate = useNavigate();
  return (
    <DetailContainer>
      <div>
        <DetailImg src={selectedPokemon.img_url} alt="" />
      </div>
      <div>
        <DetailTitle>{selectedPokemon.korean_name}</DetailTitle>
        <DetailP>타입 : {selectedPokemon.types}</DetailP>
        <DetailP>{selectedPokemon.description}</DetailP>
      </div>
      <DetailBtn
        onClick={() => {
          navigate("/Dex");
        }}
      >
        뒤로 가기
      </DetailBtn>
    </DetailContainer>
  );
};

export default PokemonDetail;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

const DetailImg = styled.img`
  height: 150px;
  width: 150px;
`;

const DetailTitle = styled.h3`
  font-weight: bold;
  font-size: large;
  margin-bottom: 10px;
`;

const DetailP = styled.p`
  font-size: 15px;
  margin: 20px;
`;

const DetailBtn = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: white;
  border-color: gray;
`;
