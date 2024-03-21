import { useState } from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Beranda from './pages/Beranda'
import { Box, Container } from '@mui/material'
import Footer from './components/Footer'
import Tentangkami from './pages/Tentangkami'
import Fasilitas from './pages/Fasilitas'
import Kelas from './pages/Kelas'
import KelasDetail from './pages/KelasDetail'

function App() {
 

  return (
    <Box sx={{
      padding:'0',
      margin:'0'
    }}>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Beranda />}/>
        <Route path='/tentangkami' element={<Tentangkami />}/>
        <Route path='/fasilitas' element={<Fasilitas />}/>
        <Route path='/kelas' element={<Kelas />}/>
        <Route path='/kelas/:id' element={<KelasDetail />}/>
      </Routes>
      <Footer />
    </Box>
  )
}

export default App