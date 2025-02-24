import { Button, ButtonProps } from "@mui/material";

export default function StyledButton (props : ButtonProps) {
  return (
    <Button
    sx={{
      color: 'text.primary',
      textTransform: 'none'
    }}
    {...props}
    >
      {props.children}
    </Button>
  )
}