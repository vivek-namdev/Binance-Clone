import { Stack } from "@mui/material";
import DownloadsButton from "./DownloadsButton";
import Hamburger from "./Hamburger";
import HelpMenuButton from "./HelpMenuButton";
import LanguageCurrencyButton from "./LanguageCurrencyButton";
import LoginButton from "./LoginButton";
import NotificationsButton from "./NotificationsButton";
import RegisterButton from "./RegisterButton";
import SettingsButton from "./SettingsButton";
import StyledButton from "./StyledButton";

export default function NavBarRight () {

  return (
    <Stack
    direction="row"
    justifyContent="space-between"
    >
      <LoginButton/>
      <RegisterButton/>
      <Hamburger/>
      <NotificationsButton/>
      <DownloadsButton/>
      <LanguageCurrencyButton/>
      <HelpMenuButton/>
      <SettingsButton/>
    </Stack>
  )
}