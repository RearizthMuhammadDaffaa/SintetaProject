import { Box, Typography } from '@mui/material'
import React from 'react'

const AnotherAboutKelas = () => {
  return (
    <Box
    sx={{
      width:'100%',
      height:'430px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}
    >

<Box
sx={{
  width:'812px',
  height:'350px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',

}}
>
<Typography
          sx={{
            fontWeight:'400',
            fontSize:'16px',
            lineHeight:'22.4px',
            color:'#4D4D4D',
            font:'Plus Jakarta Sans'
          }}
      >
      Dengan mengikuti kelas-kelas ini, siswa diharapkan dapat mempersiapkan diri secara komprehensif untuk menghadapi berbagai tahapan seleksi masuk PTN dengan percaya diri dan meraih hasil yang optimal.
      </Typography>
</Box>
      
    </Box>
  )
}

export default AnotherAboutKelas