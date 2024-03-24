import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import pp from "../assets/img/image 44.png"
import pp2 from "../assets/img/image 44 (1).png"
import SectionTitle from './SectionTitle'
import bgCard from "../assets/imgSiswa/Card testimoni Siswa Lolos.png"
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
       Muhammad Alif
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
        Nyaman banget, kaka tentornya asik jadi pembelajaran juga ga ngebosenin, belajarnya serius tapi santai, lingkungannya juga penuh dengan energi positif jadi semangat always
      </Typography>
      </Box>
      

    </Box>
      
      <Box
      component="div"
      className='container-siswa'
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          
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
         <img src={pp} alt="" style={{borderRadius:'64px'}} width="100%" height="100%"/>
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
        gap:'22px',
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
        Surya Fatta Hadian
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
     SMAN Muhammadiyah 23 Jakarta
      </Typography>

      <Typography
        sx={{
          fontSize:'18px',
          fontWeight:'700',
          lineHeight:'25.2px',
          marginTop:'10px',
          color:'#38B6FF'
        }}
      >Sanitasi Lingkungan-Poltekes JKT II II
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
        {"dari segi tentornya enak bgt bgt bgt karena bisa berbaur sama murid muridnya, tentornya ga yg mengintimidasi alias chill🤓. kalo cara ngajar enak juga sih kita diajarin sampe paham terus sabar (ka alvin ngga guys karna dia kl dikatain ngatain balik😇). RANKING KU DARI 20 BESAR JADI 10 BESAR SELAMA BELAJAR DI SINTETA🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻. kalo kalian bingung mau kuliah kemana, tenang ada pa badru yg siap sedia mengarahkan. kalo kalian mumet sama mtk, ada ka arya siap bantuin jawab soal mtk yg diluar nalar itu. kalo kalian gangerti biologi, ada ka firyal siap ngejelasin berulang ulang. kalo kalian gasuka fisika, ada ka wau yg bikin fisika jadi gampang dan seru. kalo kalian pusing kimia, ada ka alvin sepuh kimia. jangan lupa log in sinteta guys😜😜😜😇😇🫰🏻🫰🏻🫰🏻".substring(0,150) + "..."}
      </Typography>
      </Box>
      

    </Box>
      
      <Box
       component="div"
       className='container-siswa'
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          
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
         <img src={pp2} alt="" style={{borderRadius:'64px'}} width="100%" height="100%"/>
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