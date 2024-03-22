import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'




const ListProgram = ({data}) => {
  const maxChar = 200;
  return (
 
    <Card sx={{ width:'390px',height:'100%',  zIndex:'10' ,flexShrink:'0' }}>
    <CardMedia
    
      component="img"
      alt="green iguana"
      height="196"
      image={data.img}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {data.teks1}
      </Typography>
      <Typography 
        sx={{
            fontWeight:'600',
            fontSize:'24px',
            lineHeight:'28.8px',
            textDecoration:'line-through',
            color:'#2A4088A6'
        }}
      >
       {data.teks2}
      </Typography>
      <Typography 
        sx={{
            fontWeight:'600',
            fontSize:'18px',
            lineHeight:'25.2px',
            color:'#2A4088'
        }}
      >
     {data.teks3}
      </Typography>
      
      <Box
        sx={{
          width:'342px',
          heigh:'88px'
        }}
      >
          <Typography 
      sx={{
        fontWeight:'400',
        fontSize:'16px',
        lineHeight:'22.4px',
        color:'#4D4D4D',
       
      }}
      >
      {data.teks4.substring(0,maxChar)+'...'}
      </Typography>
      </Box>
      
      <Typography 
        sx={{
            fontWeight:'600',
            fontSize:'16px',
            lineHeight:'22.4px',
            color:'#E4C145'
        }}
      >
      {data.teks5}
      </Typography>
    </CardContent>
   
  </Card>
  )
}

export default ListProgram