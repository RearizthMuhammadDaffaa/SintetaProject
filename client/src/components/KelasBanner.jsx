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
      background:"linear-gradient(#2A4088,#7E8FC6)",
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
        background:'#2A4088',
        color:'#FFFFFF',
        marginTop:'30px',
        cursor:'pointer',
        zIndex:'100000'
      }}>
        Hubungi kami
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M-1 0L50.6667 37.1667C102.333 74.3333 205.667 148.667 309 185.833C412.333 223 515.667 223 619 185.833C722.333 148.667 825.667 74.3333 929 37.1667C1032.33 0 1135.67 0 1187.33 0H1239V223H1187.33C1135.67 223 1032.33 223 929 223C825.667 223 722.333 223 619 223C515.667 223 412.333 223 309 223C205.667 223 102.333 223 50.6667 223H-1V0Z" fill="#2A4088" fill-opacity="0.45"/>
</svg>
      </Box>
    </Box>

   </Box>
  )
}

export default KelasBanner