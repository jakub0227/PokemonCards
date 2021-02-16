import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { css, SerializedStyles } from "@emotion/react";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    customMixins: {
      flexCentered: SerializedStyles;
    };
  }

  interface ThemeOptions extends Theme {}
}

type DarkModeContextType = Dispatch<SetStateAction<"light" | "dark">>;

export const DarkModeContext = createContext<DarkModeContextType>(
  (null as unknown) as DarkModeContextType
);

export const Theme: FC = (props) => {
  const [darkMode, setDarkMode] = useState<"light" | "dark">("light");

  return (
    <DarkModeContext.Provider value={setDarkMode}>
      <ThemeProvider
        theme={createMuiTheme({
          props: {
            MuiAppBar: {
              variant: "elevation",
              elevation: 5,
            },
            MuiTypography: {
              gutterBottom: true,
            },
          },
          palette: {
            type: darkMode,
          },
          customMixins: {
            flexCentered: css`
              display: flex;
              justify-content: center;
              align-items: center;
            `,
          },
        })}
      >
        {props.children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};
