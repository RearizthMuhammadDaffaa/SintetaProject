import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/img/Boy 1.png'

const AboutKelas = () => {
  return (
    <Box>
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
        background:'#11B1E2',
        borderRadius:'40px 40px 0px 0px'
      }}
    >
      <img src={logo} alt="" style={{display:'block', margin:'0 auto'}} />

    </Box>

    <Box
      sx={{
        width:{md:'624px',xs:'none'},
        height:{md:'393px',xs:'none'},
        gap:'48px',
        
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
      }}
    >
      <Typography
      sx={{
        fontWeight:'700',
        fontSize:'48px',
        lineHeight:'53.8px',
        color:'#11B1E2'
      }}
      >
      Siap PTN <span style={{color:'#FFE528'}}>100%</span> ?
      </Typography>

      <Typography>
        Kami adalah bimbingan belajar yang mengutamakan persiapan siswa untuk diterima di perguruan tinggi dengan tingkat keberhasilan 100%. Dengan kurikulum yang terstruktur, tim pengajar ahli, dan pendekatan holistik, kami memastikan setiap siswa mendapatkan pemahaman mendalam tentang materi pelajaran, kepercayaan diri, dan keterampilan ujian yang diperlukan untuk sukses. Bergabunglah dengan kami untuk membangun masa depan akademis Anda dengan percaya diri dan sukses.
  
      </Typography>
      
      <Typography>
 
       Kami tidak hanya fokus pada pelajaran, tapi juga membantu siswa menjadi lebih percaya diri dan siap menghadapi kehidupan di perguruan tinggi. Dengan bantuan tim pengajar kami, setiap siswa akan siap untuk menghadapi tantangan akademis dan mengembangkan diri secara pribadi. Bergabunglah dengan kami untuk mencapai kesuksesan bersama.
      </Typography>
    
    </Box>

    

   </Box>
    </Box>
    
  )
}

export default AboutKelas