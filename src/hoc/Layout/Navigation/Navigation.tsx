import { css } from "@emotion/react";
import React, { FC, useContext } from "react";
import {
  AppBar,
  Hidden,
  Icon,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import { DarkModeContext } from "../../Theme/Theme";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { useState } from "react";
import { NavigationItems } from "./NavigationItems/NavigationItems";
import { Link } from "react-router-dom";

export const Navigation: FC = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      margin-right: ${theme.spacing(4)} px;
      display: flex;
    `,
    title: css`
      text-decoration: none;
      flex-grow: 1;
      color: inherit;
    `,
    toolBar: css`
      ${theme.customMixins.flexCentered};
    `,
    menuButton: css`
      margin-right: ${theme.spacing(1)}px;
    `,
  };

  const setDarkMode = useContext(DarkModeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar css={styles.root} position="static" color="transparent">
      <Toolbar css={styles.toolBar}>
        <Hidden smUp>
          <MobileMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
          <IconButton
            css={styles.menuButton}
            onClick={() => setDrawerOpen(true)}
          >
            <Icon>menu</Icon>
          </IconButton>
        </Hidden>
        <Link css={styles.title} to="/">
          <Typography align="left" variant="h6">
            Pokemon Library Redux
          </Typography>
        </Link>
        <Hidden xsDown>
          <NavigationItems />
        </Hidden>
        <IconButton
          onClick={() =>
            setDarkMode((prev) => (prev === "light" ? "dark" : "light"))
          }
          color="inherit"
        >
          <Icon>settings_brightness</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
