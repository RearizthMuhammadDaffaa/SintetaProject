import { Box } from '@mui/material'
import React from 'react'
import SectionTitle from '../SectionTitle'

const SectionCerita = () => {
  return (
    <Box
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        padding:'100px 0px',
        gap:'10px',
        background:'rgba(127, 176, 205, 0.25)'
      }}
    >

      <SectionTitle title="Simak Cerita Mereka"/>

      <Box
        sx={{
          width:"100%",
          height:'100%',
          display:'flex',
          justifyContent:'center'
        }}
      >

<iframe width="560" height="315" src="https://www.youtube.com/embed/H0FswjO4caE?si=fSIQ4F5AZSpl9NhZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </Box>

    </Box>
  )
}

export default SectionCerita