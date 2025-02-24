import { Link, Stack, Typography } from "@mui/material";

export default function OrderbookTicker ({ price, currencyValue } : {
  price : number,
  currencyValue : number
}) {
  return (
    <Stack
      direction='row'
    >
      <Stack
        direction='row'
      >
        <Typography>{price}</Typography>
        <Typography>{currencyValue}</Typography>
      </Stack>
      <Link>More</Link>
    </Stack>
  );
}