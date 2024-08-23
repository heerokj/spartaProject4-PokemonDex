import React from "react";

const PokemonCard = ({ selectedPokemon, setSelectedPokemon }) => {
  console.log("selectedPokemon :====>", selectedPokemon);

  selectedPokemon.map((poke) => {
    return (
      <GridItem key={poke.id}>
        <GridImg src={poke.img_url} alt="" />
        <GridTextDiv>
          <GridTextTitle>{poke.korean_name}</GridTextTitle>
          <GridTextNo>No. {poke.id}</GridTextNo>
        </GridTextDiv>
        <GridButton id={poke.id}>삭제</GridButton>
      </GridItem>
    );
  });
};

export default PokemonCard;
