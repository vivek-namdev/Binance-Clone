import { IconButton } from "@mui/material";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

export default function HelpMenuButton () {
  return (
    <IconButton
    sx={{
      display: {
        xs: 'none',
        sm: 'block'
      }
    }}
    >
      <HelpCenterIcon/>
    </IconButton>
  );
}