import { Stack } from "@mui/material";
import HeaderTopBodyLeftPairPrice from "./HeaderTopBodyLeftPairPrice";
import HeaderTopBodyLeftPairTitle from "./HeaderTopBodyLeftPairTitle";

export default function HeaderTopBodyLeft () {

  return (
    <Stack
      direction='row'
      justifyContent="space-between"
      py='0.5rem'
      sx={{
        width: 1,
        borderBottom: 1,
        borderColor: 'divider'
      }}
    >
      <HeaderTopBodyLeftPairTitle/>
      <HeaderTopBodyLeftPairPrice/>
    </Stack>
  );
}