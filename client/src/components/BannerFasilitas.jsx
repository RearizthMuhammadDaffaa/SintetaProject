import { Box, Typography } from '@mui/material'
import React from 'react'
import Icon1 from "../assets/img/bintang.png"
import Icon2 from "../assets/img/Icon (1).png"
import Icon3 from "../assets/img/buku.png"


const BannerFasilitas = () => {
  return (
    <Box 
    sx={{
      width:'100%',
      height:'100%',
      padding:'120px 0px',
      gap:'10px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      background:'#9AC6E0',
      flexDirection:'column',
      marginBottom:'500px'
    }}>

<Box sx={{
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
        </Box>

        <Box
          sx={{
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:{md:"row",xs:'column'},
            gap:{md:'0',xs:'30px'}
          }}
        >
          <Box
          sx={{
            width:'100%',
            height:'100%',
            gap:'43px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
          }}
          >
            <Box
            sx={{
              width:'100px',
              height:'100px',
              borderRadius:'100%',
              background:'#E5EAF1',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}
            >
              <img src={Icon1} alt="" />


            </Box>
            <Typography 
              sx={{
                fontSize:'24px',
                fontWeight:'600',
                lineHeight:'28.8px',
                color:'#FFFFFF'
              }}
            >
            Intensif UTBK SBMPTN
            </Typography>
            <Box 
              width="300px"
            >
               <Typography 
              sx={{
                fontSize:'16px',
                fontWeight:'500',
                lineHeight:'22.4px',
                color:'#FFFFFF',
                textAlign:'center'
              }}
            >
            Materi pelajaran, buku teks, dan sumber belajar lainnya disediakan untuk membantu siswa memahami materi dengan lebih baik.
            </Typography>
            </Box>
           

          </Box>

          <Box
          sx={{
            width:'100%',
            height:'100%',
            gap:'43px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
          }}
          >
            <Box
            sx={{
              width:'100px',
              height:'100px',
              borderRadius:'100%',
              background:'#E5EAF1',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}
            >
              <img src={Icon2} alt="" />


            </Box>
            <Typography 
              sx={{
                fontSize:'24px',
                fontWeight:'600',
                lineHeight:'28.8px',
                color:'#FFFFFF'
              }}
            >
           Pendampingan PAS/PAT H-1
            </Typography>
            <Box 
              width="300px"
            >
               <Typography 
              sx={{
                fontSize:'16px',
                fontWeight:'500',
                lineHeight:'22.4px',
                color:'#FFFFFF',
                textAlign:'center'
              }}
            >
           Guru atau tutor berpengalaman yang siap membantu siswa memahami materi, menjawab pertanyaan, dan memberikan panduan belajar.
            </Typography>
            </Box>
           

          </Box>

          <Box
          sx={{
            width:'100%',
            height:'100%',
            gap:'43px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
          }}
          >
            <Box
            sx={{
              width:'100px',
              height:'100px',
              borderRadius:'100%',
              background:'#E5EAF1',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}
            >
              <img src={Icon3} alt="" />


            </Box>
            <Typography 
              sx={{
                fontSize:'24px',
                fontWeight:'600',
                lineHeight:'28.8px',
                color:'#FFFFFF'
              }}
            >
            Tryout UTBK berkala
            </Typography>
            <Box 
              width="300px"
            >
               <Typography 
              sx={{
                fontSize:'16px',
                fontWeight:'500',
                lineHeight:'22.4px',
                color:'#FFFFFF',
                textAlign:'center'
              }}
            >
          Layanan konseling yang disediakan oleh profesional untuk membantu siswa dalam pengembangan akademis dan penyelesaian masalah belajar.
            </Typography>
            </Box>
           

          </Box>

        </Box>

    </Box>
  )
}

export default BannerFasilitas