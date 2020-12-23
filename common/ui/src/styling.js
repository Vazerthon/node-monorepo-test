import { ThemeProvider as tp, useTheme } from "@emotion/react";
import emotionStyled from "@emotion/styled";

export const styled = emotionStyled;
export const useThemeHook = useTheme;
export const ThemeProvider = tp;
