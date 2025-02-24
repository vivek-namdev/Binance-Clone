import DesktopTabletFooter from '@/components/DesktopTabletFooter'
import Box from '@mui/material/Box';
import MainBody from '../MainBody';
import MainBodyTablet from '../MainBodyTablet';
import NavBar from '../NavBar';
import MainBodyMobile from './MainBodyMobile';
import MobileFooter from './MobileFooter';

function getConnectionStatus(): "CONNECTING" | "STABLE" | "UNSTABLE" | "DISCONNECTED" {
  return "CONNECTING";
}

export default function Desktop () {
  return (
    <Box
      sx={{
        height: 1
      }}
    >
      <NavBar></NavBar>
      <MainBody></MainBody>
      <MainBodyTablet></MainBodyTablet>
      <MainBodyMobile></MainBodyMobile>
      <DesktopTabletFooter connectionStatus={getConnectionStatus()}/>
      <MobileFooter/>
    </Box>
  );
}