import { Box } from '@mui/material'
import React from 'react'

import Banner1 from "../assets/img/Banner (2).png"
import Banner2 from "../assets/img/Banner (3).png"
import banner3 from "../assets/PromoImg/Section Banner.png"

const SectionBanner = () => {
  return (
    <Box
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        marginBottom:'100px',
        paddingLeft:{md:'50px',xs:'0'},
        boxSizing:'border-box',
        gap:'32px',
        flexDirection:{md:'row',xs:'column'}
      }}
    >
      {/* <Box
        sx={{
          width:'100%',
          height:'100%'
        }}
      >

        <img src={Banner1} alt="" style={{ maxWidth: '100%', height: 'auto' }}/>

      </Box> */}

<img src={banner3} alt="" style={{ maxWidth: '100%', height: 'auto' }}/>
    

    </Box>
  )
}

export default SectionBanner