import { Box } from '@mui/material'
import React from 'react'
import BuktiKelolosanBanner from '../components/BuktiKelolosan/BuktiKelolosanBanner'
import About from '../components/BuktiKelolosan/About'
import SectionCerita from '../components/BuktiKelolosan/SectionCerita'
import SectionContent from '../components/BuktiKelolosan/SectionContent'
import AluminSection from '../components/BuktiKelolosan/AluminSection'
import Banner from '../components/BuktiKelolosan/Banner'

const BuktiKelolosan = () => {
  return (
   <Box
    sx={{
      width:'100%',
      height:'100%',
      overflowX:'hidden'
    }}
   >
    <BuktiKelolosanBanner />
    <About />
    <SectionCerita />
    <SectionContent />
    <AluminSection />
    <Banner /> 
   </Box>
  )
}

export default BuktiKelolosan