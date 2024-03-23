import { Box, Typography } from '@mui/material'
import React from 'react'

const SectionTitle = ({title,color}) => {
  return (
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
        color:!color? '#61B3E3' : color,
       
      }}
    >
     {title}
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
  )
}

export default SectionTitle