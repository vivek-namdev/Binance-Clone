import { Link, Stack, Typography } from "@mui/material";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

function getFirstPair() {
  // some database call or checking params
  return ["BTC", "Bitcoin"]
}

function getSecondPair() {
  // some database call or checking params
  return "USDT"
}

export default function HeaderTopBodyLeftPairTitle () {

  return (
    <Stack
    px='1rem'
    borderRight={1}
    borderColor='divider'
    >
      <Stack
      direction='row'
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "700"
          }}
        >
          {getFirstPair()[0] + '/' + getSecondPair()}
        </Typography>
        <Link href=""
          variant="caption"
          color="text.secondary"
        >
          <Stack
            direction='row'
            height='100%'
            alignItems='center'
          >
            <CollectionsBookmarkIcon
              sx={{
                mx: 1,
                display: 'block',
                my: 'auto'
              }}
              fontSize="small"
            />
            {getFirstPair()[1]} Price

          </Stack>
        </Link>
      </Stack>
      <Link
        href=""
        variant="caption"
        color="secondary"
        width='fit-content'
      >
        Layer 1 / Layer 2
      </Link>
    </Stack>
  );

}