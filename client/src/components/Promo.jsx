import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import leftArrow from '../assets/img/Next Button.png'
import rightArrow from '../assets/img/Next Button (1).png'
import ListProgram from './ListProgram'
import data from '../utils/data'
import Slider from "react-slick";

const Promo = () => {

  const settings = {
    arrow:true,
    dots: true,
    
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // Atur breakpoint untuk layar desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Atur breakpoint untuk layar tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Atur breakpoint untuk layar ponsel
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
   <Box 
    sx={{
      width:'100%',
      height:'100%',
      padding:{md:'120px 0px',xs:'120px 0px'},
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }}
   >
     
        <Box sx={{
          width:{md:'327px',lg:'327px',sm:'100%',xs:'100%'},
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
            fontSize:{md:'48px',lg:'48px',sm:'30px',xs:'30px'},
            lineHeight:'52.8px',
            fontWeight:'700',
            color:'#2A4088',
           
          }}
        >
          Promo Kami
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
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        paddingLeft:{md:'30px',xs:'0px'},
        overflow:'hidden',
        position:'relative'
      }}
      >

        <Box
        sx={{
          width:'100%',
          height:'100%',
          display:'flex',
          gap:'35px',
          overflow:'hidden',
          padding:'50px 0px',
          justifyContent:'center',
        
          flexDirection:'column',
          position:"relative",
          
        }}
        >

          <Slider {...settings} 
          style={{
            zIndex:'10',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'}}>
         
          {data.map((item)=>(
            <ListProgram  data={item}/>
          ))}

</Slider>

          <Box 
           sx={{
            position:'absolute',
            bottom:'0',
            width:'100%',
            zIndex:'0'
           }}
          >
          <svg width="100%" height="auto" viewBox="0 0 1238 183" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-1 0L50.6667 37.1667C102.333 74.3333 205.667 148.667 309 185.833C412.333 223 515.667 223 619 185.833C722.333 148.667 825.667 74.3333 929 37.1667C1032.33 0 1135.67 0 1187.33 0H1239V223H1187.33C1135.67 223 1032.33 223 929 223C825.667 223 722.333 223 619 223C515.667 223 412.333 223 309 223C205.667 223 102.333 223 50.6667 223H-1V0Z" fill="#2A4088" fill-opacity="0.45"/>
</svg>
          </Box>  
     
      
        </Box>
        

      </Box>

   </Box>
  )
}

export default Promo