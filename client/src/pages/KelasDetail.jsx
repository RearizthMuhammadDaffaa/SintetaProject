import { Box } from '@mui/material'
import React from 'react'
import KelasDetailContent from '../components/KelasDetailContent'

const KelasDetail = () => {
  return (
    <Box
      sx={{
        width:'100%',
        height:'100%'
      }}
    >
      <KelasDetailContent />
    </Box>
  )
}

export default KelasDetail