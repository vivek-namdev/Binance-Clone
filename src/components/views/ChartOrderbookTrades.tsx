import { Box, Tab, Tabs, useTheme } from "@mui/material";
import React from "react";
import SpotOrderbook from "../SpotOrderbook";
import TabPanel from "../TabPanel";
import Trades from "../Trades";
import { AdvancedRealTimeChart } from "../tradingview/components";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
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

export default function ChartOrderbookTrades () {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary" indicatorColor="secondary">
          <Tab label="Chart" {...a11yProps(0)} />
          <Tab label="Orderbook" {...a11yProps(1)} />
          <Tab label="Trades" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          height='400px'
        >
          <AdvancedRealTimeChart
            autosize
            theme={useGetTheme()}
          />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SpotOrderbook/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Trades/>
      </TabPanel>
    </Box>
  )
}