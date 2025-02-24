import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';

export default function FooterButton ({ 
  children, displayText, onClickFn, onHoverFn 
} : {
  children : any,
  displayText : string,
  onClickFn : (...args: any[]) => any,
  onHoverFn : (...args: any[]) => any,
}) {

  // assert : a button is returned which takes in a 'displaySvg' and a 'displayText' 
  //          and displays them
  // 
  //          also execute the onClick function when onClick and execute the onHoverFn
  //          when hovering. 

  return (
    <Link
      href=''
      color='text.secondary'
      underline='none'
      display='flex'
      flexDirection='row'
      justifyContent='end'
      alignItems='center'
      px='0.3rem'
      sx={{
        textTransform: 'none'
      }}
    >
      <Box mr='0.5rem'>
        {children}
      </Box>
      <Typography variant='caption'
      noWrap
      >
        {displayText}
      </Typography>

    </Link>
  );

}