import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const PokemonDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const location = useLocation();
  const pokeData = location.state.data;

  const checkedPokemon = pokeData.filter((poke) => {
    if (poke.id == id) {
      return true;
    } else {
      return false;
    }
  });

  const navigate = useNavigate();
  return (
    <DetailContainer>
      <div>
        <DetailImg src={checkedPokemon[0].img_url} alt="" />
      </div>
      <div>
        <DetailTitle>{checkedPokemon[0].korean_name}</DetailTitle>
        <DetailP>타입 : {checkedPokemon[0].types}</DetailP>
        <DetailP>{checkedPokemon[0].description}</DetailP>
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

  /* border: 1px solid #ffffff51;
  background-color: #eaeff5;
  border-radius: 5px; */
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
