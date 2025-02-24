import { TickerTape } from "./tradingview";
import ConnectionStatus from "./ConnectionStatus";
import FooterButton from "./FooterButton";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Stack, Toolbar } from "@mui/material";

interface footerObject {
  title: string,
  svgElement: JSX.IntrinsicElements['svg']
}

function useGetTheme() {
  const theme = useTheme();
   if (theme.palette.primary.main === 'rgb(250, 250, 250)') {
    return 'light';
   }
   else {
    return 'dark';
   }
}

export default function Footer ({ connectionStatus } : {
  connectionStatus : "STABLE" | "UNSTABLE" | "CONNECTING" | "DISCONNECTED",
}) {
  
  let footerObjects: footerObject[] = [
    {
      title: 'Feed',
      svgElement: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M3 3h18v16H11l-4 4v-4H3V3zm5.222 4.67c4.143 0 7.501 3.358 7.501 7.5h2a9.5 9.5 0 00-9.5-9.5v2zm3.5 7.5a3.5 3.5 0 00-3.5-3.5v-2a5.5 5.5 0 015.5 5.5h-2zm-3.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor"></path></svg>    },
    {
      title: 'Annoucements',
      svgElement: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="t.secondary"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>
    },
    {
      title: 'Cookie Preferences',
      svgElement: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4 16V4h16v12l-8 5-8-5zm10-6.24a2 2 0 01-1 1.732v2.506h-2v-2.506a2 2 0 113-1.732z" fill="currentColor"></path></svg>
    },
    {
      title: 'Download',
      svgElement: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 9V6H16v3h3V3H4.5v6h3zm-3 12H19v-6h-3v3H7.5v-3h-3v6zm6.009-13h3v4.002l2.508.006-4.008 4.008-4.01-4.008 2.51-.025V8z" fill="currentColor"></path></svg>
    },
    {
      title: 'Online Support',
      svgElement: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M3 3h18v14h-9l-5 5v-5H3V3zm15 3H6v2.5h12V6zm0 5.5H6V14h12v-2.5z" fill="currentColor"></path></svg>
    }
  ]

  // assert : The component should have the following functionality -
  // 
  // based on whether the connection status is 'STABLE', 'UNSTABLE',
  // 'CONNECTING' or 'DISCONNECTED', the the left component should 
  // change
  // 
  // Middle element should be a static ticker imported externally
  // 
  // Right-most elements should be FooterButton which do certain things

  return (
    <Box
    sx={{
      width: 1,
      borderTop: 1,
      borderColor: 'divider',
      bgcolor : 'primary.main',
      zIndex: 20,
      position: 'sticky',
      bottom: 0,
      display: {
        xs: 'none',
        sm: 'block'
      }
    }}
    >
      <Stack 
        width={1}
        direction='row'
        justifyContent='space-between'
        overflow='overlay'
        className="flex flex-row justify-between bg-primary_main overflow-auto fixed bottom-0 left-0 right-0 border-t border-divider"
        >
        <ConnectionStatus
          connectionStatus={connectionStatus}
          />
        <Box
          sx={{
            width: '100%',
          }}
        >
          <TickerTape
            colorTheme={useGetTheme()}
            showSymbolLogo={false}
            displayMode="regular"
            ></TickerTape>
        </Box>
        <Stack
          direction='row'
        >
          {footerObjects.map((element) => (
            <FooterButton key={element.title}
            displayText={element.title}
            onClickFn={() => (null)}
            onHoverFn={() => (null)}
            >
              {element.svgElement}
            </FooterButton>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}