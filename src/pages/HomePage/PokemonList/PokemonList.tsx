import React, { FC, useEffect, useState } from "react";
import {
  Button,
  Icon,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonList } from "../../../redux/actions/pokemonActions";
import { RootState } from "../../../redux/store";
import { Pagination } from "@material-ui/lab";
import { Link, useHistory } from "react-router-dom";

export const PokemonList: FC = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      flex-direction: column;
      border-radius: 30px;
      padding: ${theme.spacing(1.5)}px;
      margin-top: ${theme.spacing(5)}px;
      margin-bottom: ${theme.spacing(5)}px;
      opacity: 80%;
    `,
    input: css`
      margin: ${theme.spacing(3)}px, 0;
    `,
    button: css`
      margin-top: ${theme.spacing(1)}px;
      border-radius: 30px;
      padding: ${theme.spacing(1.5)}px;
      background: linear-gradient(
        to right,
        ${theme.palette.primary.light},
        ${theme.palette.secondary.dark}
      );
      color: white;
    `,
    list: css`
      margin-top: ${theme.spacing(2)}px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    `,
    listItem: css`
      justify-content: center;
      align-items: center;
      align-content: center;
      padding: ${theme.spacing(1.5)}px;
      border-radius: 30px;
      border-style: solid;
    `,
    pagination: css`
      padding: ${theme.spacing(2)}px;
    `,
  };
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state);

  const FetchData = (page: number) => {
    dispatch(GetPokemonList(page));
  };

  useEffect(() => {
    FetchData(page);
  }, [page]);

  const handleSearchFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  console.log(search);
  const history = useHistory();
  const handlePokemonSearch = (search: any) => {
    history.push(`/pokemon/${search}`);
  };

  console.log(pokemonList);
  return (
    <Paper elevation={4} css={styles.root}>
      <Typography variant="h6" align="center">
        List of all {pokemonList.PokemonList.count} Pokemon creatures
      </Typography>
      <TextField
        css={styles.input}
        fullWidth
        type="text"
        color="primary"
        variant="outlined"
        margin="dense"
        label="Find Pokemon"
        spellCheck="false"
        value={search}
        onChange={handleSearchFieldChange}
      />
      <Button
        css={styles.button}
        size="medium"
        variant="contained"
        onClick={handlePokemonSearch}
      >
        Search
      </Button>
      {pokemonList.PokemonList.loading && <LinearProgress color="secondary" />}
      <List css={styles.list} dense>
        {pokemonList.PokemonList.data.map((pokemon) => (
          <ListItem
            css={styles.listItem}
            button
            component={Link}
            to={`/pokemon/${pokemon.name}`}
          >
            <ListItemIcon>
              <Icon>pets</Icon>
            </ListItemIcon>
            <ListItemText primary={pokemon.name} />
          </ListItem>
        ))}
        <Pagination
          css={styles.pagination}
          count={Math.ceil(pokemonList.PokemonList.count / 15)}
          variant="outlined"
          page={page}
          color="secondary"
          onChange={(_, _page) => setPage(_page)}
        />
      </List>
    </Paper>
  );
};
