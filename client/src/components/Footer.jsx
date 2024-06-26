import { Box, Container, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from "../assets/img/Logo Bimbel 1.png"

const Footer = () => {
  return (
   <Box 
  sx={{
    width:'100%',
    height:"100%",
    background:'linear-gradient(#38B6FF,#A1C6DB)',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:{md:'0',xs:'100px'}
  }}
   >
   <Container
    sx={{
      // height:'376px',
      display:'flex',
      justifyContent:{md:'space-between',xs:'center'},
       alignItems:"center",
      flexDirection:{md:'row',xs:'column'},
   
    }}
   >
    <Box
      sx={{
        width:{md:'392px',xs:'100%'},
        height:{md:'376px',xs:'30%'},
        gap:'32px',
        display:'flex',
        flexDirection:'column',
       alignItems:{lg:'normal',md:'normal',xs:'center',sm:'center'}   
      }}
    >
      <img src={logo} alt="" width='152px' height='80px' />
      
      <Typography 
        sx={{
          fontSize:'16px',
          lineHeight:'22.4px',
          fontWeight:'400',
          color:'#FFFFFF'
        }}
      >
        Di bimbel ini , siswa dapat belajar materi pelajaran secara lebih mendalam, menerima panduan dari guru yang berpengalaman, dan memiliki kesempatan untuk memperbaiki pemahaman mereka tentang topik tertentu. Ini adalah tempat yang membantu siswa mencapai potensi akademis mereka dengan cara yang terstruktur dan terarah.
      </Typography>
      <Box 
      sx={{
        width:'120px',
        height:'24px',
        gap:'24px',
        display:'flex'
      }}
      >
        {/* facebook icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.878C18.343 21.128 22 16.991 22 12Z" fill="white"/>
</svg>

{/* ig icon */}
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.315 2C14.745 2 15.099 2.013 16.123 2.06C17.187 2.109 17.914 2.278 18.55 2.525C19.2175 2.77587 19.8222 3.16936 20.322 3.678C20.8306 4.17777 21.2241 4.7825 21.475 5.45C21.722 6.086 21.891 6.813 21.94 7.877C21.988 8.944 22 9.284 22 12V12.08C22 14.723 21.988 15.067 21.94 16.123C21.891 17.187 21.722 17.914 21.475 18.55C21.2241 19.2175 20.8306 19.8222 20.322 20.322C19.8222 20.8306 19.2175 21.2241 18.55 21.475C17.914 21.722 17.187 21.891 16.123 21.94C15.056 21.988 14.716 22 12 22H11.92C9.277 22 8.933 21.988 7.877 21.94C6.813 21.891 6.086 21.722 5.45 21.475C4.7825 21.2241 4.17777 20.8306 3.678 20.322C3.16936 19.8222 2.77587 19.2175 2.525 18.55C2.278 17.914 2.109 17.187 2.06 16.123C2.013 15.099 2 14.744 2 12.315V11.685C2 9.255 2.013 8.901 2.06 7.877C2.109 6.813 2.278 6.086 2.525 5.45C2.77587 4.7825 3.16936 4.17777 3.678 3.678C4.17777 3.16936 4.7825 2.77587 5.45 2.525C6.086 2.278 6.813 2.109 7.877 2.06C8.901 2.013 9.256 2 11.685 2H12.315ZM12.234 3.802H11.766C9.31 3.802 8.982 3.813 7.959 3.86C6.984 3.905 6.455 4.067 6.102 4.204C5.635 4.386 5.302 4.602 4.952 4.952C4.602 5.302 4.386 5.635 4.204 6.102C4.067 6.455 3.904 6.984 3.86 7.959C3.813 8.982 3.802 9.31 3.802 11.766V12.234C3.802 14.69 3.813 15.018 3.86 16.041C3.905 17.016 4.067 17.545 4.204 17.898C4.386 18.364 4.603 18.698 4.952 19.048C5.302 19.398 5.635 19.614 6.102 19.796C6.455 19.933 6.984 20.096 7.959 20.14C9.013 20.188 9.329 20.198 12 20.198H12.08C14.677 20.198 14.997 20.188 16.04 20.14C17.016 20.095 17.545 19.933 17.898 19.796C18.364 19.614 18.698 19.398 19.048 19.048C19.398 18.698 19.614 18.365 19.796 17.898C19.933 17.545 20.096 17.016 20.14 16.041C20.188 14.986 20.198 14.671 20.198 12V11.92C20.198 9.323 20.188 9.003 20.14 7.96C20.095 6.984 19.933 6.455 19.796 6.102C19.6358 5.66757 19.3802 5.2746 19.048 4.952C18.7254 4.61986 18.3324 4.36426 17.898 4.204C17.545 4.067 17.016 3.904 16.041 3.86C15.018 3.813 14.69 3.802 12.234 3.802ZM12 6.865C12.6743 6.865 13.3421 6.99782 13.9651 7.25588C14.5881 7.51394 15.1542 7.89218 15.631 8.36901C16.1078 8.84584 16.4861 9.41191 16.7441 10.0349C17.0022 10.6579 17.135 11.3257 17.135 12C17.135 12.6743 17.0022 13.3421 16.7441 13.9651C16.4861 14.5881 16.1078 15.1542 15.631 15.631C15.1542 16.1078 14.5881 16.4861 13.9651 16.7441C13.3421 17.0022 12.6743 17.135 12 17.135C10.6381 17.135 9.33201 16.594 8.36901 15.631C7.40601 14.668 6.865 13.3619 6.865 12C6.865 10.6381 7.40601 9.33201 8.36901 8.36901C9.33201 7.40601 10.6381 6.865 12 6.865ZM12 8.667C11.116 8.667 10.2683 9.01815 9.64321 9.64321C9.01815 10.2683 8.667 11.116 8.667 12C8.667 12.884 9.01815 13.7317 9.64321 14.3568C10.2683 14.9818 11.116 15.333 12 15.333C12.884 15.333 13.7317 14.9818 14.3568 14.3568C14.9818 13.7317 15.333 12.884 15.333 12C15.333 11.116 14.9818 10.2683 14.3568 9.64321C13.7317 9.01815 12.884 8.667 12 8.667ZM17.338 5.462C17.6563 5.462 17.9615 5.58843 18.1865 5.81347C18.4116 6.03852 18.538 6.34374 18.538 6.662C18.538 6.98026 18.4116 7.28548 18.1865 7.51053C17.9615 7.73557 17.6563 7.862 17.338 7.862C17.0197 7.862 16.7145 7.73557 16.4895 7.51053C16.2644 7.28548 16.138 6.98026 16.138 6.662C16.138 6.34374 16.2644 6.03852 16.4895 5.81347C16.7145 5.58843 17.0197 5.462 17.338 5.462Z" fill="white"/>
</svg>

{/* twitter icon */}

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.29 20.2534C15.837 20.2534 19.965 14.0004 19.965 8.5784C19.965 8.4004 19.965 8.2234 19.953 8.0484C20.7562 7.46693 21.4493 6.74701 22 5.9224C21.2511 6.2544 20.4566 6.47216 19.643 6.5684C20.4996 6.05546 21.1408 5.24875 21.447 4.2984C20.6417 4.77628 19.7607 5.11313 18.842 5.2944C18.2234 4.63616 17.405 4.20023 16.5136 4.0541C15.6222 3.90797 14.7075 4.0598 13.9111 4.48607C13.1147 4.91234 12.4811 5.58927 12.1083 6.41206C11.7355 7.23485 11.6444 8.15758 11.849 9.0374C10.2176 8.95564 8.6216 8.53172 7.16465 7.79317C5.70769 7.05461 4.42233 6.01792 3.392 4.7504C2.86732 5.6536 2.70659 6.72282 2.94254 7.74036C3.17848 8.75791 3.79337 9.64728 4.662 10.2274C4.00926 10.2085 3.37063 10.0329 2.8 9.7154V9.7674C2.80039 10.7147 3.1284 11.6327 3.7284 12.3658C4.3284 13.0988 5.16347 13.6018 6.092 13.7894C5.48781 13.9541 4.85389 13.9781 4.239 13.8594C4.50116 14.6749 5.01168 15.388 5.69913 15.899C6.38658 16.41 7.21657 16.6934 8.073 16.7094C7.22212 17.378 6.24779 17.8722 5.20573 18.1639C4.16367 18.4556 3.07432 18.539 2 18.4094C3.8766 19.6137 6.06019 20.2525 8.29 20.2494" fill="white"/>
</svg>
      </Box>
    </Box>

    <Box
      sx={{
        width:{lg:'708px',md:'708px',sm:'100%',xs:'100%'},
        height:{lg:'708px',md:'708px',sm:'80%',xs:'70%'},
        gap:'32px',
        display:'flex',
        marginLeft:{md:'200px',xs:'0'},
        flexDirection:{md:'row',xs:'column'},
        alignItems:{md:"center",xs:"normalize"},
        // marginTop:{md:'0',xs:'200px'},
        padding:'10px 0'
      }}
    >
      <Box
      sx={{
        width:{md:'180px',xs:'100%'},
        height:{md:'221px',xs:'80%'},
        gap:'16px',
        margin:{md:'0',xs:'20px 0'},
      }}
      >
        <Typography
          sx={{
            fontWeight:'600',
            fontSize:'24px',
            lineHeight:'28.8px',
            color:'#FFFFFF'
          }}
        >
            Discover
        </Typography>
        <Box
        sx={{
          width:'100%',
          height:'104px',
          gap:'16px',
        
        }}
        >
        <List
          sx={{
            marginLeft:'-14px'
           }}
        >
          <ListItem   
          >
            <ListItemText 
              primary="Beranda"
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'24px',
                color:'#FFFFFF',
                
              }}
            />

            
          </ListItem>
          <ListItem   
          >
            <ListItemText 
              primary="Kelas"
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'24px',
                color:'#FFFFFF',
                
              }}
            />

            
          </ListItem>
          <ListItem   
          >
            <ListItemText 
              primary="Bukti Kelolosan"
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'24px',
                color:'#FFFFFF',
                
              }}
            />

            
          </ListItem>
        </List>
        </Box>
       
      </Box>

      <Box
      sx={{
        width:'180px',
        height:'221px',
        gap:'16px',
        margin:{md:'0',xs:'20px 0'},
      }}
      >
        <Typography
          sx={{
            fontWeight:'600',
            fontSize:'24px',
            lineHeight:'28.8px',
            color:'#FFFFFF'
          }}
        >
            Resources
        </Typography>
        <Box
        sx={{
          width:'100%',
          height:'104px',
          gap:'16px',
        
        }}
        >
        <List
          sx={{
            marginLeft:'-14px'
           }}
        >
          <ListItem   
          >
            <ListItemText 
              primary="Fasilitas"
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'24px',
                color:'#FFFFFF',
                
              }}
            />

            
          </ListItem>
          <ListItem   
          >
            <ListItemText 
              primary="Promo Belajar"
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'24px',
                color:'#FFFFFF',
                
              }}
            />

            
          </ListItem>
          <ListItem   
          >
            <ListItemText 
              primary="Tentang Kami"
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'24px',
                color:'#FFFFFF',
                
              }}
            />

            
          </ListItem>
        </List>
        </Box>
       
      </Box>


      <Box
      sx={{
        width:'284px',
        height:'221px',
        gap:'16px',
       marginBottom:{md:'0',xs:'50px'}
      }}
      >
        <Typography
          sx={{
            fontWeight:'600',
            fontSize:'24px',
            lineHeight:'28.8px',
            color:'#FFFFFF'
          }}
        >
            Get in Touch
        </Typography>
        <Box
        sx={{
          width:'100%',
          height:'104px',
          gap:'16px',
        
        }}
        >
        <List
          sx={{
            marginLeft:'-14px'
           }}
        >
          <ListItem   
          >
            <ListItemText 
              primary="Sinteta@gmail.com"
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'24px',
                color:'#FFFFFF',
                
              }}
            />

            
          </ListItem>
          <ListItem   
          >
            <ListItemText 
              primary="+6281-3803-27556"
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'24px',
                color:'#FFFFFF',
                
              }}
            />

            
          </ListItem>
          <ListItem   
          >
            <ListItemText 
              primary="Jl. Mardani Raya No.70 3, RT.11/RW.13, Cemp. Putih Bar., Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10560"
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'24px',
                color:'#FFFFFF',
                
              }}
            />

            
          </ListItem>
        </List>
        </Box>
       
      </Box>
     

    </Box>
   </Container>

   <Container
    sx={{
      height:'50px',
      borderTop:"1px solid #FFFFFF",
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
      // marginTop:{md:'90px',xs:'600px'},
      
    }}
   >
      <Typography
      sx={{
        fontWeight:'400px',
        fontSize:'16px',
        lineHeight:'24px',
        textAlign:'center',
        color:'#FFFFFF',
        // marginTop:{md:'30px',xs:'70px'},
      }}
      >
      Sinteta. - © 2024 All rights reserved.
      </Typography>
   </Container>
   </Box>
  )
}

export default Footer