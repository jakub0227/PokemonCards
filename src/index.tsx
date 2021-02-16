import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      dense
      preventDuplicate={true}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
