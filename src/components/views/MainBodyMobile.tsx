import { Stack, useTheme } from "@mui/material";
import HeaderTopBodyLeft from "../HeaderTopBodyLeft";
import UserTradeInfo from "../UserTradeInfo";
import ChartOrderbookTrades from "./ChartOrderbookTrades";

function useGetTheme() {
  const theme = useTheme();
   if (theme.palette.primary.main === 'rgb(250, 250, 250)') {
    return 'light';
   }
   else {
    return 'dark';
   }
}

export default function MainBodyMobile() {
  return (
    <Stack
    sx={{
      display: {
        xs: 'flex',
        sm: 'none'
      }
    }}
    >
      <HeaderTopBodyLeft/>
      <ChartOrderbookTrades/>
      <UserTradeInfo/>
    </Stack>
  );
}