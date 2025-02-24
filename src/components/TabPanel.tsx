import { Box, Typography } from "@mui/material";

export default function TabPanel ({ value, index, children, ...other } : {
  value : number,
  index: number,
  children? : React.ReactNode
}) {

  return (
    <Box
      role="tabpanel"
      width="100%"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        children
      )}
    </Box>
  );

}