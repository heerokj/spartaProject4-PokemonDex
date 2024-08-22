import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const PokemonList = ({ MOCK_DATA }) => {
  //console.log("MOCK_DATA");

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <ListContainer>
      {MOCK_DATA.map((poke) => {
        return (
          // <Link key={poke.id} to={`/pokemon-detail?${poke.id}`}>
          <GridItem
            key={poke.id}
            onClick={() => {
              navigate("/pokemon-detail?id=" + `${poke.id}`);
            }}
          >
            <GridImg src={poke.img_url} alt="" />
            <GridTextDiv>
              <GridTextTitle>{poke.korean_name}</GridTextTitle>
              <GridTextNo>No. {poke.id}</GridTextNo>
            </GridTextDiv>
            <GridButton
              onClick={(event) => {
                event.stopPropagation(); //겹쳐진 밑 부분 이벤트 발생 막기
              }}
            >
              추가
            </GridButton>
          </GridItem>
          // </Link>
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

const GridItem = styled.div`
  border: 1px solid #ffffff51;
  border-radius: 5px;
  padding: 20px 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05); //0.05배 확대
    transition-duration: 0.3s; //확대시 걸리는 시간 0.3초
  }
  background-color: white;
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
  border: none;
  cursor: pointer;
  background-color: red;
  color: white;
  &:hover {
    background-color: #c0bcbc;
  }
`;
