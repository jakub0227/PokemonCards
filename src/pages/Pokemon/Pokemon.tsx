import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Route } from "../../types/Route";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { GetPokemon } from "../../redux/actions/pokemonActions";

export const Pokemon: Route = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      margin: ${theme.spacing(5)}px;
      width: 30%;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      ${theme.customMixins.flexCentered};
      opacity: 85%;
    `,
  };

  interface ParamTypes {
    pokemon: string;
  }
  const { pokemon } = useParams<ParamTypes>();

  const dispatch = useDispatch();
  const pokemonState = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(GetPokemon(pokemon));
  }, []);

  // @ts-ignore
  const pokeData = pokemonState.Pokemon;
  console.log(pokeData);
  return (
    <Card css={styles.root}>
      <CardActionArea>
        <CardContent>
          <Typography align="center" variant="h6">
            Pokemon Name
          </Typography>
          <Typography align="center" variant="h5">
            {pokemon}
          </Typography>
          <Typography align="center" variant="subtitle2" component="h3">
            Pokemon Stats:
          </Typography>
          <Typography variant="overline" color="textSecondary" component="p">
            Base Exp:
          </Typography>
          <Typography variant="overline" color="textSecondary" component="p">
            Height:
          </Typography>
          <Typography variant="overline" color="textSecondary" component="p">
            Weight:
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
Pokemon.routeName = "/pokemon/:pokemon";
Pokemon.displayName = "";
Pokemon.icon = "pets";
