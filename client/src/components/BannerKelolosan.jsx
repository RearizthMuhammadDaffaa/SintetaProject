import { Box, Typography } from '@mui/material'
import React from 'react'

const BannerKelolosan = () => {
  return (
   <Box
    sx={{
      width:'100%',
      height:'100%',
      gap:'10px',
      padding:'100px',
      position:'relative'
    }}
   >

    <Box
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
      }}
    >
        <Box sx={{
          width:{md:'327px',lg:'327px',sm:'100%',xs:'100%'},
          height:{md:'89px',lg:'89px',sm:'60px',xs:'60px'},
          position:'relative',
          gap:'32px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'60px'
        }}>
        <Typography
          sx={{
            fontSize:{md:'48px',lg:'48px',sm:'30px',xs:'30px'},
            lineHeight:'52.8px',
            fontWeight:'700',
            color:'#2A4088',
           
          }}
        >
          Selamat Atas Kelolosan di PTN Impian
        </Typography>
        <span style={{
          display:'block',
          width:'100px',
          height:'4px',
          background:'#FFE528',
          position:'absolute',
          bottom:'0',
          
          }}></span>
        
     
      
     
        {/* <img src={rightArrow} alt="" /> */}
      </Box>
    </Box>

   </Box>
  )
}

export default BannerKelolosan