import React, { FC } from "react";
import { CssBaseline, Paper } from "@material-ui/core";
import { css } from "@emotion/react";
import { Navigation } from "./Navigation/Navigation";
import { Footer } from "./Footer/Footer";

export const Layout: FC = (props) => {
  const styles = {
    root: css`
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      object-fit: cover;
    `,
    page: css`
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      opacity: 95%;
        background-image: url("Background_2.svg");
        flex: 1;
    `,
  };
  return (
    <Paper square css={styles.root}>
      <CssBaseline />
      <Navigation />
      <Paper square css={styles.page}>
        {props.children}
      </Paper>
      <Footer />
    </Paper>
  );
};
