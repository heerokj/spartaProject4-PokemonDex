import { combineReducers, createStore } from "redux";
import pokeSelect from "../modules/pokemon";

const rootReducer = combineReducers({
  pokeSelect: pokeSelect,
});
const store = createStore(rootReducer);

export default store;
