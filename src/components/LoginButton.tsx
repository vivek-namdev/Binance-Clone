import { Button } from "@mui/material";

export default function LoginButton () {
  return (
    <Button
    variant="text"
    sx={{
      textTransform: 'none',
      color: 'text.primary',
      fontWeight: "600",
      display: {
        xs: 'none',
        md: 'block'
      }
    }}
    >
      Login
    </Button>
  );
}