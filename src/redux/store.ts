import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { RootReducer } from "./reducers/rootReducer";
import { PokemonListProps } from "./reducers/pokemonListReducer";
import { PokemonProps } from "./reducers/pokemonReducer";

export interface RootState {
  PokemonList: PokemonListProps;
  Pokemon: PokemonProps;
}

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
