import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import LogInOrSignUp from "./LogInOrSignUp";
import MarketTradesTable from "./MarketTradesTable";
import TabPanel from "./TabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Trades () {
  
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // A tab system -
  // - Tab1 - Title : Market Trades
  //          Content - Table with columns (Price(BNB), Amount(ATOM), Time)
  //          Rows with data
  // 
  // - Tab2 - Title : My Trades
  //          Content "Login or Register"

  return (
    <Box
    borderBottom={1}
    borderColor='divider'
    pb="1rem"
    >
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="Market Trades" {...a11yProps(0)} />
          <Tab label="My Trades" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MarketTradesTable/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LogInOrSignUp/>
      </TabPanel>
    </Box>
  );
}