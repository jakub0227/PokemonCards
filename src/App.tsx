import { StylesProvider, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { Layout } from "./hoc/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Theme } from "./hoc/Theme/Theme";
import { routeList } from "./hoc/Layout/Navigation/NavigationItems/routeList";
import { Pokemon } from "./pages/Pokemon/Pokemon";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <Theme>
          <Layout>
            <Switch>
              {routeList.map((route) => (
                <Route
                  exact
                  key={route.routeName}
                  path={route.routeName}
                  component={route}
                />
              ))}
              <Route path={Pokemon.routeName} exact>
                <Pokemon />
              </Route>
              <Route>
                <Typography variant="h1">404 Not Found</Typography>
              </Route>
            </Switch>
          </Layout>
        </Theme>
      </StylesProvider>
    </BrowserRouter>
  );
};
