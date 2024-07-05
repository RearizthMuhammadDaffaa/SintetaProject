import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import leftArrow from '../assets/img/Next Button.png'
import rightArrow from '../assets/img/Next Button (1).png'
import ListProgram from './ListProgram'
import data from '../utils/data'
import Slider from "react-slick";
import SectionTitle from './SectionTitle'
import promoImg from "../assets/PromoImg/Gambar (16).png"
import promoImg1 from "../assets/PromoImg/Gambar (17).png"
import zIndex from '@mui/material/styles/zIndex'
import axios from 'axios'

const Promo = () => {

  const [data,setData] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL
  const [image,setImage] = useState('');

  const fetchImage = async (imageUrl) => {
    try {
      const res = await fetch(imageUrl);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      return imageObjectURL;
    } catch (error) {
      console.error("Error fetching image:", error);
      return null;
    }
  };
  const getData = async () => {
   try {
     const response = await axios.get(`${baseUrl}promo`);
     const data = response.data.data
 
     // Fetch images for all facilities
     const updatedData = await Promise.all(
       data.map(async (item) => {
         const imageUrl = item.picture;
         const image = await fetchImage(imageUrl);
         return { ...item, image };
       })
     );
 
     setData(updatedData);
     console.log(data);
     
   } catch (error) {
     console.error("Error fetching facilities:", error);
   }
 };

 
 useEffect(()=>{
  getData();
  fetchImage();
},[])

const formatDate = (dateString) => {
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

  const settings = {
    arrow:true,
    dots: true,
    
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024, // Atur breakpoint untuk layar desktop
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
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
      padding:{md:'120px 0px',xs:'120px 0px'},
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
        
     
      
     
        
      </Box> */}

      <SectionTitle title="Promo Kami"/>
    
  
      <Box
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        paddingLeft:{md:'30px',xs:'0px'},
        boxSizing:'border-box',
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



        <Box
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:{md:'row',xs:'column'},
            gap:'35px'
          }}
        >
          <Slider
     style={{
      width:'100%',
      zIndex:'1',
      margin: '0 auto'
    }}
    {...settings}
    >
   
   {data.map((item,index)=>(
    <div
    key={data.id}
    style={{
      padding:'0px 10px'
    }}
   >
    <Card sx={{ width: "531.5px",height:'371px',zIndex:'5'  }}>
      <CardMedia
        sx={{ height: "196px" }}
        image={item.image}
        title="promo 1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {item.description}
        </Typography>

     
      </CardContent>
     
      <Typography 
        sx={{
            fontWeight:'600',
            fontSize:'16px',
            lineHeight:'22.4px',
            color:'#E4C145',
            marginTop:'33px',
            marginLeft:'15px'
        }}
      >
      Terakhir sampai {formatDate(item.expired)}
      </Typography>
    </Card>
   </div>
   ))}
   
         
    {/* <div
      style={{
        padding:'0px 10px'
      }}
    >
      <Card sx={{ width: "531.5px",height:'371px',zIndex:'5'  }}>
      <CardMedia
        sx={{ height: "196px" }}
        image={promoImg1}
        title="promo 2"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Promo Double Track
        </Typography>
        <Typography variant="body2" color="text.secondary">
       Siswa/i melanjutkan Program untuk Putra/i menargetkan nilai raport
       dari kelas 10 hingga kelas 12
        </Typography>

     
      </CardContent>
     
      <Typography 
        sx={{
            fontWeight:'600',
            fontSize:'16px',
            lineHeight:'22.4px',
            color:'#E4C145',
            marginTop:'33px',
            marginLeft:'15px'
        }}
      >
      Terakhir sampai 4 April 2024
      </Typography>
    </Card>
    </div> */}

    
    </Slider>

       
        </Box>

      


          <Box 
           sx={{
            position:'absolute',
            bottom:'0',
            width:'100%',
            zIndex:'0'
           }}
          >
         <svg width="1440" height="264" viewBox="0 0 1440 264" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 156L60 150C120 144 240 132 360 96C480 60 600 0 720 0C840 0 960 60 1080 96C1200 132 1320 144 1380 150L1440 156V264H1380C1320 264 1200 264 1080 264C960 264 840 264 720 264C600 264 480 264 360 264C240 264 120 264 60 264H0V156Z" fill="url(#paint0_linear_626_1844)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 192L60 174C120 156 240 120 360 132C480 144 600 204 720 198C840 192 960 120 1080 78C1200 36 1320 24 1380 18L1440 12V264H1380C1320 264 1200 264 1080 264C960 264 840 264 720 264C600 264 480 264 360 264C240 264 120 264 60 264H0V192Z" fill="url(#paint1_linear_626_1844)"/>
        <defs>
        <linearGradient id="paint0_linear_626_1844" x1="720" y1="0" x2="720" y2="264" gradientUnits="userSpaceOnUse">
        <stop stop-color="#38B6FF"/>
        <stop offset="1" stop-color="#A1C6DB"/>
        </linearGradient>
        <linearGradient id="paint1_linear_626_1844" x1="720" y1="12" x2="720" y2="264" gradientUnits="userSpaceOnUse">
        <stop stop-color="#38B6FF"/>
        <stop offset="1" stop-color="#A1C6DB"/>
        </linearGradient>
        </defs>
        </svg>

          </Box>  
     
      
        </Box>
        

      </Box>

   </Box>
  )
}

export default Promo