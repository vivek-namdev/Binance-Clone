import { Link, Stack } from "@mui/material";
import BinanceLogo from "./BinanceLogo";
import NavBarMenu from "./NavBarMenu";
import AppsIcon from '@mui/icons-material/Apps';

interface MenuItem {
  svgElement : React.ReactNode,
  title : string,
  description : string
}

interface NavBarLeftData {
  buttonLabel: React.ReactNode,
  menuItems: MenuItem[]
}

const navBarLeftData: NavBarLeftData[] = [
  {
    buttonLabel : <AppsIcon/>,
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
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

function getRandomString() {
  let length = 10;

  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export default function NavBarLeft () {
  
  // This is a stack of logo, and NavBarMenus

  return(
    <Stack
      direction="row"
      alignItems='center'
      overflow='overlay'
    >
      <Link href=""
        height='auto'
        sx={{
          fill: ((theme) => (theme.palette.secondary.main))
        }}
      >
        <BinanceLogo/>
      </Link>
      {navBarLeftData.map((element, index) => (
        <NavBarMenu key={typeof element.buttonLabel === 'string' ? element.buttonLabel : getRandomString()}
        menuItems={element.menuItems}
        >
          {element.buttonLabel}
        </NavBarMenu>
      ))}
    </Stack>
  );

}