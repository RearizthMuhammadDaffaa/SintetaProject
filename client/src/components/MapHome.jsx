import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import gambar from '../assets/img/Gambar.png'
import vektor from '../assets/img/Vector (1).png'
import { dataMap } from '../utils/data'


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
            fontSize:{md:'48px',lg:'48px',sm:'30px',xs:'30px'},
            lineHeight:'52.8px',
            fontWeight:'700',
            color:'#2A4088',
           
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

          {dataMap.map((item)=>(
             <Card sx={{
              width:'390px',
              height:'512px',
              gap:'30px',
              zIndex:'10000'
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
              {item.cabang}
                </Typography>
  
               
                <Typography
                sx={{
                  fontWeight:'400',
                  fontSize:'16px',
                  lineHeight:'22.4px',
                  color:'#4D4D4D'
                }}
                >
                  {item.desk}
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
                   <Button variant='contained' sx={{background:'#61B3E3'}}> 
                  Hubungi Cabang
                </Button>
                <Button variant='contained' sx={{background:'#61B3E3'}}> 
                  Buka di Map
                </Button>
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