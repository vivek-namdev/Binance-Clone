import { Link, Stack, Typography } from "@mui/material";
import PriceChangeHighLowEtc from "./PriceChangeHighLowEtc";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function HeaderTopBodyLeftPairPrice () {
  return (
    <Stack
      direction='row'
      px='1rem'
      flexWrap='wrap'
      color='text.primary'
      justifyContent='space-between'
      alignItems='center'
      spacing='1rem'
      flexGrow='1'
    >
      <PriceChangeHighLowEtc/>
      <Stack
        direction='row'
        spacing='1rem'
        display={{
          xs: 'none',
          md: 'flex'
        }}
      >
        <Link href=""
          variant="caption"
          color='text.secondary'
        >
          <Stack
            direction='row'
          >
            <PlayCircleIcon/>
            <Typography ml='0.5rem' noWrap variant="inherit">Spot Tutorial</Typography>
          </Stack>
        </Link>
        <Link href=""
          variant="caption"
          color='text.secondary'
        >
          <Stack
            direction='row'
          >
            <OndemandVideoIcon/>
            <Typography ml='0.5rem' noWrap variant="inherit">Spot Guidance</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
}