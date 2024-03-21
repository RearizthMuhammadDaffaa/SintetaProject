import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import leftArrow from '../assets/img/Next Button.png'
import rightArrow from '../assets/img/Next Button (1).png'
import ListProgram from './ListProgram'
import data from '../utils/data'
import Slider from "react-slick";

const Program = () => {

  const settings = {
    arrow:false,
    dots: true,
    
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };


  return (
   <Box 
    sx={{
      width:'100%',
      height:'100%',
      padding:{md:'120px 29px',lg:'120px 29px',sm:'120px 0px',xs:'120px 0px'},
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }}
   >
      <Box>
        <Box sx={{
          width:{md:'327px',lg:'327px',sm:'100%',xs:'100%'},
          height:{md:'89px',lg:'89px',sm:'60px',xs:'60px'},
          position:'relative',
          gap:'32px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
          
        }}>
        <Typography
          sx={{
            fontSize:{md:'48px',lg:'48px',sm:'30px',xs:'30px'},
            lineHeight:'52.8px',
            fontWeight:'700',
            color:'#2A4088',
           
          }}
        >
          Program Kami
        </Typography>
        <span style={{
          display:'block',
          width:'100px',
          height:'4px',
          background:'#FFE528',
          position:'absolute',
          bottom:'0',
          
          }}></span>
        </Box>
      </Box>
      
      <Box
        sx={{
          width:'100%',
          height:'512px',
          gap:'35px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        {/* <img src={leftArrow} alt="" /> */}
        <Box
        sx={{
          width:'100%',
          display:'flex',
          gap:'32px',
          overflowX:'hidden',
          padding:'15px 30px',
          flexDirection:'column'
        }}
        >

          {/* <Box sx={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            gap:'32px'
          }}> */}
            <Slider {...settings}>
            {data.map((item,i)=>(
               <Card key={i} sx={{ width:'390px',height:'100%' ,flexShrink:'0', margin: '0 10px' }}>
               <CardMedia
                 component="img"
                 alt="green iguana"
                 height="196"
                 image="/static/images/cards/contemplative-reptile.jpg"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   {item.teks1}
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
                  {item.teks2}
                 </Typography>
                 <Typography 
                   sx={{
                       fontWeight:'600',
                       fontSize:'18px',
                       lineHeight:'25.2px',
                       color:'#2A4088'
                   }}
                 >
                {item.teks3}
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
                 {item.teks4.substring(0,200)+'...'}
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
                 {item.teks5}
                 </Typography>
               </CardContent>
              
             </Card>
            ))}
            </Slider>
            

          {/* </Box> */}
         
       
          {/* {data.map((item,i)=>(
              <ListProgram key={i} data={item}/>
          ))} */}
       
          
        
        </Box>
        {/* <img src={rightArrow} alt="" /> */}
      </Box>

   </Box>
  )
}

export default Program