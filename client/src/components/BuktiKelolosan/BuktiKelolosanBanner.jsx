import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const BuktiKelolosanBanner = () => {
  return (
    <Container
    sx={{
      marginTop:'100px',
      width:'100%',
      padding:{md:'40px 100px',lg:'40px 100px',sm:'40px 0px',xs:'40px 0px'},
      height:'630px',
    }}
     >
       
      <Box 
      sx={{
        width:'100%',
        height:{md:'100%',lg:'100%',xs:'70%',sm:'70%'},
        background:'linear-gradient(#38B6FF,#A1C6DB)',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'20px',
        gap:'20px'
      }}
      >
        <Typography 
       
        sx={{
          fontSize:{lg:'50px',md:'50px',sm:'20px',xs:'20px'}
        }}
        fontWeight='800'
        lineHeight='66px'
        align='center'
        color='#FFFFFF'>
        Bergabunglah dengan <span style={{color:'#FFE528'}}>Bimbel Sinteta</span>
        </Typography>
        <Typography 
         sx={{
          fontFamily:'Pompiere',
          fontSize:'20px',
          lineHeight:'28px'
        }}
        fontWeight='400'
       
        align='center'
        color='#FFFFFF'>
       dan menjadi bagian dari komunitas siswa yang berprestasi dan sukses!
        </Typography>
        <Box
          sx={{
            width:{md:'700px',lg:'700px',sm:'100%',xs:'100%'}
          }}
        >
        
        </Box>
  
       
       
      </Box>
   
     
  
     </Container>
  )
}

export default BuktiKelolosanBanner