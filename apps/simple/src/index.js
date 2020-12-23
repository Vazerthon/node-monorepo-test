import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import { buildTheme } from "@demo/ui";
import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={buildTheme()}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
