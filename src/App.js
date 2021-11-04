
import React from "react";
import Router from "../src/routes/Router";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./constants/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>

  );
};

export default App;
