import React, { useState } from "react";
import Router from "../src/routes/Router";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./constants/theme";
import GlobalStateContext from "./Global/GlobalStateContext";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <GlobalStateContext.Provider value={{ cart, setCart }}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalStateContext.Provider>
  );
};

export default App;
