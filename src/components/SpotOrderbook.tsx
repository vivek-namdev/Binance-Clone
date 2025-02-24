import { Box, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import GreenOrderbookIcon from "./GreenOrderbookIcon";
import OrderbookTableFull from "./OrderbookTableFull";
import OrderbookTableHeaderless from "./OrderbookTableHeaderless";
import OrderbookTicker from "./OrderbookTicker";
import RedOrderbookIcon from "./RedOrderbookIcon";
import SplitOrderbookIcon from "./SplitOrderbookIcon";
import TabPanel from "./TabPanel";

interface OrderbookRow {
  id : number,
  color: 'red' | 'green',
  price : number,
  amount : number,
  total : number
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SpotOrderbook () {

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Stack
      direction='row'
      >
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
            sx={{
              ml: 1
            }}
          >
            <Tab sx={{ p: 0, minWidth: 0 }} label={<SplitOrderbookIcon/>} {...a11yProps(0)}/>
            <Tab sx={{ p: 0, minWidth: 0 }} label={<GreenOrderbookIcon/>} {...a11yProps(1)} />
            <Tab sx={{ p: 0, minWidth: 0 }} label={<RedOrderbookIcon/>} {...a11yProps(2)} />
          </Tabs>  
        </Box>
      </Stack>
      <TabPanel value={value} index={0}>
        <Stack height='100%'>
          <OrderbookTableFull data={dataRed}/>      
          <OrderbookTicker price={price} currencyValue={currencyValue}/>
          <OrderbookTableHeaderless data={dataGreen}/>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}> 
      {/* Green one */}
        <Stack height='100%'>
          <OrderbookTableFull data={dataGreen}/>      
          <OrderbookTicker price={price} currencyValue={currencyValue}/>
        </Stack>
      </TabPanel>
      {/* Red one */}
      <TabPanel value={value} index={2}>
        <Stack height='100%'>
          <OrderbookTableFull data={dataRed}/>      
          <OrderbookTicker price={price} currencyValue={currencyValue}/>
        </Stack>
      </TabPanel>
    </Stack>
  );
}

const dataRed: OrderbookRow[] = [
  {id : 1, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 2, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 3, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 4, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 5, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 6, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 7, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 8, color: 'red', price : 0.123, amount : 412, total : 100},
];

const dataGreen: OrderbookRow[] = [
  {id : 1, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 2, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 3, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 4, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 5, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 6, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 7, color: 'red', price : 0.123, amount : 412, total : 100},
  {id : 8, color: 'red', price : 0.123, amount : 412, total : 100},
];

const currencyValue = 0.03980;

const price = 412;