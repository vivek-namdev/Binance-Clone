import { MenuItem, Stack, Typography } from "@mui/material";

interface NavBarMenuItemType { 
  svgElement : React.ReactNode, 
  title : string, 
  description : string, 
  onClick : () => void
}

export default function NavBarMenuItem ({ svgElement, title, description, onClick } : NavBarMenuItemType) {

  // This returns a MenuItem with the appropriate color that has the inputted SVG element to its left and 
  // A stack of column-ordered title and description to the right which are left indented

  return (
    <MenuItem
      sx={{
        borderRadius: 1,
        p: 2
      }}
      onClick={onClick}
    >
      {svgElement}
      <Stack
        direction='column'
      >
        <Typography
          fontWeight={600}
          variant="body1"
          sx={{
            color: 'text.primary'
          }}
        >
          {title}
        </Typography>
        <Typography variant="caption"
          sx={{
            color: 'text.secondary'
          }}
        >{description}</Typography>
      </Stack>
    </MenuItem>
  );
}