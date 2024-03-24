import React from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Button, styled } from '@mui/material';




const StyledSpeedDial = styled(SpeedDial, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
  position: 'fixed',
  bottom: 16,
  right: 16,
  '& .MuiSpeedDial-fab': {
    background: '#FFF',
    '&:hover': {
      background: '#FFF',
    },
  },
}));



const IconWA = () =>{
  return (
    <Box sx={{
      width:'100%',
      height:'100%',
      background:'#FFFFFF',
      borderRadius:'100%',
      zIndex:'300'
    }}>
       <a href="https://wa.me/6281380327556"
        target='_blank'
        style={{
          zIndex:'300'
        }}
      >
     
      
      <svg width="80%" height="auto" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 31C24.232 31 30.5 24.732 30.5 17C30.5 9.26801 24.232 3 16.5 3C8.76801 3 2.5 9.26801 2.5 17C2.5 19.5109 3.161 21.8674 4.31847 23.905L2.5 31L9.81486 29.3038C11.8014 30.3854 14.0789 31 16.5 31ZM16.5 28.8462C23.0425 28.8462 28.3462 23.5425 28.3462 17C28.3462 10.4576 23.0425 5.15385 16.5 5.15385C9.95755 5.15385 4.65385 10.4576 4.65385 17C4.65385 19.5261 5.4445 21.8675 6.79184 23.7902L5.73077 27.7692L9.77993 26.7569C11.6894 28.0746 14.0046 28.8462 16.5 28.8462Z" fill="#BFC8D0"/>
      <path d="M28.5 16C28.5 22.6274 23.1274 28 16.5 28C13.9722 28 11.6269 27.2184 9.69266 25.8837L5.59091 26.9091L6.66576 22.8784C5.30092 20.9307 4.5 18.5589 4.5 16C4.5 9.37258 9.87258 4 16.5 4C23.1274 4 28.5 9.37258 28.5 16Z" fill="url(#paint0_linear_626_1776)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 30C24.232 30 30.5 23.732 30.5 16C30.5 8.26801 24.232 2 16.5 2C8.76801 2 2.5 8.26801 2.5 16C2.5 18.5109 3.161 20.8674 4.31847 22.905L2.5 30L9.81486 28.3038C11.8014 29.3854 14.0789 30 16.5 30ZM16.5 27.8462C23.0425 27.8462 28.3462 22.5425 28.3462 16C28.3462 9.45755 23.0425 4.15385 16.5 4.15385C9.95755 4.15385 4.65385 9.45755 4.65385 16C4.65385 18.5261 5.4445 20.8675 6.79184 22.7902L5.73077 26.7692L9.77993 25.7569C11.6894 27.0746 14.0046 27.8462 16.5 27.8462Z" fill="white"/>
      <path d="M13 9.49989C12.6672 8.83131 12.1565 8.8905 11.6407 8.8905C10.7188 8.8905 9.28125 9.99478 9.28125 12.05C9.28125 13.7343 10.0234 15.578 12.5244 18.3361C14.938 20.9979 18.1094 22.3748 20.7422 22.3279C23.375 22.2811 23.9167 20.0154 23.9167 19.2503C23.9167 18.9112 23.7062 18.742 23.5613 18.696C22.6641 18.2654 21.0093 17.4631 20.6328 17.3124C20.2563 17.1617 20.0597 17.3656 19.9375 17.4765C19.5961 17.8018 18.9193 18.7608 18.6875 18.9765C18.4558 19.1922 18.1103 19.083 17.9665 19.0015C17.4374 18.7892 16.0029 18.1511 14.8595 17.0426C13.4453 15.6718 13.3623 15.2001 13.0959 14.7803C12.8828 14.4444 13.0392 14.2384 13.1172 14.1483C13.4219 13.7968 13.8426 13.254 14.0313 12.9843C14.2199 12.7145 14.0702 12.305 13.9803 12.05C13.5938 10.953 13.2663 10.0347 13 9.49989Z" fill="white"/>
      <defs>
      <linearGradient id="paint0_linear_626_1776" x1="27" y1="7" x2="4.5" y2="28" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5BD066"/>
      <stop offset="1" stop-color="#27B43E"/>
      </linearGradient>
      </defs>
      </svg>

      </a>
    </Box>
   

  )
}


const Whatsapp = () => {
  return (
    <Box sx={{ zIndex:'10', height: '100%', position: 'relative'}}>
    <SpeedDial
      
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<IconWA />}
    >



      
    </SpeedDial>
  </Box>
  )
}

export default Whatsapp