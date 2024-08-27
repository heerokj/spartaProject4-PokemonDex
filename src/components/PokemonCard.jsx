import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PokemonCard({
  pokemon,
  isSelected,
  addPokemon,
  removePokemon,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // id값 어케 넘기지 => 쿼리스트링으로
    // 디테일페이지에서는 useLocation 사용
    navigate(`/pokemon-detail?id=${pokemon.id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <PokemonImg src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonTextDiv>
        <PokemonTextTitle>{pokemon.korean_name}</PokemonTextTitle>
        <PokemonTextNo>No. {pokemon.id}</PokemonTextNo>
      </PokemonTextDiv>
      {isSelected ? (
        <PokemonButton
          onClick={(e) => {
            e.stopPropagation();
            removePokemon(pokemon);
          }}
        >
          삭제
        </PokemonButton>
      ) : (
        <PokemonButton
          onClick={(e) => {
            e.stopPropagation();
            addPokemon(pokemon);
          }}
        >
          추가
        </PokemonButton>
      )}
    </Card>
  );
}

const Card = styled.div`
  border: 1px solid #ffffff51;
  background-color: white;
  border-radius: 5px;
  padding: 20px 30px;
`;

const PokemonImg = styled.img`
  display: block;
  width: 80px;
  height: 80px;
`;

const PokemonTextDiv = styled.div`
  padding: 5px;
`;

const PokemonTextTitle = styled.p`
  padding-bottom: 15px;
  font-weight: bold;
  font-size: 13px;
`;

const PokemonTextNo = styled.p`
  font-size: 10px;
`;

const PokemonButton = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  background-color: red;
  color: white;
  &:hover {
    background-color: #c0bcbc;
  }
`;
