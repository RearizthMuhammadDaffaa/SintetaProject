import { Box } from '@mui/material'
import React from 'react'
import AboutKelas from '../components/AboutKelas'
import DaftarKelas from '../components/DaftarKelas'
import AnotherAboutKelas from '../components/AnotherAboutKelas'
import KelasBanner from '../components/KelasBanner'

const Kelas = () => {
  return (
    <Box
    sx={{
      width:'100%',
      height:'100%',
      padding:'120px 0px'
    }}
    >
      <AboutKelas />
      <DaftarKelas />
      <AnotherAboutKelas />
      <KelasBanner />
    </Box>
  )
}

export default Kelas