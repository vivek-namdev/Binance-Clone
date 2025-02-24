import { Container, Stack, Typography } from "@mui/material";

export default function LogInOrSignUp () {
  return (
    <Container
    >
      <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'>
        <Typography
        sx={{
          color: 'secondary.main',
          fontSize: 12
        }}
        >
          Log In
        </Typography>
        <Typography
        sx={{
          color: 'text.primary',
          fontSize: 12
        }}        
        >
          &nbsp;or&nbsp; 
        </Typography>
        <Typography
        sx={{
          color: 'secondary.main',
          fontSize: 12
        }} 
        >
          Register Now
        </Typography>
        <Typography
        sx={{
          color: 'text.primary',
          fontSize: 12
        }}        
        >
          &nbsp;to trade&nbsp;
        </Typography>
      </Stack>
    </Container>
  );
}