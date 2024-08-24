import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
//Mock Data 파일을 부모 컨포넌트에 import 시켜주기
import MOCK_DATA from "../mock";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  //========포켓몬을 추가하는 함수
  const addPokemon = (event) => {
    event.stopPropagation(); //겹쳐진 밑 부분 이벤트 발생 막기
    const selectID = event.target.id;

    if (selectedPokemon.length === 6) {
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
      return;
    }

    const targetPokemon = MOCK_DATA.filter((pokemon) => {
      return pokemon.id == selectID;
    });

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
    setSelectedPokemon(newPokemon);
  };

  ////========포켓몬 삭제하는 함수
  const removePokemon = (id) => {
    const deletePokemon = selectedPokemon.filter((poke) => {
      return poke.id !== id;
    });
    setSelectedPokemon(deletePokemon);
  };

  return (
    <Main>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      {/* 보낼이름( 받는곳에서 써줘야할 이름 ) = {진짜데이터} */}
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </Main>
  );
};

export default Dex;

const Main = styled.div``;
