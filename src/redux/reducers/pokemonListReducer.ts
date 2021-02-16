export interface PokemonListProps {
  loading: boolean;
  data: { name: string; url: string }[];
  errorMsg: string;
  count: number;
}
export const initState: PokemonListProps = {
  loading: false,
  data: [{ name: "", url: "" }],
  errorMsg: "",
  count: 0,
};

export const pokemonListReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get pokemon",
      };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: "",
        count: action.payload.count,
      };
    default:
      return state;
  }
};
