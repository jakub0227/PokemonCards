import React from "react";
import { Route } from "../../types/Route";
import { Container, Typography } from "@material-ui/core";
import { PokemonList } from "./PokemonList/PokemonList";
import { css } from "@emotion/react";

export const HomePage: Route = () => {
  const styles = {
    root: css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    `,
    title: css`
      margin-top: 50px;
    `,
  };
  return (
    <Container maxWidth="sm" css={styles.root}>
      <Typography variant="h4" align="center" css={styles.title}>
        Hello to Pokemon wiki!
      </Typography>
      <PokemonList />
    </Container>
  );
};
HomePage.displayName = "Home";
HomePage.icon = "home";
HomePage.routeName = "/";
