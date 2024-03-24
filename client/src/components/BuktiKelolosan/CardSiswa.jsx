import React from 'react'
import { Box, Button, InputBase, Stack, TextField, Typography } from '@mui/material'
import siswa1 from "../../assets/imgSiswa/Mask group (5).png"

const CardSiswa = ({data}) => {
  
  return (
    <Box
    component="div"
   
    sx={{
      width:{md:'604px',xs:'100%'},
      height:{md:'318px',xs:'100%'},
      borderRadius:'16px',
      border:'2px solid #E5EAF1',
      display:'flex',
      flexDirection:{md:'row',xs:'column'}
    }}
  >
    <Box
      sx={{
        width:'100%',
        gap:'24px',
        padding:'22px',
        order:{md:'0',xs:'1'}
      }}
    >
      <Typography
        sx={{
          fontSize:'24px',
          fontWeight:'600',
          lineHeight:'28.8px',
        }}
      >
        {data.nama}
      </Typography>

      <Typography
        sx={{
          fontSize:'18px',
          fontWeight:'700',
          lineHeight:'25.2px',
          marginTop:'10px',
          color:'#38B6FF'
        }}
      >
       {data.asalSekolah}
      </Typography>

      <Typography
        sx={{
          fontSize:'18px',
          fontWeight:'700',
          lineHeight:'25.2px',
          marginTop:'10px',
          color:'#38B6FF'
        }}
      >
        {data.kuliah} 
      </Typography>
      <Box
        sx={{
          
          marginTop:'30px'
        }}
      >
      <Typography
        sx={{
          fontSize:'16px',
          fontWeight:'400',
          lineHeight:'22.4px',
          marginTop:'10px',
          color:'#4D4D4D'
        }}
      >
        {data.desk.length > 200 ? data.desk.substring(0,150) + "..." : data.desk}
      </Typography>
      </Box>
      

    </Box>
      
      <Box
       className='container-siswa'
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          
          width:'100%',
          order:{md:'0',xs:'0'}
        }}
      >
      <Box
        sx={{
          width:'201px',
          height:'201px'
        }}
      >
         <img src={data.img} alt="" width="100%" height="100%"/>
      </Box>
       
      </Box>

  </Box>
  )
}

export default CardSiswa