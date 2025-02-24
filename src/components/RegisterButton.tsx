import { Button } from "@mui/material";

export default function RegisterButton () {
  return (
    <Button
    variant='contained'
    color="secondary"
    sx={{
      textTransform: 'none',
      fontWeight: "600",
      bgcolor: 'secondary'
    }}
    >
      Register
    </Button>
  )
}