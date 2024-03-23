import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import leftArrow from '../assets/img/Next Button.png'
import rightArrow from '../assets/img/Next Button (1).png'
import ListProgram from './ListProgram'
import data from '../utils/data'
import Slider from "react-slick";
import { dataProgram } from '../utils/data'
import SectionTitle from './SectionTitle'

const Program = () => {

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
      padding:{md:'120px 0',xs:'120px 0px'},
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }}
   >
      
        {/* <Box sx={{
          width:{md:'327px',lg:'327px',sm:'100%',xs:'100%'},
          height:{md:'89px',lg:'89px',sm:'60px',xs:'60px'},
          position:'relative',
          gap:'32px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'50px'
          
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
        </Box> */}

        <SectionTitle title="Program Kami"/>
     
      
      <Box
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
       
        overflow:'hidden',
       
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
         
          {dataProgram.map((item)=>(
             <Card sx={{ width:'290px',height:'100%',  zIndex:'10' ,flexShrink:'0' }}>
             <CardMedia
             
               component="img"
            
               height="196"
               image={item.logo}
             />
             <CardContent>
               <Typography sx={{
                fontWeight:'600',
                fontSize:'20px',
                lineHeight:'24px',
                color:"#202020"
               }}>
                 {item.teks1}
               </Typography>
               <Typography 
                 sx={{
                     fontWeight:'600',
                     fontSize:'24px',
                     lineHeight:'28.8px',
                    padding:'15px 0px',
                     color:'#61B3E3'
                 }}
               >
                {item.teks2}
               </Typography>
               <Typography 
                 sx={{
                     fontWeight:'400',
                     fontSize:'16px',
                     lineHeight:'22.2px',
                     color:'#4D4D4D'
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
                
               </Box>
               
             
             </CardContent>
            
           </Card>
          ))}

</Slider>

          
     
      
        </Box>
        

      </Box>

   </Box>
  )
}

export default Program