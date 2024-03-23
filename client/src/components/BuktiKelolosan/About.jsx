import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import logo from '../../assets/aboutIMG/Hero.png'

const About = () => {
  return (
    <Box
      sx={{
        width:'100%',
        height:'100%',
        padding:'120px 0'
      }}
    >
        <Box
    sx={{
      width:'100%',
      height:'100%',
      
      gap:'100px',
      display:'flex',
      justifyContent:'center',
      flexDirection:{md:'row',xs:'column'},
      alignItems:'center',
      background:'#FFFFFF'
    }}
   >

<Box
      sx={{
        width:{md:'516px',xs:'100%'},
        height:{md:'456px',xs:'100%'},
        marginLeft:{md:'20px',xs:'0'},
    
        borderRadius:'40px 40px 0px 0px'
      }}
    >
      <img src={logo} alt=""  style={{width:'100%',display:'block', margin:'0 auto'}} />

    </Box>

    <Box
    component="div"
    className='BoxAbout'
      sx={{
        width:{md:'624px',xs:'none'},
        height:{md:'393px',xs:'none'},
        gap:'40px',
        padding:{md:'0',xs:'0 20px'},
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        
      }}
    >
    

      <Typography>
      Bimbel SINTETA telah menjadi langkah awal bagi ribuan siswa untuk meraih kesuksesan akademik dan profesional. Dengan pendekatan yang terfokus pada kebutuhan individual setiap siswa, kami telah menciptakan lingkungan belajar yang mendukung, memotivasi, dan mendorong pertumbuhan mereka.
       
  
      </Typography>
      
      <Typography>
 
      Kami bangga menyaksikan banyak dari alumni kami yang telah mencapai prestasi gemilang dalam berbagai bidang. Dari meraih nilai ujian yang tinggi hingga diterima di perguruan tinggi bergengsi, dari menjadi pengusaha sukses hingga mendapatkan pengakuan internasional dalam bidang mereka masing-masing
      </Typography>
    
    </Box>

    

   </Box>
    </Box>
  )
}

export default About