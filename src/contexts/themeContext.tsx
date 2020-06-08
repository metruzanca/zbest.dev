import { createContext } from 'react';

import { Themes, Theme } from "utils";

export const ThemeContext = createContext({
  theme: Themes.dark,
  setTheme: (theme:Theme) => {},
});