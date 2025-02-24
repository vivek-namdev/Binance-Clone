import { Box, Tabs, Tab, Container, Typography, Stack } from "@mui/material";
import React from "react";
import LogInOrSignUp from "./LogInOrSignUp";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function UserTradeInfo () {

  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // create a tab list with each entry pointing to nothing

  return (
    <Box
      height="100%"
    >
      <Box
      
      >
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="Open Orders" {...a11yProps(0)} />
          <Tab label="Order History" {...a11yProps(1)} />
          <Tab label="Trade History" {...a11yProps(2)} />
          <Tab label="Funds" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Box
      height="5vh"
      alignItems='center'
      display='flex'
      justifyContent='center'
      >
        <LogInOrSignUp/>
      </Box>
    </Box>
  );
}