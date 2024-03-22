import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import img from "../assets/img/Gambar (2).png"
import img2 from "../assets/img/Gambar (3).png"
import img3 from "../assets/img/Gambar (4).png"

const ArtikelHome = () => {
  return (
    <Box 
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        padding:'120px 0px',
        position:"relative"
      }}
    >
        <Box sx={{
          width:{md:'100%',lg:'100%',sm:'100%',xs:'100%'},
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
          Artikel
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

        <Box
          sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:'50px'
          }}
        >
          <Box
            sx={{
              maxWidth:'100%'
            }}
          >
          <Typography
            sx={{
              fontWeight:'600',
              fontSize:'24px',
              lineHeight:'28.8px',
              color:'#202020'
            }}
          >
          Artikel terbaru
          </Typography>
          <Typography
            sx={{
              fontWeight:'400',
              fontSize:'15px',
              lineHeight:'22.4px',
              color:'#797979'
            }}
          >
         Temukan berita menarik terkait perkembangan terbaru tenatng pendidikan di indpnesia.
          </Typography>
          </Box>
          <Box
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              gap:'10px',
              marginRight:'30px'
            }}
          >
          <Typography
            sx={{
              fontWeight:'400',
              fontSize:'16px',
              lineHeight:'22.4px',
              color:'#61B3E3'
            }}
          >
        Lihat Semua 

       
          </Typography>
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 16.5C24 16.8101 23.8899 17.1098 23.6952 17.3372L18.1079 24.1486C17.9048 24.3863 17.6847 24.5 17.4476 24.5C16.9228 24.5 16.5418 24.0349 16.5418 23.4147C16.5418 23.0943 16.6434 22.8152 16.8127 22.6189L18.709 20.2726L21.2063 17.4819L19.2339 17.6266H8.93968C8.38095 17.6266 8 17.1615 8 16.5C8 15.8282 8.38095 15.3734 8.93968 15.3734H19.2339L21.1979 15.5181L18.709 12.7274L16.8127 10.3811C16.6434 10.1744 16.5418 9.89535 16.5418 9.57494C16.5418 8.95478 16.9228 8.5 17.4476 8.5C17.6847 8.5 17.9132 8.60336 18.1249 8.86176L23.6952 15.6628C23.8899 15.8798 24 16.1899 24 16.5Z" fill="#61B3E3"/>
</svg>
          </Box>
         

        </Box>

        <Box
          sx={{
            width:'100%',
            heigt:'100%',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            gap:"10px",
            flexDirection:{md:'row',xs:'column'},
            zIndex:'4'
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography 
          sx={{
            fontSize:'20px',
            fontWeight:'600',
            lineHeight:'28px',
            color:'#202020'
          }}
        component="div">
        Kebijakan Kurikulum 2024: Transformasi Menuju Pendidikan Berkualitas
        </Typography>
        
      </CardContent>
      
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img2}
        title="green iguana"
      />
      <CardContent>
        <Typography 
          sx={{
            fontSize:'20px',
            fontWeight:'600',
            lineHeight:'28px',
            color:'#202020'
          }}
        component="div">
        Kebijakan Kurikulum 2024: Transformasi Menuju Pendidikan Berkualitas
        </Typography>
        
      </CardContent>
      
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img3}
        title="green iguana"
      />
      <CardContent>
        <Typography 
          sx={{
            fontSize:'20px',
            fontWeight:'600',
            lineHeight:'28px',
            color:'#202020'
          }}
        component="div">
        Kebijakan Kurikulum 2024: Transformasi Menuju Pendidikan Berkualitas
        </Typography>
        
      </CardContent>
      
    </Card>

        </Box>
        <Box sx={{
          width:'100%',
          height:'100%',
          position:"absolute",
          bottom:{md:'-100px',xs:'-500px'},
          zIndex:'0'
        }}>
          
        <svg width="100%" height="auto" viewBox="0 0 1440 389" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.65" fill-rule="evenodd" clip-rule="evenodd" d="M0 129.667H60C120 129.667 240 129.667 360 151.278C480 172.889 600 216.111 720 244.926C840 273.741 960 288.148 1080 244.926C1200 201.704 1320 100.852 1380 50.4259L1440 0V389H1380C1320 389 1200 389 1080 389C960 389 840 389 720 389C600 389 480 389 360 389C240 389 120 389 60 389H0V129.667Z" fill="url(#paint0_linear_503_2176)"/>
        <defs>
        <linearGradient id="paint0_linear_503_2176" x1="720" y1="0" x2="720" y2="389" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7FB0CD"/>
        <stop offset="1" stop-color="#9AC6E0"/>
        </linearGradient>
        </defs>
        </svg>

        </Box>

    </Box>
  )
}

export default ArtikelHome