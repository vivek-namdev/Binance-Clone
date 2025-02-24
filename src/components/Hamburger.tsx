import { Box, Collapse, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { data } from "autoprefixer";

interface MenuItem {
  svgElement : React.ReactNode,
  title : string,
  description : string
}

interface NavBarLeftData {
  buttonLabel: string,
  menuItems: MenuItem[]
}

const navBarData: NavBarLeftData[] = [
  {
    buttonLabel : "Buy Crypto",
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="10px" width=""><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis."
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis."
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis."
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis."
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis."
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis."
    }]
  },
  {
    buttonLabel : "Markets",
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="10px" width=""><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }]
  },
  {
    buttonLabel : "Trade",
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="10px" width=""><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }]
  },   {
    buttonLabel : "Derivates",
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="10px" width=""><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }]
  },   {
    buttonLabel : "Earn",
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="10px" width=""><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }]
  },   {
    buttonLabel : "Finance",
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="10px" width=""><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }]
  },   {
    buttonLabel : "NFT",
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="10px" width=""><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }]
  },   {
    buttonLabel : "Institutional",
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="10px" width=""><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }]
  }, {
    buttonLabel : "Feed",
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="10px" width=""><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }]
  },
]

interface hamburgerStateType {
  [key : string] : boolean
}

export default function Hamburger () {

  const [state, setState] = React.useState(false);

  const handleClick = (key: string) => (event : React.KeyboardEvent | React.MouseEvent) => {
    setHamburgerState({...hamburgerState, [key]: !hamburgerState[key], });
  };

  function createState(data: NavBarLeftData[]) {
    let stateObject: hamburgerStateType = {};

    data.forEach((element) => {
      stateObject[element.buttonLabel] = false;
    })

    return stateObject;
  }

  const [hamburgerState, setHamburgerState] = React.useState<hamburgerStateType>(createState(navBarData))

  const list = () => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navBarData.map((bigElement, index) => (
          <ListItem key={bigElement.buttonLabel}>
            <ListItemButton onClick={handleClick(bigElement.buttonLabel)}>
              <ListItemText primary={bigElement.buttonLabel} />
              {hamburgerState[bigElement.buttonLabel] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={hamburgerState[bigElement.buttonLabel]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {
                  bigElement.menuItems.map((element, index) => (
                  <ListItem key={bigElement.buttonLabel + '-' + element.title}>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {}}>
                      <ListItemText primary={element.title} />
                    </ListItemButton>
                  </ListItem>
                  ))
                }
              </List>
            </Collapse>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
  };

  return (
    <React.Fragment key={'right'}>
      <IconButton 
      sx={{
        display: {
          xs: 'block',
          md: 'none'
        }
      }}      
      onClick={toggleDrawer(true)}>
        <MenuIcon/>
      </IconButton>
      <SwipeableDrawer
        anchor={'right'}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </React.Fragment>      
  );
}