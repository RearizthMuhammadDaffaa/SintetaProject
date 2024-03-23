import { Box } from '@mui/material'
import React from 'react'
import SectionTitle from '../SectionTitle'
import Alumni from './Alumni'

const AluminSection = () => {
  return (
   <Box
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginTop:'100px',
        marginBottom:'100px'
      }}
   >

    <SectionTitle title="Apa Kata Almuni?"/>
    <Alumni />
    
   </Box>
  )
}

export default AluminSection