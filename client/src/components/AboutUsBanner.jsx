import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const AboutUsBanner = () => {

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
    padding:{md:'40px 100px',xs:'40px 0px'},
    height:'630px',
    boxSizing:'border-box'
  }}
   >
     
    <Box 
    sx={{
      width:'100%',
      height:"100%",
      background:'linear-gradient(#38B6FF,#A1C6DB)',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:'20px'
    }}
    >
      <Typography 
     
      sx={{
        fontSize:{lg:'50px',md:'50px',sm:'30px',xs:'30px'}
      }}
      fontWeight='800'
      lineHeight='66px'
      align='center'
      color='#FFE528'>
       "Sinergi,Tekuni & Terarah."
      </Typography>
      <Typography 
       sx={{
        fontFamily:'Rhesmanisa',
        fontSize:{lg:'50px',md:'50px',sm:'30px',xs:'30px'},
        lineHeight:{lg:'66px',md:'66px',sm:'30px',xs:'30px'}
      }}
      fontWeight='400'
     
      align='center'
      color='#FFFFFF'>
      Better Eduaction for Better Future
      </Typography>
     
     
     
    </Box>
 
   

   </Container>
  )
}

export default AboutUsBanner