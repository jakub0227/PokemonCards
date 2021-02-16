import axios from "axios";

export const POKEMON_LIST_LOADING = "POKEMON_LIST_LOADING";
export const POKEMON_LIST_SUCCESS = "POKEMON_LIST_SUCCESS";
export const POKEMON_LIST_FAIL = "POKEMON_LIST_FAIL";
export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_LOAD_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_LOAD_FAIL = "POKEMON_FAIL";

export const GetPokemonList = (page: number) => async (dispatch: any) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });

    const perPage = 15;
    const offset = page * perPage - perPage;

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};

export const GetPokemon = (pokemon: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: "POKEMON_LOADING",
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: "POKEMON_LOAD_SUCCESS",
      payload: res.data,
      pokemon: pokemon,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LOAD_FAIL",
    });
  }
};
