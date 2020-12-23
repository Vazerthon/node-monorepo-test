import ReactDOM from "react-dom";
import { buildTheme, ThemeProvider } from "@demo/ui";
import App from "./App";

console.log(ThemeProvider);

ReactDOM.render(
  <ThemeProvider theme={buildTheme()}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
