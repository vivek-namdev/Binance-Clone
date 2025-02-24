import { Stack, Box, Typography, Button, Slider } from "@mui/material";
import LogInOrSignUp from "./LogInOrSignUp";
import CustomInputBox from "./tradingview/components/CustomInputBox";
import OrderFormSpotColumn from "./OrderFormSpotColumn";

export default function OrderFormSpot () {
  return (
    <Stack
    direction='row'
    flexWrap={{
      xs: 'wrap',
      md: 'nowrap'
    }}
    
    >
      <OrderFormSpotColumn first={false}/>
      <OrderFormSpotColumn first={true}/>
    </Stack>
  );
}