import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Program from '../components/Program'
import Promo from '../components/Promo'
import { Box } from '@mui/material'
import BannerKelolosan from '../components/BannerKelolosan'
import BannerFasilitas from '../components/BannerFasilitas'
import SectionBanner from '../components/SectionBanner'
import HomeTestimoni from '../components/HomeTestimoni'
import ArtikelHome from '../components/ArtikelHome'
import MapHome from '../components/MapHome'

const Beranda = () => {
  return (
    <Box
     sx={{
       width:'100%',
       height:'100%',
       overflowX:'hidden',
       position:"relative"
     }}
    >
     <HeroBanner />
     <BannerKelolosan />
     <Promo />
     <Program />
     <BannerFasilitas />
     <SectionBanner />
     <HomeTestimoni />
     <ArtikelHome />
     <MapHome />


   
    </Box>
  )
}

export default Beranda