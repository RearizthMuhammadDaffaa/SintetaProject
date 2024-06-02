import { Box, Button, InputBase, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import SectionTitle from '../SectionTitle'
import CardSiswa from './CardSiswa'
import { data_Siswa } from '../../utils/dataSiswa'
import { useState } from 'react'
import TableKelolosan from './TableKelolosan'
import axios from 'axios'

const SectionContent = () => {
  const [active,setActive] = useState(false);
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);
  const [selectedSiswa, setSelectedSiswa] = useState(null); // State untuk menyimpan data siswa yang dipilih
  const [display,setDisplay] = useState('flex')
  const [year,setYear] = useState('2024')
  const baseUrl = import.meta.env.VITE_BASE_URL

  // Fungsi untuk menampilkan CardSiswa
  const handleShowCard = (siswa) => {
    setSelectedSiswa(siswa);
    setDisplay('none')
  };

  // Fungsi untuk menyembunyikan CardSiswa
  const handleCloseCard = () => {
    setSelectedSiswa(null);
    setDisplay('flex')
  };



  
  
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
      }}
    >

      <SectionTitle title="SINTETA Story"/>

{/* filter */}

      {/* <Box
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          gap:'20px'
        }}
      >
        <Box
        component="div"      
        sx={{
          padding:'8px 16px',
          border:'1px solid #E5EAF1',
          background:'#E5EAF1',
          width:'100%',
          height:'33px',
          gap:'8px',
          borderRadius:'20px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'20px',
          cursor:'pointer'
        }}
        >
          <Typography
            sx={{
              fontWeight:'600',
              fontSize:'12px',
              lineHeight:'16.8px',
              color:'#4D4D4D'
            }}
          >
            Semua
          </Typography>

        </Box>

        <Box
        component="div"      
        sx={{
          padding:'8px 16px',
          border:'1px solid #E5EAF1',
          background:'#E5EAF1',
          height:'33px',        
          gap:'8px',
          borderRadius:'20px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'20px',
          cursor:'pointer'
        }}
        >
          <Typography
            sx={{
              fontWeight:'600',
              fontSize:'12px',
              lineHeight:'16.8px',
              color:'#A6A6A6'
            }}
          >
            SD
          </Typography>

        </Box>
        <Box
        component="div"      
        sx={{
          padding:'8px 16px',
          border:'1px solid #E5EAF1',
          background:'#E5EAF1',
          height:'33px',
          gap:'8px',
          borderRadius:'20px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'20px',
          cursor:'pointer'
        }}
        >
          <Typography
            sx={{
              fontWeight:'600',
              fontSize:'12px',
              lineHeight:'16.8px',
              color:'#A6A6A6'
            }}
          >
            SMP
          </Typography>

        </Box>
        <Box
        component="div"      
        sx={{
          padding:'8px 16px',
          border:'1px solid #E5EAF1',
          background:'#E5EAF1',
          height:'33px',
          gap:'8px',
          borderRadius:'20px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'20px',
          cursor:'pointer'
        }}
        >
          <Typography
            sx={{
              fontWeight:'600',
              fontSize:'12px',
              lineHeight:'16.8px',
              color:'#A6A6A6'
            }}
          >
            SD
          </Typography>

        </Box>
        

      </Box> */}
    {/* search bar */}
      {/* <Box
       sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        
       }}
      >
        <Box
        sx={{
          width:{md:"520px",xs:'320px'},
          display:active ? "block":"none",
          transition: " display.2 ease-in-out"
        }}
        >
        <Typography
          sx={{
            alignSelf:'flex-start',
            opacity: active ? 1 : 0,
          transition: "opacity .2s ease-in-out",
          color:'#A6A6A6',
          fontSize:'18px',
          fontWeight:'400',
          lineHeight:'25.2px'
          }}
        >
          Cari Nama Siswa,PTN,Asal Sekolah
        </Typography>
        </Box>
       
        <Box
          sx={{
            display:'flex',
           
            alignItems:'center',
            gap:'16px',
            border:'1px solid #DFE5EE',
           
            padding:'12px',
            borderRadius:'12px',
            width:{md:"520px",xs:'320px'},
            marginBottom:'20px'
          }}
        >

          <Box
            sx={{
              maxWidth:'50px',
              height:'50px'
            }}
          >
              <svg width="100%" height="auto" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="50" rx="8" fill="url(#paint0_linear_695_1046)"/>
              <path d="M13 22.8072C13 28.2169 17.4377 32.6145 22.8967 32.6145C24.9271 32.6145 26.7872 32 28.3435 30.9518L33.9362 36.494C34.2766 36.8434 34.7508 37 35.2249 37C36.2584 37 37 36.2289 37 35.2289C37 34.747 36.8298 34.3012 36.5015 33.9639L30.9453 28.4458C32.1003 26.8675 32.7933 24.9157 32.7933 22.8072C32.7933 17.3976 28.3556 13 22.8967 13C17.4377 13 13 17.3976 13 22.8072ZM15.5775 22.8072C15.5775 18.8072 18.848 15.5542 22.8967 15.5542C26.9331 15.5542 30.2158 18.8072 30.2158 22.8072C30.2158 26.8072 26.9331 30.0602 22.8967 30.0602C18.848 30.0602 15.5775 26.8072 15.5775 22.8072Z" fill="white"/>
              <defs>
              <linearGradient id="paint0_linear_695_1046" x1="25" y1="0" x2="25" y2="50" gradientUnits="userSpaceOnUse">
              <stop stop-color="#38B6FF"/>
              <stop offset="1" stop-color="#A1C6DB"/>
              </linearGradient>
              </defs>
              </svg>

          </Box>

            <Box
              sx={{
                width:'100%'
              }}
            >
              <InputBase
              onBlur={()=>{
                setActive(!active) 
                console.log(active)}}
              
              onFocus={()=>{
                setActive(!active) 
                console.log(active)}}

                onChange={handleSearch}
              sx={{
                '&:focus': {
                  // Gaya yang akan diterapkan ketika tombol dalam keadaan aktif (ditekan)
                  backgroundColor: 'green', // Ubah warna latar belakang saat tombol ditekan
                },
              }} 
              fullWidth='true' placeholder='Cari Nama Siswa,PTN,Asal Sekolah'/>
            </Box>
            
        </Box>
       

      </Box> */}

   

