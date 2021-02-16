export interface PokemonProps {
  abilities: [];
  base_experience: number;
  height: number;
  weight: number;
  name: string;
  sprites: { front_default: string; back_default: string };
}

export interface PokemonStateProps {
  loading: boolean;
  data: { pokemon_default?: PokemonProps };
  errorMsg: string;
}

export const PokemonState: PokemonStateProps = {
  loading: false,
  data: {
    // pokemon_default: {
    //   name: "",
    //   abilities: [],
    //   base_experience: 0,
    //   height: 0,
    //   sprites: { back_default: "", front_default: "" },
    //   weight: 0,
    // },
  },
  errorMsg: "",
};

export const pokemonReducer = (state = PokemonState, action: any) => {
  switch (action.type) {
    case "POKEMON_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "POKEMON_LOAD_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find pokemon",
      };
    case "POKEMON_LOAD_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          [action.pokemon]: action.payload,
        },
      };
    default:
      return state;
  }
};
