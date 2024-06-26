import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'


const KelolosanCardHome = ({data}) => {

 
  return (
   <Box
   
   className='card-kelolosan-banner'
   sx={{
    display:'flex',
    justifyContent:'center',
    width:{md:'329px',xs:'100%'},
    height:'412px',
    alignItems:'center',
    flexDirection:'column',
    padding:'32px 7px',
    borderRadius:'32px',
    gap:'40px',
    
   }}
   >
    <Box
    sx={{
      width:'201px',
      height:'201px'
    }}
    >
    <img src={data.image} alt=""
    style={{
      width:'201px',
      height:'201px'
    }}
    />
    </Box>

  
    <Box
      sx={{
        width:'100%',
        height:'100%',
        gap:'12px',
        
        boxSizing:'border-box',
      
      }}
    >
      <Typography
        sx={{
          fontSize:'24px',
          fontWeight:'600',
          lineHeight:'28.8px',
          textAlign:'center',
          color:'#F3FBFE',
          marginBottom:'30px'
        }}
      >
        {data.name}
      </Typography>

      <Box
        sx={{
          background:'#FFFFFF',
          padding:'8px',
          gap:'4px',
          borderRadius:'16px'
        }}
      >
        <Typography
          sx={{
            fontSize:'16px',
            lineHeight:'22.4px',
            textAlign:'center',
            fontWeight:'700',
            color:'#38B6FF'
          }}
        >
        {data.graduatedFrom}
        </Typography>

        <Typography
          sx={{
            fontSize:'16px',
            lineHeight:'22.4px',
            textAlign:'center',
            fontWeight:'700',
            color:'#38B6FF'
          }}
        >
      {data.acceptedSchool}
        </Typography>

      </Box>
      
    </Box>

    
   </Box>
  )
}

export default KelolosanCardHome