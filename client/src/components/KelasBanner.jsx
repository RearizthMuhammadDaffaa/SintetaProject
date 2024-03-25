import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const KelasBanner = () => {
  return (
   <Box
   sx={{
    width:'100%',
    height:'249px',
    padding:"120px 0px",
    gap:'120px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
   }}
   >
    <Box
     sx={{
      height:'309px',
      width:'90%',
      borderRadius:'15px',
      background:"linear-gradient(#38B6FF,#A1C6DB)",
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      position:'relative'
     }}
    >

      <Typography
      sx={{
        fontWeight:'700',
        fontSize:'32px',
        lineHeight:'44.8px',
        textAlign:'center',
        color:'#FFFFFF'
      }}
      >
      Ayo, mulai belajar 
 
      </Typography>

      <Typography
      sx={{
        fontWeight:'700',
        fontSize:'32px',
        lineHeight:'44.8px',
        textAlign:'center',
        color:'#FFFFFF'
      }}
      >
   
 siapkan dirimu bersama SINTETA
      </Typography>

      <Button variant='contained' sx={{
        background:'#38B6FF',
        color:'#FFFFFF',
        marginTop:'30px',
        cursor:'pointer',
        zIndex:'100000',
        gap:'10px'
      }}>
        Hubungi kami
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5 16C28.5 22.6274 23.1274 28 16.5 28C13.9722 28 11.6269 27.2184 9.69266 25.8837L5.59091 26.9091L6.66576 22.8784C5.30092 20.9307 4.5 18.5589 4.5 16C4.5 9.37258 9.87258 4 16.5 4C23.1274 4 28.5 9.37258 28.5 16Z" fill="url(#paint0_linear_626_1204)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 30C24.232 30 30.5 23.732 30.5 16C30.5 8.26801 24.232 2 16.5 2C8.76801 2 2.5 8.26801 2.5 16C2.5 18.5109 3.161 20.8674 4.31847 22.905L2.5 30L9.81486 28.3038C11.8014 29.3854 14.0789 30 16.5 30ZM16.5 27.8462C23.0425 27.8462 28.3462 22.5425 28.3462 16C28.3462 9.45755 23.0425 4.15385 16.5 4.15385C9.95755 4.15385 4.65385 9.45755 4.65385 16C4.65385 18.5261 5.4445 20.8675 6.79184 22.7902L5.73077 26.7692L9.77993 25.7569C11.6894 27.0746 14.0046 27.8462 16.5 27.8462Z" fill="white"/>
<path d="M13 9.50001C12.6672 8.83143 12.1565 8.89062 11.6407 8.89062C10.7188 8.89062 9.28125 9.9949 9.28125 12.0501C9.28125 13.7344 10.0234 15.5782 12.5244 18.3362C14.938 20.998 18.1094 22.3749 20.7422 22.3281C23.375 22.2812 23.9167 20.0156 23.9167 19.2504C23.9167 18.9113 23.7062 18.7421 23.5613 18.6961C22.6641 18.2656 21.0093 17.4633 20.6328 17.3125C20.2563 17.1618 20.0597 17.3657 19.9375 17.4766C19.5961 17.802 18.9193 18.7609 18.6875 18.9766C18.4558 19.1923 18.1103 19.0831 17.9665 19.0016C17.4374 18.7893 16.0029 18.1512 14.8595 17.0427C13.4453 15.6719 13.3623 15.2003 13.0959 14.7804C12.8828 14.4446 13.0392 14.2385 13.1172 14.1484C13.4219 13.7969 13.8426 13.2541 14.0313 12.9844C14.2199 12.7147 14.0702 12.3051 13.9803 12.0501C13.5938 10.9531 13.2663 10.0349 13 9.50001Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_626_1204" x1="27" y1="7" x2="4.5" y2="28" gradientUnits="userSpaceOnUse">
<stop stop-color="#5BD066"/>
<stop offset="1" stop-color="#27B43E"/>
</linearGradient>
</defs>
</svg>
      </Button>
      <Box
      sx={{
        position:'absolute',
        bottom:'0',
        zIndex:'0',
        width:'100%',
        
      }}
      >
    <svg width="100%" height="auto" viewBox="0 0 1238 183" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M-1 0L50.6667 37.1667C102.333 74.3333 205.667 148.667 309 185.833C412.333 223 515.667 223 619 185.833C722.333 148.667 825.667 74.3333 929 37.1667C1032.33 0 1135.67 0 1187.33 0H1239V223H1187.33C1135.67 223 1032.33 223 929 223C825.667 223 722.333 223 619 223C515.667 223 412.333 223 309 223C205.667 223 102.333 223 50.6667 223H-1V0Z" fill="url(#paint0_linear_626_1199)"/>
<defs>
<linearGradient id="paint0_linear_626_1199" x1="619" y1="0" x2="619" y2="223" gradientUnits="userSpaceOnUse">
<stop stop-color="#38B6FF"/>
<stop offset="1" stop-color="#A1C6DB"/>
</linearGradient>
</defs>
</svg>
      </Box>
    </Box>

   </Box>
  )
}

export default KelasBanner