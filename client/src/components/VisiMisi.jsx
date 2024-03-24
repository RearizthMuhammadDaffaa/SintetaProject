import { Box, Typography } from '@mui/material'
import React from 'react'

const VisiMisi = () => {
  return (
    <Box
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        background:'linear-gradient(#38B6FF,#A1C6DB)',
        padding:'120px 0',
        gap:'70px'
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
         
          
        }}>
        <Typography
          sx={{
            fontSize:{md:'48px',lg:'48px',sm:'30px',xs:'30px'},
            lineHeight:'52.8px',
            fontWeight:'700',
            color:'#FFFFFF',
           
          }}
        >
          Visi
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
          width:{md:'70%',xs:'90%'},
          height:'169px',
          background:'#FFFFFF',
          borderRadius:'20px',
         
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}
        >

          <Typography
            sx={{
              fontSize:'24px',
              lineHeight:'28.8px',
              textAlign:'center',
              fontWeight:'600',
              marginBottom:'10px'
            }}
          >
            Visi
          </Typography>

          <Typography
            sx={{
              fontSize:'16px',
              lineHeight:'22.4px',
              textAlign:'center',
              fontWeight:'500'
            }}
          >
            "Menjadi pusat bimbingan belajar terdepan yang memberikan pelayanan terbaik untuk meningkatkan potensi akademis dan pengembangan diri siswa secara holistik."
          </Typography>

          

        </Box>

        <Box sx={{
          width:{md:'327px',lg:'327px',sm:'100%',xs:'100%'},
          height:{md:'89px',lg:'89px',sm:'60px',xs:'60px'},
          position:'relative',
          gap:'32px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
         
          
        }}>
        <Typography
          sx={{
            fontSize:{md:'48px',lg:'48px',sm:'30px',xs:'30px'},
            lineHeight:'52.8px',
            fontWeight:'700',
            color:'#FFFFFF',
           
          }}
        >
          Misi
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
          width:{md:'90%',xs:'95%'},
          height:{md:'310px',xs:'normal'},
          background:'#FFFFFF',
          borderRadius:'20px',
         
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        }}
        >

          <Typography
            sx={{
              fontSize:'24px',
              lineHeight:'28.8px',
              textAlign:'center',
              fontWeight:'600',
              marginBottom:'10px'
            }}
          >
            Misi
          </Typography>

          <Typography
            sx={{
              fontSize:'16px',
              lineHeight:'22.4px',
              textAlign:'justify',
              fontWeight:'500'
            }}
          >
            1.Memberikan pendekatan pembelajaran yang inovatif dan terbukti efektif untuk meningkatkan pemahaman materi siswa.
  </Typography>

          <Typography
            sx={{
              fontSize:'16px',
              lineHeight:'22.4px',
              textAlign:'justify',
              fontWeight:'500'
            }}
          >
            
2.Menyediakan tenaga pengajar yang berkualitas dan berpengalaman dalam memberikan bimbingan dan dukungan kepada setiap siswa.
     </Typography>

          <Typography
            sx={{
              fontSize:'16px',
              lineHeight:'22.4px',
              textAlign:'center',
              fontWeight:'500'
            }}
          >
           

3.Mengembangkan lingkungan belajar yang kondusif dan menyenangkan agar siswa merasa nyaman dan termotivasi untuk belajar.
     </Typography>

          <Typography
            sx={{
              fontSize:'16px',
              lineHeight:'22.4px',
              textAlign:'center',
              fontWeight:'500'
            }}
          >
 
4.Memberikan layanan konseling akademik dan pengembangan diri untuk membantu siswa mencapai potensi maksimalnya di bidang akademis dan non-akademis.
     </Typography>

          <Typography
            sx={{
              fontSize:'16px',
              lineHeight:'22.4px',
              textAlign:'center',
              fontWeight:'500'
            }}
          >
    
5.Menyelenggarakan program penghargaan dan pengakuan untuk mendorong prestasi akademis dan motivasi belajar siswa.
        </Typography>

          <Typography
            sx={{
              fontSize:'16px',
              lineHeight:'22.4px',
              textAlign:'center',
              fontWeight:'500'
            }}
          >
          
6.Berkomitmen untuk terus melakukan evaluasi dan peningkatan berkelanjutan guna memastikan kualitas pelayanan dan kepuasan siswa yang terus meningkat.

          </Typography>

          <Typography
            sx={{
              fontSize:'16px',
              lineHeight:'22.4px',
              textAlign:'center',
              fontWeight:'500'
            }}
          >

7.Berperan aktif dalam memberikan kontribusi positif bagi masyarakat melalui program-program sosial dan kegiatan pengabdian kepada masyarakat.
          </Typography>



          

        </Box>


    </Box>
  )
}

export default VisiMisi