{/* card list */}
       <Stack
        justifyContent='center'
        alignItems='center'
        direction="row"
        flexWrap='wrap'
        gap="10px"
        mb={5}
       > 

<Box
      display="flex"
      
     
      flexDirection="column"
      width={{md:'100%',xs:'50%'}}
      
      px={4}
      >
        <Typography variant='h6' fontWeight='600' fontSize={{md:"24px",xs:'20px'}} textAlign='center'  lineHeight="28px">
          Para Siswa yang Lolos PTN Impian
        </Typography>
        <Typography variant='body2'  textAlign='center'>
        Lihat testimoni mereka tentang bimbel SINTETA
        </Typography>

        <Box
        sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          gap:'20px',
          marginTop:'10px'
        }}
      >
        <Box
        onClick={()=>setYear('2022')}
        component="div"      
        sx={{
          padding:'8px 16px',
          border:'1px solid #E5EAF1',
          background:'#E5EAF1',
          width:'60px',
          height:'33px',
          gap:'8px',
          borderRadius:'20px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'20px',
          cursor:'pointer'
        }}
        >
          <Typography
            sx={{
              fontWeight:'600',
              fontSize:'12px',
              lineHeight:'16.8px',
              color : year == '2022' ? '#4D4D4D':'#A6A6A6'
            }}
          >
            2022
          </Typography>

        </Box>

        <Box
        onClick={()=>setYear('2023')}
        component="div"      
        sx={{
          padding:'8px 16px',
          border:'1px solid #E5EAF1',
          background:'#E5EAF1',
          height:'33px',
          width:'63px',       
          gap:'8px',
          borderRadius:'20px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'20px',
          cursor:'pointer'
        }}
        >
          <Typography
            sx={{
              fontWeight:'600',
              fontSize:'12px',
              lineHeight:'16.8px',
              color : year == '2023' ? '#4D4D4D':'#A6A6A6'
            }}
          >
            2023
          </Typography>

        </Box>

        <Box
        onClick={()=>setYear('2024')}
        component="div"      
        sx={{
          padding:'8px 16px',
          border:'1px solid #E5EAF1',
          background:'#E5EAF1',
          height:'33px',
          width:'63px',       
          gap:'8px',
          borderRadius:'20px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'20px',
          cursor:'pointer'
        }}
        >
          <Typography
            sx={{
              fontWeight:'600',
              fontSize:'12px',
              lineHeight:'16.8px',
              color : year == '2024' ? '#4D4D4D':'#A6A6A6'
            }}
          >
            2024
          </Typography>

        </Box>
     
     
        

      </Box>
 
      </Box>

      {selectedSiswa && (
        <CardSiswa data={selectedSiswa}/>
      )}

       {/* {data.map((item,i)=>(
           <CardSiswa data={item} key={i}/>
       ))}           */}
       <TableKelolosan setYear={setYear} setSearch={setSearch} year={year} search={search} handleCloseCard={handleCloseCard} handleShowCard={handleShowCard} selectedSiswa={selectedSiswa} display={display}/>
     
      
             
       </Stack>

       {selectedSiswa && (
           <Button
           onClick={handleCloseCard}
          sx={{
           gap:'10px',
           marginBottom:'100px',
           background:'#38B6FF'
          }} variant='contained'>
           
           Lihat Semua
           <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M14.1836 20.4805C14.4766 20.4805 14.7695 20.3633 14.9688 20.1406L24.0391 10.8477C24.2383 10.6484 24.3555 10.3906 24.3555 10.0977C24.3555 9.48828 23.8984 9.01953 23.2891 9.01953C22.9961 9.01953 22.7266 9.13672 22.5273 9.32422L13.5508 18.5H14.8047L5.82812 9.32422C5.64062 9.13672 5.37109 9.01953 5.06641 9.01953C4.45703 9.01953 4 9.48828 4 10.0977C4 10.3906 4.11719 10.6484 4.31641 10.8594L13.3867 20.1406C13.6094 20.3633 13.8789 20.4805 14.1836 20.4805Z" fill="white"/>
   </svg>
   
           </Button>
       )}
     
      
    </Box>
  )
}

export default SectionContent