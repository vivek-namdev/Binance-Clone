import { IconButton, Menu } from "@mui/material";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsMenu from "./NotificationsMenu";

export default function NotificationsButton () {
  return (
    <div>
      <IconButton
      sx={{
        display: {
          xs: 'none',
          sm: 'block'
        }
      }}
      >
        <NotificationsActiveIcon/>
      </IconButton>
      {/* <Menu
        id=""
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <NotificationsMenu/>
      </Menu> */}
    </div>
  )
}