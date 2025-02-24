import Stack from "@mui/material/Stack";
import LogInOrSignUp from "./LogInOrSignUp";
import CustomInputBox from "./tradingview/components/CustomInputBox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

function getPairSecond() {
  return 'BNB';
}

function getPriceSecond() {
  return 100;
}
function getPriceFirst() {
  return 200;
}

function getPairFirst() {
  return 'USDT';
}


export default function OrderFormSpotColumn ({ first } : {
  first: boolean
}) {
    return (
      <Box
      m='1rem'
      flexGrow={1}
      >
        <Stack
        direction='row'
        >
          <Typography variant="caption" color='text.secondary'>Avbl-</Typography>
          <Typography variant="caption" color='text.primary'>{first ? getPairFirst() : getPairSecond()}</Typography>
        </Stack>
        <Stack
        spacing='1rem'
        >
          <CustomInputBox
            leftTitle="Price"
            rightTitle={getPairSecond()}
            defaultValue={getPriceSecond()}
          />
          <CustomInputBox
            leftTitle="Amount"
            rightTitle={getPairFirst()}
          />
          <Slider
            aria-label="Amount"
            defaultValue={0}
            disabled
            step={1}
            marks
            min={1}
            max={5}
          />
          <Button
            sx={{
              textTransform: 'none',
              bgcolor: 'primary.light'
            }}
          >
            <LogInOrSignUp/>
          </Button>
        </Stack>
      </Box>
    )
}