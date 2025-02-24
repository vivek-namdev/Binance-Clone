import { Box, Stack, Typography } from "@mui/material";

export default function MarketMoverRow ({ 
  pairFirst,
  pairSecond,
  time,
  changeText,
  changeDesc,
  changeColor,
  changeIcon,
  pairLink,
} : { 
  pairFirst : string,
  pairSecond : string,
  time : string,
  changeText : string,
  changeDesc : string,
  changeColor : "red" | "green",
  changeIcon : React.ReactNode,
  pairLink : string
}) {
  return (
    <Box>
      <Stack>
        <Stack>
          <Typography>
            {pairFirst}
          </Typography>
          <Typography>
            {'/' + pairSecond}
          </Typography>
        </Stack>
        <Typography>
          {time}
        </Typography>
      </Stack>
      <Stack>
        <Typography
          // color red if changeColor is red, otherwise green
        >
          {changeText}
        </Typography>
        <Typography>
          {changeDesc}
        </Typography>
      </Stack>
      <Box>
        {/* Vertically centered */}
        {changeIcon}
      </Box>
    </Box>
  );
}