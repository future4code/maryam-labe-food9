import { createTheme } from "@material-ui/core/styles";
import { primaryColor, neutralColor, secundaryColor } from "./colors";

const theme = createTheme({
  typography: {
    button: {
      fontSize: 12,
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    secondary: {
      main: secundaryColor,
      contrastText: "black",
    },
    text: {
      primary: neutralColor,
    },
  },
});



export default theme;
