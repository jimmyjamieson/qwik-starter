import { createTheme } from "@vanilla-extract/css";
import { theme } from "~/ui/theme/theme.css";

export const darkTheme = createTheme(theme, {
  color: {
    brandLight: "#3c6ce3",
    brand: "#043678",
    brandDark: "#010b2c",
  },
  font: {
    body: "helvetica",
  },
});
