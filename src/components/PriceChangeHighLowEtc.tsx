import { Stack, Typography } from "@mui/material";

function getFirstPair() {
  return "BTC"
}

function getSecondPair() {
  return 'USDT'
}

function getPrice() {
  return '50,000.00'
}

function getPriceColor(): 'success' | 'error' {
  return 'success'
}

function get24HourChangeColor(): 'success' | 'error' {
  return 'error'
}

function getPriceInCurrency() {
  return '$100'
}

function get24HourChange() {
  return 10
}

function get24HourHigh() {
  return 10
}

function get24HourLow() {
  return 10
}

function get24HourVolumeATOM() {
  return 100
}

function get24HourVolumeBNB() {
  return 1000
}

function changePercentage() {
  return '-0.45%'
}

export default function PriceChangeHighLowEtc () {

  return (
    <Stack 
      direction='row'
      spacing='1rem'
      flexWrap='wrap'
      alignItems='center'
    >
      <Stack>
        <Typography
          color='error'
          fontWeight={600}
        >
          {getPrice()}
        </Typography>
        <Typography 
          variant="caption" 
          color='text.primary'
          fontWeight={600}
        >{getPriceInCurrency()}</Typography>
      </Stack>
      <Stack>
        <Typography
          variant="caption"
        >
          24h Change
        </Typography>
        <Typography 
          variant="caption" 
          color={get24HourChangeColor()}
          fontWeight={600}
        >{get24HourChange() + ' ' + changePercentage()}</Typography>
      </Stack>
      <Stack>
      <Typography
          variant="caption"
        >
          24h High
        </Typography>
        <Typography 
          variant="caption" 
          color='text.primary'
          fontWeight={600}
        >{get24HourHigh()}</Typography>
      </Stack>
      <Stack>
      <Typography
          variant="caption"
        >
          24h Low
        </Typography>
        <Typography 
          variant="caption" 
          color='text.primary'
          fontWeight={600}
        >{get24HourLow()}</Typography>
      </Stack>
      <Stack>
      <Typography
          variant="caption"
        >
          {'24h Volume(' + getFirstPair() + ')'}
        </Typography>
        <Typography 
          variant="caption" 
          color='text.primary'
          fontWeight={600}
        >{get24HourVolumeATOM()}</Typography>
      </Stack>
      <Stack>
      <Typography
          variant="caption"
        >
          {'24h Volume(' + getSecondPair() + ')'}
        </Typography>
        <Typography 
          variant="caption" 
          color='text.primary'
          fontWeight={600}
        >{get24HourVolumeBNB()}</Typography>
      </Stack>
    </Stack>
  );
}