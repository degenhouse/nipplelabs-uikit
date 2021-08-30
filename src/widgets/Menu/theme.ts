import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.text,
  navbackground: lightColors.primary,
};

export const dark: NavTheme = {
  background: darkColors.backgroundAlt,
  navbackground: darkColors.backgroundAlt,
};
