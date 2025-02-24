import { IconButton, useTheme } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { useContext } from "react";
import { ColorModeContext } from "@/app/theme";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function SettingsButton () {

  const colorMode = useContext(ColorModeContext)
  const theme = useTheme();

  return (
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}