import { Box, Typography } from '@mui/material'
import React from 'react'
import BuktiKelolosan from "../assets/img/Gambar (1).png"

const BannerKelolosan = () => {
  return (
   <Box
    sx={{
      width:'100%',
      height:'100%',
      gap:'10px',
      padding:'100px 0px',
      position:'relative',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      background:'#7FB0CD40'
    }}
   >

    <Box
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        flexDirection:'column'
      }}
    >
        <Box sx={{
          width:{md:'900px',lg:'900px',sm:'100%',xs:'100%'},
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
            fontSize:{md:'48px',lg:'48px',sm:'20px',xs:'20px'},
            lineHeight:'52.8px',
            fontWeight:'700',
            color:'#61B3E3',
           
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
      <Box
      sx={{
        width:{md:'100%',xs:'100%'},
        height:{md:'500px',xs:'100%'},

        display:'flex',
        justifyContent:'center'
      }}
      >
        <img src={BuktiKelolosan} alt="" style={{ maxWidth: '100%', height: 'auto' }}/>

      </Box>
    </Box>

   </Box>
  )
}

export default BannerKelolosan