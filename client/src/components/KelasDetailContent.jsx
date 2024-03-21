import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import IMGKelas from "../assets/img/Rectangle 1258.png"

const KelasDetailContent = () => {
  return (
    <Box sx={{
      padding:{md:'40px 100px ',xs:'40px 0px'},
      gap:'70px',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      marginTop:'100px'
    }}>
      <Box
        sx={{
         display:'flex',
         flexDirection:'column',
         gap:"30px"
        }}
      >

        <Box
          sx={{
            display:'flex',
            gap:'10px',
            alignItems:'center'
          }}
        >

          <Typography
          sx={{
            fontWeight:'400',
            fontSize:'14px',
            lineHeight:'19.6px',
            color:'#797979'
          }}
          >
            Beranda
            </Typography>

            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 6C6.5 6.23051 6.4292 6.42712 6.26991 6.60339L1.66814 11.7763C1.53835 11.9254 1.37906 12 1.19027 12C0.806785 12 0.5 11.661 0.5 11.2136C0.5 10.9966 0.582596 10.8 0.70649 10.6508L4.85988 6L0.70649 1.34915C0.576696 1.19322 0.5 0.99661 0.5 0.779661C0.5 0.338983 0.806785 0 1.19027 0C1.37906 0 1.53835 0.0745763 1.66814 0.223729L6.26991 5.39661C6.4233 5.57288 6.5 5.76949 6.5 6Z" fill="#797979"/>
</svg>

      <Typography
          sx={{
            fontWeight:'400',
            fontSize:'14px',
            lineHeight:'19.6px',
            color:'#797979'
          }}
          >
            Kelas(Sma)
            </Typography>

            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 6C6.5 6.23051 6.4292 6.42712 6.26991 6.60339L1.66814 11.7763C1.53835 11.9254 1.37906 12 1.19027 12C0.806785 12 0.5 11.661 0.5 11.2136C0.5 10.9966 0.582596 10.8 0.70649 10.6508L4.85988 6L0.70649 1.34915C0.576696 1.19322 0.5 0.99661 0.5 0.779661C0.5 0.338983 0.806785 0 1.19027 0C1.37906 0 1.53835 0.0745763 1.66814 0.223729L6.26991 5.39661C6.4233 5.57288 6.5 5.76949 6.5 6Z" fill="#797979"/>
</svg>

    <Typography
          sx={{
            fontWeight:'400',
            fontSize:'14px',
            lineHeight:'19.6px',
            color:'#797979'
          }}
          >
            Bahasa Inggris
            </Typography>

        </Box>

        <Box
         sx={{
          width:'32px',
          height:'32px',
          borderRadius:'32px',
          background:'#FFFFFF',
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
         }}
        >

          <Link to='..\'>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.38263 14C5.38263 13.7264 5.50118 13.4529 5.71091 13.2614L11.702 7.26112C11.9391 7.03315 12.1853 6.94196 12.4315 6.94196C13.006 6.94196 13.4164 7.3432 13.4164 7.89033C13.4164 8.17302 13.307 8.41923 13.1246 8.6016L11.0819 10.6716L8.39187 13.1337L10.5166 13.006H21.6052C22.1979 13.006 22.6174 13.4073 22.6174 14C22.6174 14.5836 22.1979 14.994 21.6052 14.994H10.5166L8.38275 14.8663L11.0819 17.3284L13.1246 19.3984C13.307 19.5717 13.4164 19.8179 13.4164 20.1005C13.4164 20.6477 13.006 21.058 12.4315 21.058C12.1853 21.058 11.9391 20.9577 11.7203 20.748L5.71091 14.7386C5.50118 14.538 5.38263 14.2736 5.38263 14Z" fill="#2A4088" fill-opacity="0.65"/>
</svg>
          </Link>
        

        </Box>
        
        <Box
        >
         <Typography
          sx={{
            fontWeight:'700',
            fontSize:'48px',
            lineHeight:'52.8px',
            color:'#202020',
            marginBottom:'5px'
          }}
         >
          Kelas Bahasa Inggris
         </Typography>

         <Typography
          sx={{
            fontWeight:'400',
            fontSize:'28px',
            lineHeight:'33.6px',
            color:'#4D4D4D'
          }}
         >
         Tingkat : Dasar
         </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column',
          gap:'32px'
        }}
      >
        <Box
          sx={{
            width:'100%',
            height:'660px',
            borderRadius:'32px',
            display:'flex',
            justifyContent:'center',
            
          }}
        >
          <img src={IMGKelas} alt="" width="100%" height="100%" />

        </Box>

      </Box>
    </Box>
  )
}

export default KelasDetailContent