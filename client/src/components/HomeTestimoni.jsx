import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import pp from "../assets/img/image 44.png"
import pp2 from "../assets/img/image 44 (1).png"

const HomeTestimoni = () => {
  return (
    <Box
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'70px',
        flexDirection:'column',
        marginBottom:'100px'

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
          Testimoni Kami
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
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            gap:'30px',
            flexDirection:{md:'row',xs:'column'}
          }}
        >
            <Card sx={{ width:'100%',height:'100%', display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' ,gap:'20px'}}>
          <Typography component="div"
            sx={{
              fontSize:'24px',
              fontWeight:'600',
              lineHeight:'28.8px'
            }}
          >
          Bayu Saputra
          </Typography>
          <Typography 
            sx={{
              fontSize:'18px',
              fontWeight:'500',
              lineHeight:'25.2px',
              color:"#61B3E3"
            }}
          component="div">
           Pelajar
          </Typography>

            <Box
              sx={{
                width:{md:'50%',xs:'normal'}
              }}
            >
                <Typography 
            sx={{
              fontSize:'15px',
              fontWeight:'400',
              lineHeight:'22.4px',
              color:"#4D4D4D"
            }}
          component="div">
           "Kesan selama belajar di Sinteta itu pengajarnya seru, tempatnya nyaman, materinya mudah dipahami, dan latihan soalnya berbobot."
          </Typography>
            </Box>
          
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
      <Box

        sx={{
          width:'100%',
          height:'100%'
        }}
      >
        <CardMedia
        component="img"
        sx={{ maxWidth: "100%" ,height:'318px' }}
        image={pp}
        alt="Live from space album cover"
      />
      </Box>
      
    </Card>

    <Card sx={{ width:'100%',height:'100%', display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' ,gap:'20px'}}>
          <Typography component="div"
            sx={{
              fontSize:'24px',
              fontWeight:'600',
              lineHeight:'28.8px'
            }}
          >
          Muhammad Alif
          </Typography>
          <Typography 
            sx={{
              fontSize:'18px',
              fontWeight:'500',
              lineHeight:'25.2px',
              color:"#61B3E3"
            }}
          component="div">
           Pelajar
          </Typography>

            <Box
              sx={{
                width:{md:'50%',xs:'normal'}
              }}
            >
                <Typography 
            sx={{
              fontSize:'15px',
              fontWeight:'400',
              lineHeight:'22.4px',
              color:"#4D4D4D"
            }}
          component="div">
          "Di Sinteta selain belajar dari Guru2 Sinteta, saya juga belajar banyak dari teman2. Melihat kesungguhan mereka dalam belajar membuat semangat belajar saya tumbuh. Tentunya didukung juga dengan pengajar dan staff yang luar biasa. "

          </Typography>
            </Box>
          
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
      <Box

        sx={{
          width:'100%',
          height:'100%'
        }}
      >
        <CardMedia
        component="img"
        sx={{ maxWidth: {md:"100%",xs:'300px'} ,height:'318px' }}
        image={pp2}
        alt="Live from space album cover"
      />
      </Box>
      
    </Card>
          

        </Box>
        <Button variant='contained' sx={{
          background:'#61B3E3'
        }}>
          Lihat Semua
        </Button>
    </Box>
  )
}

export default HomeTestimoni