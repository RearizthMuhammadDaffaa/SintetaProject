import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import BuktiKelolosan from "../assets/img/Gambar (1).png"
import SectionTitle from './SectionTitle'
import KelolosanCardHome from './KelolosanCardHome'
import Slider from 'react-slick'
import nextButton from "../assets/img/Next Button.png"
import { data_Siswa } from '../utils/dataSiswa'
import { Link } from 'react-router-dom'



const BannerKelolosan = () => {


  const settings = {  
    dots: true,
    arrow:false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging:dots =>(
      <div
        style={{
          width:'25px',
          height:'25px',
          borderRadius:'100%',
          background:'#D9D9D9',
          marginTop:'10px'
        }}
      >
       
      </div>
    ),
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
      width: '100%', 
      height:'100%',
      gap:'10px',
      padding:'100px 0px',
      position:'relative',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      background:'#7FB0CD40'
    }}
   >

    <Box
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        flexDirection:'column'
      }}
    >
        {/* <Box sx={{
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
            color:'#61B3E3',
           
          }}
        >
          Selamat Atas Kelolosan di PTN Impian
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
      <SectionTitle title="Selamat Atas Kelolosan di PTN Impian" />
      <Box
      sx={{
        width:{md:'100%',xs:'100%'},
        height:{md:'500px',xs:'100%'},

        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        gap:'30px'
      }}
      >
        {/* <img src={BuktiKelolosan} alt="" style={{ maxWidth: '100%', height: 'auto' }}/> */}
        <Box
        sx={{
          width:{md:'80%',xs:'100%'},
          height:{md:'500px',xs:'100%'},
        
          display:'flex',
          justifyContent:'center',
          flexDirection:'row',
          gap:'30px'
        }}
        >
           <Slider {...settings}
          style={{
            width:'100%',
          }}
        >
          {data_Siswa.map((item)=>(
              <KelolosanCardHome data={item}/>
          ))}
        
        
       
        </Slider>
        </Box>
       
        

      </Box>
    </Box>
    <Link
      to="/kelolosan"
    >
    <Button sx={{
        gap:'10px',
        marginBottom:'100px',
        background:'#38B6FF',
        marginTop:'50px'
       }} variant='contained'>
        
        Selengkapnya
       

        </Button>
    </Link>
   
   </Box>
  )
}

export default BannerKelolosan