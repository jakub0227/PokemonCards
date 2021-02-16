import React, { FC } from "react";
import { BottomNavigation, Typography, useTheme } from "@material-ui/core";
import { css } from "@emotion/react";

export const Footer: FC = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: ${theme.spacing(1)}px;
      ${theme.customMixins.flexCentered};
      z-index: 1;
 `,
    footerText: css`,

		`,
  };

  return (
    <BottomNavigation css={styles.root}>
      <Typography css={styles.footerText} variant="subtitle2" align="center">
        Created with React, Redux, MongoDB, Emotion.sh, Material-UI, (C)
        Copyright {new Date().getFullYear()}
      </Typography>
    </BottomNavigation>
  );
};
