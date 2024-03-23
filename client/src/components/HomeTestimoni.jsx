import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import pp from "../assets/img/image 44.png"
import pp2 from "../assets/img/image 44 (1).png"
import SectionTitle from './SectionTitle'

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
       <SectionTitle title="Testimoni Kami"/>

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
            <Box
    sx={{
      width:{md:'604px',xs:'100%'},
      height:{md:'318px',xs:'100%'},
      borderRadius:'16px',
      border:'2px solid #E5EAF1',
      display:'flex',
      flexDirection:{md:'row',xs:'column'}
    }}
  >
    <Box
      sx={{
        width:'100%',
        gap:'24px',
        padding:'22px',
        order:{md:'0',xs:'1'}
      }}
    >
      <Typography
        sx={{
          fontSize:'24px',
          fontWeight:'600',
          lineHeight:'28.8px',
        }}
      >
        Bayu Saputra
      </Typography>

      <Typography
        sx={{
          fontSize:'18px',
          fontWeight:'700',
          lineHeight:'25.2px',
          marginTop:'10px',
          color:'#38B6FF'
        }}
      >
       SMAN 114 Jakarta
      </Typography>

      <Typography
        sx={{
          fontSize:'18px',
          fontWeight:'700',
          lineHeight:'25.2px',
          marginTop:'10px',
          color:'#38B6FF'
        }}
      >Farmasi - Poltekes JKT II 
      </Typography>
      <Box
        sx={{
          
          marginTop:'30px'
        }}
      >
      <Typography
        sx={{
          fontSize:'16px',
          fontWeight:'400',
          lineHeight:'22.4px',
          marginTop:'10px',
          color:'#4D4D4D'
        }}
      >
        "Kesan selama belajar di Sinteta itu pengajarnya seru, tempatnya nyaman, materinya mudah dipahami, dan latihan soalnya berbobot."
      </Typography>
      </Box>
      

    </Box>
      
      <Box
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          background:'linear-gradient(#38B6FF,#A1C6DB)',
          width:'100%',
          order:{md:'0',xs:'0'}
        }}
      >
      <Box
        sx={{
          width:'201px',
          height:'201px'
        }}
      >
         <img src={pp} alt="" width="100%" height="100%"/>
      </Box>
       
      </Box>

  </Box>

  <Box
    sx={{
      width:{md:'604px',xs:'100%'},
      height:{md:'318px',xs:'100%'},
      borderRadius:'16px',
      border:'2px solid #E5EAF1',
      display:'flex',
      flexDirection:{md:'row',xs:'column'}
    }}
  >
    <Box
      sx={{
        width:'100%',
        gap:'24px',
        padding:'22px',
        order:{md:'0',xs:'1'}
      }}
    >
      <Typography
        sx={{
          fontSize:'24px',
          fontWeight:'600',
          lineHeight:'28.8px',
        }}
      >
        Bayu Saputra
      </Typography>

      <Typography
        sx={{
          fontSize:'18px',
          fontWeight:'700',
          lineHeight:'25.2px',
          marginTop:'10px',
          color:'#38B6FF'
        }}
      >
       SMAN 114 Jakarta
      </Typography>

      <Typography
        sx={{
          fontSize:'18px',
          fontWeight:'700',
          lineHeight:'25.2px',
          marginTop:'10px',
          color:'#38B6FF'
        }}
      >Farmasi - Poltekes JKT II 
      </Typography>
      <Box
        sx={{
          
          marginTop:'30px'
        }}
      >
      <Typography
        sx={{
          fontSize:'16px',
          fontWeight:'400',
          lineHeight:'22.4px',
          marginTop:'10px',
          color:'#4D4D4D'
        }}
      >
        "Kesan selama belajar di Sinteta itu pengajarnya seru, tempatnya nyaman, materinya mudah dipahami, dan latihan soalnya berbobot."
      </Typography>
      </Box>
      

    </Box>
      
      <Box
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          background:'linear-gradient(#38B6FF,#A1C6DB)',
          width:'100%',
          order:{md:'0',xs:'0'}
        }}
      >
      <Box
        sx={{
          width:'201px',
          height:'201px'
        }}
      >
         <img src={pp2} alt="" width="100%" height="100%"/>
      </Box>
       
      </Box>

  </Box>
          

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