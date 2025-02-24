import { Stack } from "@mui/material";
import TopBodyLeft from "./TopBodyLeft";
import TopBodyRight from "./TopBodyRight";

export default function TopBody () {

  return(
    <Stack
    direction='row'
    borderBottom={1}
    borderColor='divider'
    >
      <TopBodyLeft/>
      <TopBodyRight/>
    </Stack>
  );

}