// import { createContext, useState } from "react";
// import MOCK_DATA from "../mock";

// export const PokemonContext = createContext();

// export function PokemonProvider({ children }) {
//   const [selectedPokemon, setSelectedPokemon] = useState([]);

//   const addPokemon = (event) => {
//     event.stopPropagation(); //겹쳐진 밑 부분 이벤트 발생 막기
//     const selectID = event.target.id;

//     if (selectedPokemon.length === 6) {
//       alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
//       return;
//     }

//     const targetPokemon = MOCK_DATA.filter((pokemon) => {
//       if (pokemon.id == selectID) {
//         return true;
//       } else {
//         return false;
//       }
//     });

//     const checkPokemon = selectedPokemon.find((pokemon) => {
//       return pokemon.id === targetPokemon[0].id;
//     });

//     if (checkPokemon) {
//       alert(`${checkPokemon.korean_name} 은(는) 이미 추가된 포켓몬이에요.`);
//       return;
//     }

//     //갱신 할 대쉬보드 배열
//     const newPokemon = [
//       ...selectedPokemon,
//       {
//         id: targetPokemon[0].id,
//         img_url: targetPokemon[0].img_url,
//         korean_name: targetPokemon[0].korean_name,
//         // id: targetPokemon[0].id,
//       },
//     ];

//     //setState해주기
//     setSelectedPokemon(newPokemon);
//   };

//   const removePokemon = (pokemonId) => {
//     const deletePokemon = selectedPokemon.filter((poke) => {
//       if (poke.id === pokemonId) {
//         return false;
//       } else {
//         return true;
//       }
//     });
//     setSelectedPokemon(deletePokemon);
//   };

//   return (
//     <PokemonContext.Provider
//       value={{ selectedPokemon, addPokemon, removePokemon, MOCK_DATA }}
//     >
//       {children}
//     </PokemonContext.Provider>
//   );
// }
