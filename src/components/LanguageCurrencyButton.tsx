import { IconButton } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';

export default function LanguageCurrencyButton () {
  return (
    <IconButton
    sx={{
      display: {
        xs: 'none',
        sm: 'block'
      }
    }}
    >
      <LanguageIcon/>
    </IconButton>
  );
}