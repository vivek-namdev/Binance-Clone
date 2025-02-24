import { InputAdornment, TextField, Typography } from "@mui/material";

export default function CustomInputBox ({ leftTitle, rightTitle, defaultValue } : {
  leftTitle : string,
  rightTitle : string,
  defaultValue? : number
}) {

  return (
    <TextField
      size="small"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start"
          >
            <Typography fontSize={14} color='text.tertiary'>
              {leftTitle}
            </Typography>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="start">
            <Typography fontSize={14} color='text.tertiary'>
              {rightTitle}
            </Typography>
          </InputAdornment>
        ),
        sx: {
          fontSize: 14,
          textAlign: 'right'
        }
      }}
      variant="filled"
      defaultValue={defaultValue}
    />    
  );

}