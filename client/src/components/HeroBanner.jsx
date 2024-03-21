import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const HeroBanner = () => {

  const StyledButton = styled(Button)`
    &:hover {
      background-color: none;
    }
`;
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
      background:'#2A4088',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:'20px'
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
        Selamat Datang. Sinteta Is Here!
      </Typography>
      <Typography 
       sx={{
        fontSize:{lg:'50px',md:'50px',sm:'20px',xs:'20px'},
        lineHeight:{lg:'66px',md:'66px',sm:'30px',xs:'30px'}
      }}
      fontWeight='800'
     
      align='center'
      color='#FFE528'>
       Tradisi Lolos PTN 100%
      </Typography>
      <Box
        sx={{
          width:{md:'700px',lg:'700px',sm:'100%',xs:'100%'}
        }}
      >
      <Typography
      
      lineHeight='28px'
      fontWeight='400'
      color='#FFFFFF'
      align='center'
      sx={{
        marginTop:'20px',
        fontSize:{lg:'20px',md:'20px',sm:'12px',xs:'12px'}
      }}
      >
      Transformasikan potensimu menjadi prestasi unggul bersama Bimbel SINTETA, pilihan terbaik untuk mempersiapkan dirimu menghadapi tantangan seleksi masuk ke Perguruan Tinggi Negeri.
      </Typography>
      </Box>

      <StyledButton  variant="contained" 
        sx={{
          background:'#FFF',
          color:'#000',
          marginTop:'15px',
          "&.MuiButtonBase-root:hover": {
            bgcolor: "#FFF"
          }
        }}
      >Hubungi Kami</StyledButton>
     
    </Box>
 
   

   </Container>
  )
}

export default HeroBanner