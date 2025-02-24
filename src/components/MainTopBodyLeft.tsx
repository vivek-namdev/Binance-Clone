import { Box, Stack, useTheme } from "@mui/material";
import OrderForm from "./OrderForm";
import SpotOrderbook from "./SpotOrderbook";
import { AdvancedRealTimeChart } from "./tradingview/components";
import { useMode } from "@/app/theme";

function useGetTheme() {
  const theme = useTheme();
   if (theme.palette.primary.main === 'rgb(250, 250, 250)') {
    return 'light';
   }
   else {
    return 'dark';
   }
}

export default function MainTopBodyLeft () {

  const {theme, colorMode} = useMode();

  return (
    <Stack
    direction='row'
    height='100%'
    >
      <SpotOrderbook/>
      <Stack
        height='100%'
        flexGrow={1}
      >
        <Box
          height='400px'
        >
          <AdvancedRealTimeChart
            autosize
            theme={useGetTheme()}
          />
        </Box>
        <OrderForm/>
      </Stack>
    </Stack>
  );
}