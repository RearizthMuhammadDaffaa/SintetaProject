import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const HeroBanner = () => {


  // let data = {
  //   email:'Caraka.Feil@yahoo.com',
  //   password:'12345678'
   

  // }

  // const requestOptions = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json' // Tentukan tipe konten yang dikirimkan (dalam hal ini JSON)
  //   },
  //   body: JSON.stringify(data) // Ubah objek JavaScript menjadi string JSON
  // };

  // useEffect(()=>{
  //   fetch("https://api.bimbel-sinteta.id/api/v1/login",requestOptions)
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // },[])

  const StyledButton = styled(Button)`
    &:hover {
      background-color: none;
    }
`;
  return (
   <Container
  sx={{
    marginTop:'100px',
    width:'100%',
    padding:{md:'40px 100px',lg:'40px 100px',sm:'40px 0px',xs:'40px 0px'},
    height:'630px',
    position:'relative'
  }}
   >
     
    <Box 
    sx={{
      width:'100%',
      height:"100%",
      background:'linear-gradient(#38B6FF,#A1C6DB)',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:'20px',
      
    }}
    >
      <Typography 
     
      sx={{
        fontSize:{lg:'50px',md:'50px',sm:'25px',xs:'25px'},
        lineHeight:{lg:'66px',md:'66px',sm:'30px',xs:'30px'}
      }}
      fontWeight='800'
      align='center'
      color='#FFFFFF'>
        <span style={{color:'#FFE528'}}>SINTETA</span>  Is Here!!
      </Typography>
      <Typography 
       sx={{
        fontSize:{lg:'50px',md:'50px',sm:'25px',xs:'25px'},
        lineHeight:{lg:'66px',md:'66px',sm:'30px',xs:'30px'}
      }}
      fontWeight='800'
     
      align='center'
      color='#FFE528'>
      "Sinergi ,Terukur & Terarah "
      </Typography>
      <Typography 
       sx={{
        fontSize:{lg:'50px',md:'50px',sm:'25px',xs:'25px'},
        lineHeight:{lg:'66px',md:'66px',sm:'30px',xs:'30px'}
      }}
      fontWeight='800'
     
      align='center'
      color='#FFE528'>
      Tradisi Lolos di PTN 100%
      </Typography>
      <Box
        sx={{
          width:{md:'700px',lg:'700px',sm:'100%',xs:'100%'}
        }}
      >
      <Typography
      
      lineHeight='28px'
      fontWeight='400'
      color='#FFFFFF'
      align='center'
      sx={{
        marginTop:'20px',
        fontSize:{lg:'20px',md:'20px',sm:'15px',xs:'15px'}
      }}
      >
      Transformasikan potensimu menjadi prestasi unggul bersama Bimbel SINTETA, pilihan terbaik untuk mempersiapkan dirimu menghadapi tantangan seleksi masuk ke Perguruan Tinggi Negeri.
      </Typography>
      </Box>

      <a href="https://wa.me/6281380327556"
        target='_blank'
      >
      <StyledButton  variant="contained" 
        sx={{
          background:'#FFF',
          color:'#61B3E3',
          padding:'8px 24px',
          marginTop:'15px',
          "&.MuiButtonBase-root:hover": {
            bgcolor: "#FFF"
          },
          gap:'10px'
        }}
      >Hubungi Kami
      
      <svg width="32" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 31C24.232 31 30.5 24.732 30.5 17C30.5 9.26801 24.232 3 16.5 3C8.76801 3 2.5 9.26801 2.5 17C2.5 19.5109 3.161 21.8674 4.31847 23.905L2.5 31L9.81486 29.3038C11.8014 30.3854 14.0789 31 16.5 31ZM16.5 28.8462C23.0425 28.8462 28.3462 23.5425 28.3462 17C28.3462 10.4576 23.0425 5.15385 16.5 5.15385C9.95755 5.15385 4.65385 10.4576 4.65385 17C4.65385 19.5261 5.4445 21.8675 6.79184 23.7902L5.73077 27.7692L9.77993 26.7569C11.6894 28.0746 14.0046 28.8462 16.5 28.8462Z" fill="#BFC8D0"/>
      <path d="M28.5 16C28.5 22.6274 23.1274 28 16.5 28C13.9722 28 11.6269 27.2184 9.69266 25.8837L5.59091 26.9091L6.66576 22.8784C5.30092 20.9307 4.5 18.5589 4.5 16C4.5 9.37258 9.87258 4 16.5 4C23.1274 4 28.5 9.37258 28.5 16Z" fill="url(#paint0_linear_626_1776)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 30C24.232 30 30.5 23.732 30.5 16C30.5 8.26801 24.232 2 16.5 2C8.76801 2 2.5 8.26801 2.5 16C2.5 18.5109 3.161 20.8674 4.31847 22.905L2.5 30L9.81486 28.3038C11.8014 29.3854 14.0789 30 16.5 30ZM16.5 27.8462C23.0425 27.8462 28.3462 22.5425 28.3462 16C28.3462 9.45755 23.0425 4.15385 16.5 4.15385C9.95755 4.15385 4.65385 9.45755 4.65385 16C4.65385 18.5261 5.4445 20.8675 6.79184 22.7902L5.73077 26.7692L9.77993 25.7569C11.6894 27.0746 14.0046 27.8462 16.5 27.8462Z" fill="white"/>
      <path d="M13 9.49989C12.6672 8.83131 12.1565 8.8905 11.6407 8.8905C10.7188 8.8905 9.28125 9.99478 9.28125 12.05C9.28125 13.7343 10.0234 15.578 12.5244 18.3361C14.938 20.9979 18.1094 22.3748 20.7422 22.3279C23.375 22.2811 23.9167 20.0154 23.9167 19.2503C23.9167 18.9112 23.7062 18.742 23.5613 18.696C22.6641 18.2654 21.0093 17.4631 20.6328 17.3124C20.2563 17.1617 20.0597 17.3656 19.9375 17.4765C19.5961 17.8018 18.9193 18.7608 18.6875 18.9765C18.4558 19.1922 18.1103 19.083 17.9665 19.0015C17.4374 18.7892 16.0029 18.1511 14.8595 17.0426C13.4453 15.6718 13.3623 15.2001 13.0959 14.7803C12.8828 14.4444 13.0392 14.2384 13.1172 14.1483C13.4219 13.7968 13.8426 13.254 14.0313 12.9843C14.2199 12.7145 14.0702 12.305 13.9803 12.05C13.5938 10.953 13.2663 10.0347 13 9.49989Z" fill="white"/>
      <defs>
      <linearGradient id="paint0_linear_626_1776" x1="27" y1="7" x2="4.5" y2="28" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5BD066"/>
      <stop offset="1" stop-color="#27B43E"/>
      </linearGradient>
      </defs>
      </svg>

      </StyledButton>
      </a>
      
     
    </Box>
 
   
    <Box
    sx={{
      width:'52px',
      height:'156px',
      borderRadius:'0px 32px 32px 0px',
      display:{md:'flex',xs:'none'},
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      gap:'16px',
      background:'linear-gradient(#38B6FF,#A1C6DB)',
      position:'absolute',
      top:'38%',
      left:'-70px'
    }}
   >

<a href="">
    {/* ig */}
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.75" y="1.75" width="24.5" height="24.5" rx="6" fill="url(#paint0_radial_626_1778)"/>
<rect x="1.75" y="1.75" width="24.5" height="24.5" rx="6" fill="url(#paint1_radial_626_1778)"/>
<rect x="1.75" y="1.75" width="24.5" height="24.5" rx="6" fill="url(#paint2_radial_626_1778)"/>
<path d="M20.125 9.1875C20.125 9.91237 19.5374 10.5 18.8125 10.5C18.0876 10.5 17.5 9.91237 17.5 9.1875C17.5 8.46263 18.0876 7.875 18.8125 7.875C19.5374 7.875 20.125 8.46263 20.125 9.1875Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 18.375C16.4162 18.375 18.375 16.4162 18.375 14C18.375 11.5838 16.4162 9.625 14 9.625C11.5838 9.625 9.625 11.5838 9.625 14C9.625 16.4162 11.5838 18.375 14 18.375ZM14 16.625C15.4497 16.625 16.625 15.4497 16.625 14C16.625 12.5503 15.4497 11.375 14 11.375C12.5503 11.375 11.375 12.5503 11.375 14C11.375 15.4497 12.5503 16.625 14 16.625Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 13.65C5.25 10.7097 5.25 9.23959 5.82222 8.11655C6.32555 7.1287 7.1287 6.32555 8.11655 5.82222C9.23959 5.25 10.7097 5.25 13.65 5.25H14.35C17.2903 5.25 18.7604 5.25 19.8835 5.82222C20.8713 6.32555 21.6744 7.1287 22.1778 8.11655C22.75 9.23959 22.75 10.7097 22.75 13.65V14.35C22.75 17.2903 22.75 18.7604 22.1778 19.8835C21.6744 20.8713 20.8713 21.6744 19.8835 22.1778C18.7604 22.75 17.2903 22.75 14.35 22.75H13.65C10.7097 22.75 9.23959 22.75 8.11655 22.1778C7.1287 21.6744 6.32555 20.8713 5.82222 19.8835C5.25 18.7604 5.25 17.2903 5.25 14.35V13.65ZM13.65 7H14.35C15.849 7 16.868 7.00136 17.6557 7.06572C18.4229 7.1284 18.8153 7.24202 19.089 7.38148C19.7475 7.71703 20.283 8.25247 20.6185 8.91103C20.758 9.18473 20.8716 9.57709 20.9343 10.3443C20.9986 11.132 21 12.151 21 13.65V14.35C21 15.849 20.9986 16.868 20.9343 17.6557C20.8716 18.4229 20.758 18.8153 20.6185 19.089C20.283 19.7475 19.7475 20.283 19.089 20.6185C18.8153 20.758 18.4229 20.8716 17.6557 20.9343C16.868 20.9986 15.849 21 14.35 21H13.65C12.151 21 11.132 20.9986 10.3443 20.9343C9.57709 20.8716 9.18473 20.758 8.91103 20.6185C8.25247 20.283 7.71703 19.7475 7.38148 19.089C7.24202 18.8153 7.1284 18.4229 7.06572 17.6557C7.00136 16.868 7 15.849 7 14.35V13.65C7 12.151 7.00136 11.132 7.06572 10.3443C7.1284 9.57709 7.24202 9.18473 7.38148 8.91103C7.71703 8.25247 8.25247 7.71703 8.91103 7.38148C9.18473 7.24202 9.57709 7.1284 10.3443 7.06572C11.132 7.00136 12.151 7 13.65 7Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_626_1778" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.5 20.125) rotate(-55.3758) scale(22.3297)">
<stop stop-color="#B13589"/>
<stop offset="0.79309" stop-color="#C62F94"/>
<stop offset="1" stop-color="#8A3AC8"/>
</radialGradient>
<radialGradient id="paint1_radial_626_1778" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.625 27.125) rotate(-65.1363) scale(19.77)">
<stop stop-color="#E0E8B7"/>
<stop offset="0.444662" stop-color="#FB8A2E"/>
<stop offset="0.71474" stop-color="#E2425C"/>
<stop offset="1" stop-color="#E2425C" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_radial_626_1778" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.437501 2.625) rotate(-8.1301) scale(34.0295 7.27856)">
<stop offset="0.156701" stop-color="#406ADC"/>
<stop offset="0.467799" stop-color="#6A45BE"/>
<stop offset="1" stop-color="#6A45BE" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>

</a>

<a href="">
{/* fb */}
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="12.25" fill="url(#paint0_linear_626_1779)"/>
<path d="M18.562 17.7464L19.1061 14.2888H15.7021V12.0461C15.7021 11.1 16.1767 10.1772 17.7014 10.1772H19.25V7.23362C19.25 7.23362 17.8452 7 16.5027 7C13.698 7 11.8665 8.65632 11.8665 11.6536V14.2888H8.75V17.7464H11.8665V26.1052C12.4921 26.201 13.1322 26.25 13.7843 26.25C14.4363 26.25 15.0764 26.201 15.7021 26.1052V17.7464H18.562Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_626_1779" x1="14" y1="1.75" x2="14" y2="26.1773" gradientUnits="userSpaceOnUse">
<stop stop-color="#18ACFE"/>
<stop offset="1" stop-color="#0163E0"/>
</linearGradient>
</defs>
</svg>
</a>


<a href="">
{/* yt */}

<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.96394 8.69847C2.07641 6.96704 3.46845 5.61012 5.20141 5.52427C7.71084 5.39994 11.2975 5.25 14 5.25C16.7025 5.25 20.2892 5.39994 22.7986 5.52427C24.5315 5.61012 25.9236 6.96704 26.0361 8.69847C26.1438 10.3573 26.25 12.3985 26.25 14C26.25 15.6015 26.1438 17.6427 26.0361 19.3015C25.9236 21.033 24.5315 22.3899 22.7986 22.4757C20.2892 22.6001 16.7025 22.75 14 22.75C11.2975 22.75 7.71084 22.6001 5.20141 22.4757C3.46845 22.3899 2.07641 21.033 1.96394 19.3015C1.85619 17.6427 1.75 15.6015 1.75 14C1.75 12.3985 1.85619 10.3573 1.96394 8.69847Z" fill="#FC0D1B"/>
<path d="M11.375 10.5V17.5L18.375 14L11.375 10.5Z" fill="white"/>
</svg>
</a>




   </Box>
   </Container>
  )
}

export default HeroBanner