import { combineReducers } from "redux";
import { pokemonListReducer } from "./pokemonListReducer";
import { pokemonReducer } from "./pokemonReducer";

export const RootReducer = combineReducers({
  PokemonList: pokemonListReducer,
  Pokemon: pokemonReducer,
});
