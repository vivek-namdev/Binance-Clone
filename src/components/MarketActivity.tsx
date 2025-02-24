import { Typography, Stack, Link } from "@mui/material";
import MarketActivityTabs from "./MarketActivityTabs";

export default function MarketActivity () {

  return (
    <Stack
    direction='column'
    >
      <Stack
      direction='row'
      px='1rem'
      pt='1rem'
      >
        <Typography
          variant="body1"
          color='text.primary'
          fontWeight='600'
        >
          Top Movers&nbsp;
        </Typography>
        <Link 
          href=''
          variant="body2"
          underline="none"
          fontWeight='600'
          color="secondary"
        >
          FAQ&gt;
        </Link>
      </Stack>
      <MarketActivityTabs/>
    </Stack>
  )
}