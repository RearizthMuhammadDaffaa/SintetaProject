import { Box, Typography } from '@mui/material'
import React from 'react'
import alumni from "../../assets/Alumni/Vector (2).png"

const Alumni = () => {
  return (
    <Box
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
       
      }}
    >

      <Box
        sx={{
          display:'flex',
          justfyContent:'center',
          alignItems:'center',
          width:'100%',
          gap:'32px',
          flexDirection:{md:'row',xs:'column'}
        }}
      >
        <Box sx={{
          width:'100%'
        }}>
          <img src={alumni} alt="" />
        </Box>
        <Box
          sx={{
          
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            
          }}
        >

          <Box
            sx={{
              marginBottom:'20px'
            }}
          >
          <Typography
            sx={{
                fontWeight:'600',
                fontSize:{ xs: '28px', md: '32px' },
                lineHeight:'38.4px',
                color:'#38B6FF'
            }}
          >
            Muhammad Raihan
          </Typography>

          <Typography
            sx={{
                fontWeight:'500',
                fontSize:{ xs: '20px', md: '24px' },
                lineHeight:'28.8px',
                color:'#797979'
            }}
          >
           Informatika  ITB
          </Typography>
          </Box>
         
          <Box
          sx={{
            width:{md:'526px',xs:'normal'},
            height:'372px',
            gap:'10px',
            borderRadius:'32px',
            padding:'32px',
            border:'1px solid #E5EAF1',
            position:'relative',
           
          }}
          >
            <Box
              sx={{
                width:'100%',
                height:'100%',
                position:'absolute',
                left:'-30px',
                top:'-30px'
              }}
            >
            <svg width="90" height="107" viewBox="0 0 90 107" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_626_1695)">
              <rect x="10" y="14" width="54" height="71" rx="16" fill="white" shape-rendering="crispEdges"/>
              <path d="M39.28 60.784V52.528C39.28 47.344 40.496 43.12 42.928 39.856C45.424 36.528 49.104 34.352 53.968 33.328V39.568C51.792 40.08 50.064 41.04 48.784 42.448C47.504 43.792 46.672 45.424 46.288 47.344H52.048V60.784H39.28ZM19.888 60.784V52.528C19.888 47.344 21.104 43.12 23.536 39.856C26.032 36.528 29.68 34.352 34.48 33.328V39.568C32.304 40.08 30.576 41.04 29.296 42.448C28.016 43.792 27.184 45.424 26.8 47.344H32.56V60.784H19.888Z" fill="url(#paint0_linear_626_1695)"/>
              </g>
              <defs>
              <filter id="filter0_d_626_1695" x="0" y="0" width="90" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="8" dy="4"/>
              <feGaussianBlur stdDeviation="9"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_626_1695"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_626_1695" result="shape"/>
              </filter>
              <linearGradient id="paint0_linear_626_1695" x1="37" y1="14" x2="37" y2="120" gradientUnits="userSpaceOnUse">
              <stop stop-color="#38B6FF"/>
              <stop offset="1" stop-color="#A1C6DB"/>
              </linearGradient>
              </defs>
              </svg>
            </Box>

              <Box
                sx={{
                  
                }}
              >
                 <Typography
               sx={{
                fontWeight:'500',
                fontSize:'20px',
                lineHeight:'28px',
                color:'#4D4D4D',
                marginBottom:'40px',
                marginTop:'30px'
               }}
              >
              Setelah menyelesaikan program di bimbel SINTETA, saya merasa sangat siap untuk menghadapi ujian masuk perguruan tinggi. Materi yang diajarkan sangat terstruktur dan tutor-tutornya sangat ahli dalam menjelaskan konsep-konsep sulit. 
              </Typography>

              <Typography
               sx={{
                fontWeight:'500',
                fontSize:'20px',
                lineHeight:'28px',
                color:'#4D4D4D'
               }}
              >
               Saya juga mendapatkan banyak latihan dan ujian simulasi yang membantu saya memperbaiki kelemahan saya. Akhirnya, saya berhasil masuk ke perguruan tinggi impian saya.
              </Typography>
              </Box>
             


          </Box>

        </Box>
      </Box>

    </Box>
  )
}

export default Alumni