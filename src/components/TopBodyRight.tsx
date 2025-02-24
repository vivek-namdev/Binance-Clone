import { Stack } from "@mui/material";
import Market from "./Market";
import MarketActivity from "./MarketActivity";
import Trades from "./Trades";

export default function TopBodyRight () {

  return (
    <Stack
    flexGrow={0}
    >
      <Market/>
      <Trades/>
      <MarketActivity/>
    </Stack>
  )

}