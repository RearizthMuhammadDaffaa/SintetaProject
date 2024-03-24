import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import leftArrow from '../assets/img/Next Button.png'
import rightArrow from '../assets/img/Next Button (1).png'
import ListProgram from './ListProgram'
import data from '../utils/data'
import Slider from "react-slick";
import { dataProgram } from '../utils/data'
import SectionTitle from './SectionTitle'
import pp from '../assets/imgProgram/Mask group (11).png'

const Program = () => {

  const settings = {
    arrow:true,
    dots: true,
    
    speed: 700,
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
          slidesToShow: 1,
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
       
       
       
      }}
      >

        <Box
        sx={{
          width:'100%',
          height:'100%',
          display:'flex',
          gap:'35px',
         
          
          justifyContent:'space-between',
          alignItems:'center',
          flexDirection:'column',
          position:"relative",
          
        }}
        >

<Slider
                style={{
                  width:'100%',
                  
                }}
               {...settings}>
            {dataProgram.map((item)=>(
               <Box
               sx={{
                 width:'390px',
                 height:'100%',
                 border:"1px solid #E5EAF1",
                 display:'flex',
                 justifyContent:'center',
                 alignItems:'center',
                 flexDirection:'column',
                
               }}
             >
               <Box
                 sx={{
                   background:'linear-gradient(#38B6FF,#A1C6DB)',
                   width:'100%',
                   height:'100%',
                   display:'flex',
                   justifyContent:'center',
                   borderRadius:'16px 16px 0px 0px',
                   alignItems:'center'
                 }}
               >
     
                 <img src={item.logo} alt="" width="100%"/>
     
                 {/* <Box 
                   sx={{
                     width:'167px',
                     height:'167px',
                     borderRadius:'100%',
                     background:'#FFFFFF'
                   }}
                 >
                 <img src="" alt="" />
                 </Box> */}
               
     
               </Box>
               <Box
               sx={{
                 background:'#ffffff',
                 display:'flex',
                 flexDirection:'column',
                 alignSelf:'flex-start',
                 marginTop:'10px',
                 marginLeft:'5px',
                 gap:'21px',
                 padding:'20px 0'
               }}
             >
               <Typography
                 sx={{
                   fontSize:'24px',
                   lineHeight:'28.8px',
                   color:'#202020',
                   fontWeight:'600',
                  
                 }}
               >
               {item.teks1}
               </Typography>
               <Typography
                 sx={{
                   fontSize:'24px',
                   lineHeight:'28.8px',
                   color:'#61B3E3',
                   fontWeight:'600',
                  
                 }}
               >
               {item.teks2}
               </Typography>
     
               <Typography
                 sx={{
                   fontSize:'16px',
                   lineHeight:'22.4px',
                   color:'#4D4D4D',
                   fontWeight:'400',
                   
                 }}
               >
               {item.teks3}
               </Typography>
             </Box>
             </Box>
            ))}
          </Slider>

          {/* <Box
          sx={{
            display:'flex',
            width:'100%',
            alignItems:'center',
             justifyContent:'space-between',
             margin:'0 10px'
          }}
          >
             

          </Box> */}

       
       

       

     
          
     
      
        </Box>
        

      </Box>

   </Box>
  )
}

export default Program