import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
//Mock Data 파일을 부모 컨포넌트에 import 시켜주기
import MOCK_DATA from "../mock";

const Dex = () => {
  //대시보드 관리할 useState
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  //포켓몬을 선택하는 함수
  const addPokemon = (event) => {
    event.stopPropagation(); //겹쳐진 밑 부분 이벤트 발생 막기
    const selectID = event.target.id;

    const selectedPokemon = MOCK_DATA.filter((pokemon) => {
      //console.log("selectID : ", selectID);
      if (pokemon.id == selectID) {
        return true;
      } else {
        return false;
      }
    });
    //console.log("selectedPokemon : ", selectedPokemon);

    //갱신 할 대쉬보드 배열
    const newPokemon = [
      ...selectedPokemon,
      {
        img_url: selectedPokemon.img_url,
        korean_name: selectedPokemon.korean_name,
        id: selectedPokemon.id,
      },
    ];
    //setState해주기
    setSelectedPokemon(newPokemon);
  };

  //포켓몬 삭제하는 함수
  const removePokemon = () => {};

  return (
    <Main>
      <Dashboard
        MOCK_DATA={MOCK_DATA}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      {/* 보낼이름(여기에도 데이터가 들어가야?) = {진짜데이터} */}
      <PokemonList MOCK_DATA={MOCK_DATA} addPokemon={addPokemon} />
    </Main>
  );
};

export default Dex;

const Main = styled.div``;
