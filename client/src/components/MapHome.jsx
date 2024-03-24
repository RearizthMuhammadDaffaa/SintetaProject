import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import gambar from '../assets/img/Gambar.png'
import vektor from '../assets/img/Vector (1).png'
import { data_cabang } from '../utils/dataCabang'


const MapHome = () => {
  return (
    <Box
    sx={{
      padding:'120px 0',
      position:'relative',
      marginBottom:'100px'
    }}
    >

      <Box
        sx={{
          width:'100%',
          height:'100%',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',

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
            fontSize:{md:'48px',lg:'48px',sm:'20px',xs:'20px'},
            lineHeight:'52.8px',
            fontWeight:'700',
            color:'#61B3E3',
           
          }}
        >
          Temukan Cabang Terdekat Kami di Kotamu
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
        

        <Stack 
      
        direction='row'
        flexWrap='wrap'
        justifyContent='center'
        gap='35px'
        sx={{
          width:'100%',
          height:'100%',
         
          backgroundRepeat: "no-repeat",
       
        }}
        >

          {data_cabang.map((item)=>(
             <Card sx={{
              width:'390px',
              height:'512px',
              gap:'30px',
              zIndex:'5'
            }}>
              <CardMedia 
                component='img'
                image={item.img}
                height='196'
              />
              <CardContent
              sx={{
                padding:'30px',
               
              }}
              >
                <Typography
                sx={{
                  fontWeight:'600',
                  fontSize:'24px',
                  lineHeight:'28.8px',
                  color:'#202020'
                }}
                >
              {item.daerah}
                </Typography>
  
               
                <Typography
                sx={{
                  fontWeight:'400',
                  fontSize:'16px',
                  lineHeight:'22.4px',
                  color:'#4D4D4D'
                }}
                >
                  {item.alamat}
                </Typography>
              </CardContent>
              <CardActions
              sx={{
                padding:'0 30px'
              }}
              >

                <Box
                  sx={{
                    display:'flex',
                    flexDirection:"column",
                    gap:'10px'
                  }}
                >
                  <a href={`https://wa.me/${item.noHp}`}
                  target='_blank'
                  >
                       <Button variant='contained' sx={{background:'#38B6FF',gap:'20px'}}> 
                  Hubungi Cabang

                  
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_626_2044)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"/>
                    <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_626_2044" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5BD066"/>
                    <stop offset="1" stop-color="#27B43E"/>
                    </linearGradient>
                    </defs>
                    </svg>

                </Button>
                  </a>
                
                <a href={item.linkMap} target='_blank'>
                <Button variant='contained' sx={{background:'#38B6FF',gap:'20px'}}> 
                  Buka di Map


                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_626_2047)">
                  <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12.8116L23.9999 12.8541C23.9998 12.872 23.9996 12.8899 23.9994 12.9078C23.9998 12.9287 24 12.9498 24 12.971C24 16.3073 21.4007 19.2604 19.6614 21.2367C19.1567 21.8101 18.7244 22.3013 18.449 22.6957C17.4694 24.0986 16.9524 25.6184 16.8163 26.2029C16.8163 26.6431 16.4509 27 16 27C15.5491 27 15.1837 26.6431 15.1837 26.2029C15.0476 25.6184 14.5306 24.0986 13.551 22.6957C13.2756 22.3013 12.8433 21.8101 12.3386 21.2367C10.5993 19.2604 8 16.3073 8 12.971C8 12.9498 8.0002 12.9287 8.0006 12.9078C8.0002 12.8758 8 12.8437 8 12.8116C8 8.49736 11.5817 5 16 5C20.4183 5 24 8.49736 24 12.8116ZM16 15.6812C17.7132 15.6812 19.102 14.325 19.102 12.6522C19.102 10.9793 17.7132 9.62319 16 9.62319C14.2868 9.62319 12.898 10.9793 12.898 12.6522C12.898 14.325 14.2868 15.6812 16 15.6812Z" fill="#34A851"/>
                  <path d="M23.1054 9.21856C22.1258 7.37546 20.4161 5.96177 18.3504 5.34277L13.7559 10.5615C14.3208 9.98352 15.1174 9.62346 16.0002 9.62346C17.7134 9.62346 19.1022 10.9796 19.1022 12.6524C19.1022 13.3349 18.8711 13.9646 18.4811 14.4711L23.1054 9.21856Z" fill="#4285F5"/>
                  <path d="M12.4316 21.3425C12.4009 21.3076 12.37 21.2725 12.3388 21.2371C11.1923 19.9344 9.6721 18.2073 8.76904 16.2257L13.5444 10.8018C13.1392 11.3136 12.8981 11.9556 12.8981 12.6526C12.8981 14.3254 14.2869 15.6816 16.0001 15.6816C16.868 15.6816 17.6526 15.3336 18.2156 14.7727L12.4316 21.3425Z" fill="#F9BB0E"/>
                  <path d="M9.89288 7.76562C8.71207 9.12685 8 10.8881 8 12.8117C8 12.8438 8.0002 12.8759 8.0006 12.9079C8.0002 12.9288 8 12.9499 8 12.9711C8 14.1082 8.30196 15.2009 8.76889 16.2254L13.5362 10.8106L9.89288 7.76562Z" fill="#E74335"/>
                  <path d="M18.3504 5.34254C17.6073 5.11988 16.8181 5 16.0002 5C13.5519 5 11.3605 6.07387 9.89307 7.76553L13.5364 10.8105L13.5443 10.8015C13.6106 10.7178 13.6812 10.6375 13.7559 10.5611L18.3504 5.34254Z" fill="#1A73E6"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_626_2047" x="-2" y="-1" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1"/>
                  <feGaussianBlur stdDeviation="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_626_2047"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_626_2047" result="shape"/>
                  </filter>
                  </defs>
                  </svg>
                </Button>
                </a>
              
                </Box>
               
              </CardActions>
            </Card>
          ))}
         
       
          
     

        </Stack>

      </Box>
      <Box 
     sx={{
      position:'absolute',
      bottom:'0',
      zIndex:'0',
      width:{md:'100%',xs:'100%'}
     }}
     >
     <svg width="100%" height="389" viewBox="0 0 1440 389" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.65" fill-rule="evenodd" clip-rule="evenodd" d="M0 129.667H60C120 129.667 240 129.667 360 151.278C480 172.889 600 216.111 720 244.926C840 273.741 960 288.148 1080 244.926C1200 201.704 1320 100.852 1380 50.4259L1440 0V389H1380C1320 389 1200 389 1080 389C960 389 840 389 720 389C600 389 480 389 360 389C240 389 120 389 60 389H0V129.667Z" fill="url(#paint0_linear_503_2176)"/>
<defs>
<linearGradient id="paint0_linear_503_2176" x1="720" y1="0" x2="720" y2="389" gradientUnits="userSpaceOnUse">
<stop stop-color="#7FB0CD"/>
<stop offset="1" stop-color="#9AC6E0"/>
</linearGradient>
</defs>
</svg>
     </Box>
    </Box>
  )
}

export default MapHome