import { IconButton } from "@mui/material";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function DownloadsButton () {
  return (
    <IconButton
      sx={{
        display: {
          xs: 'none',
          md: 'block'
        }
      }}
    >
      <DownloadForOfflineIcon/>
    </IconButton>
  );
}