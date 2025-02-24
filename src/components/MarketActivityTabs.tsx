import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { useState } from "react";
import MarketMoverRow from "./MarketMoverRow";
import TabPanel from "./TabPanel";

interface MarketActivityRow {
  pairFirst : string,
  pairSecond : string,
  time : string,
  changeText: string ,
  changeDesc: string,
  changeColor: 'green' | 'red',
  changeIcon: React.ReactNode,
  pairLink: string,
  link: string
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function getNewData(value: number): MarketActivityRow[] {
  if (value === 0) {
    return ([{
      pairFirst : 'BNB', 
      pairSecond : 'USDT', 
      time : '10:12:48', 
      changeText: 'BigBuy', 
      changeDesc: 'Description', 
      changeColor: "green",
      changeIcon: null,
      pairLink: "",
      link: 'test.com'
    }, {
      pairFirst : 'BNB', 
      pairSecond : 'USDT', 
      time : '10:12:50', 
      changeText: 'BigBuy', 
      changeDesc: 'Description 2', 
      changeColor: "green",
      changeIcon: null,
      pairLink: "",
      link: 'test.com'
    }])
  }
  else {
    return ([{
      pairFirst : 'BNB', 
      pairSecond : 'USDT', 
      time : '10:16:58', 
      changeText: 'BigBuy', 
      changeDesc: 'Description 3 ', 
      changeColor: "green",
      changeIcon: null,
      pairLink: "",
      link: 'test.com'
    }, {
      pairFirst : 'BNB', 
      pairSecond : 'USDT', 
      time : '10:14:18', 
      changeText: 'BigBuy', 
      changeDesc: 'Description 5', 
      changeColor: "red",
      changeIcon: null,
      pairLink: "",
      link: 'test.com'
    }])
  }
}


export default function MarketActivityTabs () {

  const [value, setValue] = React.useState(0);
  const [data, setData] = useState<MarketActivityRow[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setData(getNewData(newValue));
    setValue(newValue);
  };

  // data is a state that is supposed to changed upon the value of "value" changing

  return (
    <Box
    width='350px'
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} onChange={handleChange} 
          aria-label="basic tabs example"
          variant='scrollable'
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Change" {...a11yProps(1)} />
          <Tab label="New High/Low" {...a11yProps(2)} />
          <Tab label="Fluctuation" {...a11yProps(2)} />
          <Tab label="Volume" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box
      sx={{
        overflow: 'auto'
      }}
      >
        {data.map((e) => (
          <MarketMoverRow key={e.time}
            pairFirst={e.pairFirst}
            pairSecond={e.pairSecond}
            time={e.time}
            changeText={e.changeText}
            changeDesc={e.changeDesc}
            changeColor={e.changeColor}
            changeIcon={e.changeIcon}
            pairLink={e.link}
          />
        ))}
      </Box>
    </Box>
  );

}