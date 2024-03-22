import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Program from '../components/Program'
import Promo from '../components/Promo'
import { Box } from '@mui/material'
import BannerKelolosan from '../components/BannerKelolosan'
import BannerFasilitas from '../components/BannerFasilitas'

const Beranda = () => {
  return (
    <Box
     sx={{
       width:'100%',
       height:'100%'
     }}
    >
     <HeroBanner />
     <BannerKelolosan />
     <Promo />
     <Program />
     <BannerFasilitas />
    </Box>
  )
}

export default Beranda