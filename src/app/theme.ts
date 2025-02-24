import { PaletteMode, createTheme } from "@mui/material";
import { createContext, useState, useMemo } from "react";


export const themeSettings = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: 'rgb(250, 250, 250)',
          },
          secondary: {
            main: 'rgb(252, 213, 53)',
          },
          background: {
            default: 'rgb(250, 250, 250)',
            paper: 'rgb(255, 255, 255)',
          },
          text: {
            primary: 'rgb(30, 35, 41)',
            secondary: 'rgb(71, 77, 87)',
            disabled: 'rgba(249,246,246,0.38)',
            tertiary: 'rgb(112, 122, 138)',
          },
          error: {
            main: 'rgb(207, 48, 74)',
          },
          success: {
            main: 'rgb(3, 166, 109)',
          },
          divider: 'rgb(238, 240, 242)',
        }
      : {
          // palette values for dark mode
          logo: {
            main: '#F0B90B',
          },
          primary: {
            main: 'rgb(22, 26, 30)',
          },
          secondary: {
            main: 'rgb(252, 213, 53)',
          },
          background: {
            default: 'rgb(22, 26, 30)',
            paper: 'rgb(30, 32, 38)',
          },
          text: {
            primary: '#EAECEF',
            secondary: 'rgb(183, 189, 198)',
            disabled: 'rgba(249,246,246,0.38)',
            tertiary: '#848E9C',
          },
          error: {
            main: 'rgb(246, 70, 93)',
          },
          success: {
            main: 'rgb(14, 203, 129)',
          },
          divider: '#3a3b3f',
        }),
  },
  typography: {
    fontFamily: [
      'IBM Plex Sans', 
      'Open Sans'
    ].join(','),
    caption: {
      fontSize: 12,
      color: 'text.secondary',
    }
  },
});

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
})

export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev: PaletteMode) => (prev === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return {theme, colorMode};
}

