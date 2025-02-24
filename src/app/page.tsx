'use client'

import Desktop from "@/components/views/Desktop";
import { PaletteColor, PaletteColorOptions } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { ColorModeContext, useMode } from "./theme";



declare module '@mui/material/styles' {
  interface TypeText {
    tertiary?: string;
  }

  interface PaletteOptions {
    logo?: PaletteColorOptions
  }

  interface Palette {
    logo?: PaletteColor
  }
}




export default function Home() {

  const {theme, colorMode} = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <Desktop/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
