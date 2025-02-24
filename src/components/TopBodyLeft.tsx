import { Stack } from "@mui/material";
import HeaderTopBodyLeft from "./HeaderTopBodyLeft";
import MainTopBodyLeft from "./MainTopBodyLeft";

export default function TopBodyLeft () {

  return (
    <Stack
    flexGrow={1}
    borderRight={1}
    borderColor='divider'
    >
      <HeaderTopBodyLeft/>
      <MainTopBodyLeft/>
    </Stack>
  );

}