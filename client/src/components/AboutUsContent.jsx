import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/img/Kocek. Logo.png'

const AboutUsContent = () => {
  return (
   <Box
    sx={{
      width:'100%',
      height:'100%',
      padding:{md:'80px 0px',xs:' 120px 0px'},
      marginBottom:{md:'0',xs:'300px'},
      gap:'10px'
    }}
   >
    <Container
     sx={{
      width:'100%',
      height:'100vh',
      gap:{md:'100px',xs:'10px'},
      display:'flex',
     
      flexDirection:{md:'row',xs:'column'}
     }}
    >

      <Box
        sx={{
          width:{md:'40%',xs:'80%'},
          height:'393px',
          border:'2px solid #E5EAF1',
          borderRadius:'16px',
          alignSelf:{md:'normal',xs:'center'}
        }}
      >
        <img src={logo} alt="" width='100%' height='100%'/>
      </Box>

      <Box
        sx={{
          width:{md:'60%',xs:'100%'},
          height:'393px',
          gap:'32px'
        }}
      >

        <Typography
          sx={{
            fontWeight:'700',
            fontSize:{md:'48px',xs:'20px'},
            lineHeight:'52.8px'
          }}
        >
          Tentang Kami <span style={{color:'#61B3E3'}}>Sinteta</span>
        </Typography>

        <Box
          
        >

        <Typography
          sx={{
            fontWeight:'400',
            fontSize:'16px',
            lineHeight:'22.4px',
            color:'#4D4D4D',
            textAlign:'justify',
            marginTop:'10px'
          }}
        >
        Bimbel Sinteta adalah pusat bimbingan belajar yang berkomitmen untuk memberikan pelayanan terbaik dalam meningkatkan potensi akademis dan pengembangan diri siswa secara holistik. Sejak didirikan, kami telah berdedikasi untuk menyediakan pendekatan pembelajaran yang inovatif, lingkungan belajar yang kondusif, dan sumber belajar yang terkini untuk mendukung kebutuhan belajar siswa di berbagai tingkatan.

     </Typography>

        <Typography
          sx={{
            fontWeight:'400',
            fontSize:'16px',
            lineHeight:'22.4px',
            color:'#4D4D4D',
            textAlign:'justify',
            marginTop:'10px'
          }}
        >
      

Di Bimbel Sinteta, kami percaya bahwa setiap siswa memiliki potensi yang unik yang perlu dibimbing dan dikembangkan dengan pendekatan yang tepat. Oleh karena itu, kami menyediakan tenaga pengajar yang berkualitas dan berpengalaman dalam memberikan bimbingan dan dukungan kepada setiap siswa. Kami juga berkomitmen untuk membangun kemitraan yang kuat dengan orang tua siswa, sehingga sinergi antara bimbingan belajar, sekolah, dan keluarga dapat terjalin dengan baik.


        </Typography>

        <Typography
          sx={{
            fontWeight:'400',
            fontSize:'16px',
            lineHeight:'22.4px',
            color:'#4D4D4D',
            textAlign:'justify',
            marginTop:'10px'
          }}
        >
        

       
Kami juga mengutamakan pemanfaatan teknologi terkini dalam proses pembelajaran untuk meningkatkan efisiensi dan efektivitas bimbingan belajar. Dengan adopsi teknologi, kami memberikan pengalaman belajar yang interaktif dan menyenangkan bagi siswa.


        </Typography>

        </Box>

       

      </Box>

    </Container>
   </Box>
  )
}

export default AboutUsContent