import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import foto from "../../assets/Alumni/foto 1.png"


const Banner = () => {
  return (
     <Box
    sx={{
     width:'100%',
     height:'335px',
     
     gap:'120px',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     borderRadius:'15px',
     background:'linear-gradient(#38B6FF,#A1C6DB)',
     margin:'100px 0'
    }}
    >
     <Box
      sx={{
       height:'100%',
       width:'100%',
      margin:'0 20px',
       display:'flex',
       justifyContent:'center',
       alignItems:{md:'normal',xs:'center'},
       flexDirection:'column',
       position:'relative'
      }}
     >

      
 
       <Typography
       sx={{
         fontWeight:'700',
         fontSize:{md:'32px',xs:'20px'},
         lineHeight:'44.8px',
         color:'#FFFFFF'
       }}
       >
       Ayo !! Bergabung sekarang untuk Meraih PTN impian
  
       </Typography>
 
       <Typography
       sx={{
         fontWeight:'400',
         fontSize:'12px',
         lineHeight:'16.8px',
      
         color:'#F2F3F7'
       }}
       >
    
    Dapatkan diskon 40% untuk
bergabung di bulan ini
       </Typography>
 
       <Button variant='contained' sx={{
         gap:'10px',
         background:'#FFFFFF',
         color:'#38B6FF',
         borderRadius:'12px',
         marginTop:'30px',
         cursor:'pointer',
         zIndex:'100000',
         width:'280px'
       }}>
         Hubungi kami

         <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 16.5C28 23.1274 22.6274 28.5 16 28.5C13.4722 28.5 11.1269 27.7184 9.19266 26.3837L5.09091 27.4091L6.16576 23.3784C4.80092 21.4307 4 19.0589 4 16.5C4 9.87258 9.37258 4.5 16 4.5C22.6274 4.5 28 9.87258 28 16.5Z" fill="url(#paint0_linear_626_1714)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 30.5C23.732 30.5 30 24.232 30 16.5C30 8.76801 23.732 2.5 16 2.5C8.26801 2.5 2 8.76801 2 16.5C2 19.0109 2.661 21.3674 3.81847 23.405L2 30.5L9.31486 28.8038C11.3014 29.8854 13.5789 30.5 16 30.5ZM16 28.3462C22.5425 28.3462 27.8462 23.0425 27.8462 16.5C27.8462 9.95755 22.5425 4.65385 16 4.65385C9.45755 4.65385 4.15385 9.95755 4.15385 16.5C4.15385 19.0261 4.9445 21.3675 6.29184 23.2902L5.23077 27.2692L9.27993 26.2569C11.1894 27.5746 13.5046 28.3462 16 28.3462Z" fill="white"/>
<path d="M12.5 10C12.1672 9.33143 11.6565 9.39062 11.1407 9.39062C10.2188 9.39062 8.78125 10.4949 8.78125 12.5501C8.78125 14.2344 9.52345 16.0782 12.0244 18.8362C14.438 21.498 17.6094 22.8749 20.2422 22.8281C22.875 22.7812 23.4167 20.5156 23.4167 19.7504C23.4167 19.4113 23.2062 19.2421 23.0613 19.1961C22.1641 18.7656 20.5093 17.9633 20.1328 17.8125C19.7563 17.6618 19.5597 17.8657 19.4375 17.9766C19.0961 18.302 18.4193 19.2609 18.1875 19.4766C17.9558 19.6923 17.6103 19.5831 17.4665 19.5016C16.9374 19.2893 15.5029 18.6512 14.3595 17.5427C12.9453 16.1719 12.8623 15.7003 12.5959 15.2804C12.3828 14.9446 12.5392 14.7385 12.6172 14.6484C12.9219 14.2969 13.3426 13.7541 13.5313 13.4844C13.7199 13.2147 13.5702 12.8051 13.4803 12.5501C13.0938 11.4531 12.7663 10.5349 12.5 10Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_626_1714" x1="26.5" y1="7.5" x2="4" y2="28.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#5BD066"/>
<stop offset="1" stop-color="#27B43E"/>
</linearGradient>
</defs>
</svg>
       </Button>
    
     </Box>

     <Box
     sx={{
      width:{ md: '100%', xs: '100%' },
      height:'auto',
      display:{md:'block',xs:'none'}
     }}
    >
      <img src={foto} alt="" />
     </Box>
 
    </Box>
  )
}

export default Banner