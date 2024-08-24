import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonList = ({ pokemonList, selectedPokemon, setSelectedPokemon }) => {
  const [detailPoke, setDetailPoke] = useState({ pokemonList });
  const data = detailPoke.pokemonList;
  const navigate = useNavigate();

  //포켓몬을 선택하는 함수
  const addPokemon = (event) => {
    event.stopPropagation(); //겹쳐진 밑 부분 이벤트 발생 막기
    const selectID = event.target.id;

    if (selectedPokemon.length === 6) {
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
      return;
    }

    const targetPokemon = pokemonList.filter((pokemon) => {
      if (pokemon.id == selectID) {
        return true;
      } else {
        return false;
      }
    });

    //흠...
    // selectedPokemon.find((poke) => {
    //   if (poke.id == selectID) {
    //     alert("이미 추가된 포켓몬이에요");
    //     return;
    //   }
    // });

    // 갱신 할 대쉬보드 배열
    const newPokemon = [
      ...selectedPokemon,
      {
        id: targetPokemon[0].id,
        img_url: targetPokemon[0].img_url,
        korean_name: targetPokemon[0].korean_name,
        id: targetPokemon[0].id,
      },
    ];

    //setState해주기
    setSelectedPokemon(newPokemon);
  };

  return (
    <ListContainer>
      {pokemonList.map((poke) => {
        return (
          <GridItem
            key={poke.id}
            onClick={() => {
              navigate("/pokemon-detail?id=" + `${poke.id}`, {
                state: { data },
              });
            }}
          >
            <GridImg src={poke.img_url} alt="" />
            <GridTextDiv>
              <GridTextTitle>{poke.korean_name}</GridTextTitle>
              <GridTextNo>No. {poke.id}</GridTextNo>
            </GridTextDiv>
            <GridButton id={poke.id} onClick={addPokemon}>
              추가
            </GridButton>
          </GridItem>
        );
      })}
    </ListContainer>
  );
};

export default PokemonList;

//스타일 영역
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 15px;
  border: 1px solid #ffffff51;
  padding: 20px;
  border-radius: 5px;
  background-color: #eaeff5;
  margin-top: 20px;
`;

//=== 포켓몬 카드 ======================================================
const GridItem = styled.div`
  border: 1px solid #ffffff51;
  background-color: white;
  border-radius: 5px;
  padding: 20px 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05); //0.05배 확대
    transition-duration: 0.3s; //확대시 걸리는 시간 0.3초
  }
  // 아이템들 가로 중앙에 배치 (이미지는 블록 레벨 요소로 바꿔야함)
  text-align: center;
`;

const GridImg = styled.img`
  //이미지 블록 레벨로 바꾸기
  display: block;
  width: 80px;
  height: 80px;
`;

const GridTextDiv = styled.div`
  padding: 5px;
`;

const GridTextTitle = styled.p`
  padding-bottom: 15px;
  font-weight: bold;
  font-size: 13px;
`;

const GridTextNo = styled.p`
  font-size: 10px;
`;

const GridButton = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background-color: red;
  color: white;
  &:hover {
    background-color: #c0bcbc;
  }
`;
