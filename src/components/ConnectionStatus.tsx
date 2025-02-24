import { Box, Stack, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";

export default function ConnectionStatus ({ connectionStatus } : {
  connectionStatus : "STABLE" | "UNSTABLE" | "CONNECTING" | "DISCONNECTED",
}) {

  let ConnectionIcon : React.ReactNode; // Can only be of type Icon NEEDS TO BE CHANGED
  let ConnectionText : string; // Can only be of type ConnectionText NEEDS TO BE CHANGED
  let ConnectionColor : string;

  if (connectionStatus === "STABLE") {
    ConnectionIcon = <svg className="fill-success_main" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="9.667" width="1.67" height="2.5" fill="#0ECB81"></rect><rect x="4.44446" y="5.667" width="1.66667" height="6.67" fill="#0ECB81"></rect><rect x="8.88892" y="3" width="1.66667" height="10.83" fill="#0ECB81"></rect><rect x="13.3333" width="1.66667" height="15" fill="#0ECB81"></rect></svg>;
    ConnectionText = "Stable Connection"
    ConnectionColor = "success.main"
  }
  else if (connectionStatus === "UNSTABLE") {
    ConnectionIcon = <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="9.667" width="1.67" height="2.5" fill="#0ECB81"></rect><rect x="4.44446" y="5.667" width="1.66667" height="6.67" fill="#0ECB81"></rect><rect x="8.88892" y="3" width="1.66667" height="10.83" fill="#0ECB81"></rect><rect x="13.3333" width="1.66667" height="15" fill="#848E9C"></rect></svg>
    ConnectionText = "Unstable Connection"
    ConnectionColor = "success.main"
  }
  else if (connectionStatus === "CONNECTING") {
    ConnectionIcon = <svg className="fill-secondary_main" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="9.667" width="1.67" height="2.5" fill="#F0B90B"></rect><rect x="4.44446" y="5.667" width="1.66667" height="6.67" fill="#F0B90B"></rect><rect x="8.88892" y="3" width="1.66667" height="10.83" fill="#F0B90B"></rect><rect x="13.3333" width="1.66667" height="15" fill="#848E9C"></rect></svg>
    ConnectionText = "Connecting"
    ConnectionColor = "secondary"
  }
  else { // connectionStatus === "DISCONNECTED"
    ConnectionIcon = <svg className="text-text_tertiary" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="9.667" width="1.67" height="2.5" fill="#848E9C"></rect><rect x="4.44446" y="5.667" width="1.66667" height="6.67" fill="#848E9C"></rect><rect x="8.88892" y="3" width="1.66667" height="10.83" fill="#848E9C"></rect><rect x="13.3333" width="1.66667" height="15" fill="#848E9C"></rect></svg>
    ConnectionText = "Disconnected"
    ConnectionColor = "text.tertiary"
  }

  return (
    <Stack 
      direction='row'
      spacing='1rem'
      mx='1rem'
      alignItems='center'
      sx={{
        width: '15rem',
      }}
    >
      {ConnectionIcon}
      <Typography variant="caption" color={ConnectionColor}>{ConnectionText}</Typography>
    </Stack>
  )
}