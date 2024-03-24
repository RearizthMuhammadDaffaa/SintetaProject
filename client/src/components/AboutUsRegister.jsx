import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/img/iPhone 14 Pro Space Black Mockup label.png'

const AboutUsRegister = () => {
  return (
   <Box
    sx={{
      width:'100%',
      height:'100%',
      padding:'120px 0px',
      gap:'10px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:{md:'row',xs:'column'},
      background:'#FFFFFF'
    }}
   >

    <Box
      sx={{
        width:{md:'40%',xs:'100%'},
        height:'455px',
        gap:'48px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:{md:'normal',xs:'center'},
        order:{md:'0',xs:'1'}
      }}
    >
      <Typography sx={{textAlign:{md:'justify',xs:'center'}}}>
      "Yuk, jadilah bagian dari perjalanan suksesmu bersama Bimbel Sinteta! Dapatkan bimbingan belajar terbaik yang akan membantu kamu mencapai prestasi tertinggi. Ayo daftar sekarang dan bersiaplah untuk meraih kesuksesan bersama kami!"
      </Typography>

      <Button 
      sx={{
        width:'242px',
        borderRadius:'12px',
        background:'#38B6FF'
      }}
      variant="contained">Daftar Sekarang</Button>
    </Box>

    <Box
      sx={{
        width:{md:'44%',xs:'100%'},
        height:'100%',
  
        marginLeft:{md:'60px',xs:'0px'},
        background:'linear-gradient(#38B6FF,#A1C6DB)',
        borderRadius:'40px 40px 0px 0px'
      }}
    >
      <img src={logo} alt="" style={{ display:'block', margin:'0 auto'}} />

    </Box>

   </Box>
  )
}

export default AboutUsRegister