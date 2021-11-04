import { createTheme } from "@material-ui/core/styles";
import { primaryColor, neutralColor, secundaryColor } from "./colors";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
    ], 
    button: {
      fontSize: 12,
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black",
    },
    secondary: {
      main: secundaryColor,
      contrastText: "black",
    },
    text: {
      primary: neutralColor,
      secondary: secundaryColor,
    },
  },
});



export default theme;
