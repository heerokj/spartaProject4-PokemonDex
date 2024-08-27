// import the createSlice API from Redux Toolkit.
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.includes(action.payload)) {
        alert("이미 추가한 포켓몬입니다.");
        return; //왜 안되지?
      } else if (state.length >= 6) {
        alert("포켓몬은 최대 6개까지 추가가능합니다.");
      } else {
        state.push(action.payload);
      }
    },
    removePokemon: (state, action) => {
      return state.filter((poke) => poke.id !== action.payload.id); // id끼리 비교해야지 ..
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPokemon, removePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
