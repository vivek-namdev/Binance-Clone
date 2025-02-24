import { AppBar, Box, Container, Stack, Toolbar } from "@mui/material";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";


export default function NavBar () {


  // Left Nav Bar and Right Nav Bar

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems='center'
      sx={{
        width : 1,
        height: '4rem',
        px: '2rem',
        position: 'sticky',
        bgcolor: 'primary.main',
        borderBottom: 1,
        borderColor: 'divider',
        zIndex: 10,
        top: 0,
        left: 0,
        right: 0
      }}
    >
      <NavBarLeft></NavBarLeft>
      <NavBarRight></NavBarRight>
    </Stack>
  );
}