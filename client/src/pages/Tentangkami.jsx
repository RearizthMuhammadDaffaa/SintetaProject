import React from 'react'
import AboutUsBanner from '../components/AboutUsBanner'
import AboutUsContent from '../components/AboutUsContent'
import { Box } from '@mui/material'
import VisiMisi from '../components/VisiMisi'
import AboutUsRegister from '../components/AboutUsRegister'

const Tentangkami = () => {
  return (
    <Box
      sx={{
        gap:'50px',
        width:'100%',
        height:'100%'
      }}
    >

      <AboutUsBanner />
      <AboutUsContent />
      
      <VisiMisi />
      <AboutUsRegister />
    </Box>
  )
}

export default Tentangkami