import { Box, Tabs, Tab } from "@mui/material";
import React from "react";
import OrderFormSpot from "./OrderFormSpot";
import TabPanel from "./TabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function OrderForm () {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"  
        >
          <Tab label="Spot" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OrderFormSpot/>
      </TabPanel>
    </Box>
  );

}