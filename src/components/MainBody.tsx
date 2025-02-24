import { Container } from "@mui/material";
import TopBody from "./TopBody";
import UserTradeInfo from "./UserTradeInfo";
import zIndex from "@mui/material/styles/zIndex";

export default function MainBody () {
  return (
    <Container
    maxWidth='xl'
    disableGutters
    sx={{
      px: 0,
      borderLeft: 1,
      borderRight: 1,
      borderColor: 'divider',
      zIndex: 5,
      display: {
        xs: 'none',
        md: 'block'
      }
    }}
    >
      <TopBody/>
      <UserTradeInfo/>
    </Container>
  );
}