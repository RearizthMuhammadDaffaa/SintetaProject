import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import pp from "../assets/img/image 44.png"
import pp2 from "../assets/img/image 44 (1).png"
import SectionTitle from './SectionTitle'
import bgCard from "../assets/imgSiswa/Card testimoni Siswa Lolos.png"
import axios from 'axios'

const HomeTestimoni = () => {
 
  const [data,setData] = useState([]);
 const baseUrl = import.meta.env.VITE_BASE_URL
 const [image,setImage] = useState('');
 const [loading, setLoading] = useState(true);
 const [currentPage, setCurrentPage] = useState(1);
 const [itemsPerPage,setItemPerPage] =  useState(2);
 // const imgURL = 'https://api.bimbel-sinteta.id/images/dT1RnoJM.png'
 const fetchImage = async (imageUrl) => {
   try {
     const res = await fetch(imageUrl);
     const imageBlob = await res.blob();
     const imageObjectURL = URL.createObjectURL(imageBlob);
     return imageObjectURL;
   } catch (error) {
     console.error("Error fetching image:", error);
     return null;
   }
 };
 const getData = async () => {
  try {
    const response = await axios.get(`${baseUrl}testimonial`);
    const data = response.data.data;

    // Fetch images for all facilities
    const updatedData = await Promise.all(
      data.map(async (item) => {
        const imageUrl = item.picture;
        const image = await fetchImage(imageUrl);
        return { ...item, image };
      })
    );

    setData(updatedData);
    setLoading(false);
    
  } catch (error) {
    console.error("Error fetching facilities:", error);
  }
};


  useEffect(()=>{
    getData();
    fetchImage();
  },[])

  const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentData = data.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <Box
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'70px',
        flexDirection:'column',
        marginBottom:'100px'

      }}
    >
       <SectionTitle title="Testimoni Kami"/>

        <Box
          sx={{
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            gap:'30px',
            flexWrap:'wrap',
            flexDirection:{md:'row',xs:'column'}
          }}
        >
   
          {currentData.map((item,i)=>(
                 <Box
                 sx={{
                   width:{md:'604px',xs:'100%'},
                   height:{md:'318px',xs:'100%'},
                   borderRadius:'16px',
                   border:'2px solid #E5EAF1',
                   display:'flex',
                   flexDirection:{md:'row',xs:'column'}
                 }}
               >
                 <Box
                   sx={{
                     width:'100%',
                     gap:'24px',
                     padding:'12px',
                     order:{md:'0',xs:'1'}
                   }}
                 >
                   <Typography
                     sx={{
                       fontSize:'24px',
                       fontWeight:'600',
                       lineHeight:'28.8px',
                     }}
                   >
                   {item.name}
                   </Typography>
             
                   <Typography
                     sx={{
                       fontSize:'18px',
                       fontWeight:'700',
                       lineHeight:'25.2px',
                       marginTop:'10px',
                       color:'#38B6FF'
                     }}
                   >
                    {item.graduatedFrom}
                   </Typography>
             
                   <Typography
                     sx={{
                       fontSize:'18px',
                       fontWeight:'700',
                       lineHeight:'25.2px',
                       marginTop:'10px',
                       color:'#38B6FF'
                     }}
                   >{item.major} {item.acceptedSchool}
                   </Typography>
                   <Box
                     sx={{
                       border:'1px solid #E5EAF180',
                       borderRadius:'16px',
                       marginTop:'30px',
                       padding:'10px'
                     }}
                   >
                   <Typography
                     sx={{
                       fontSize:'16px',
                       fontWeight:'400',
                       lineHeight:'22.4px',
                       marginTop:'10px',
                       color:'#4D4D4D'
                     }}
                   >
                    {item.description}
                   </Typography>
                   </Box>
                   
             
                 </Box>
                   
                   <Box
                   component="div"
                   className='container-siswa'
                     sx={{
                       display:'flex',
                       justifyContent:'center',
                       alignItems:'center',
                       
                       width:'100%',
                       order:{md:'0',xs:'0'}
                     }}
                   >
                   <Box
                     sx={{
                       width:'201px',
                       height:'201px'
                     }}
                   >
                      <img src={item.image} alt="" style={{borderRadius:'64px'}} width="100%" height="100%"/>
                   </Box>
                    
                   </Box>
             
               </Box>
          ))}


         

  {/* <Box
    sx={{
      width:{md:'604px',xs:'100%'},
      height:{md:'318px',xs:'100%'},
      borderRadius:'16px',
      border:'2px solid #E5EAF1',
      display:'flex',
      flexDirection:{md:'row',xs:'column'}
    }}
  >
    <Box
      sx={{
        width:'100%',
        gap:'22px',
        padding:'12px',
        order:{md:'0',xs:'1'}
      }}
    >
      <Typography
        sx={{
          fontSize:'24px',
          fontWeight:'600',
          lineHeight:'28.8px',
        }}
      >
        Surya Fatta Hadian
      </Typography>

      <Typography
        sx={{
          fontSize:'18px',
          fontWeight:'700',
          lineHeight:'25.2px',
          marginTop:'10px',
          color:'#38B6FF'
        }}
      >
     SMAN Muhammadiyah 23 Jakarta
      </Typography>

      <Typography
        sx={{
          fontSize:'18px',
          fontWeight:'700',
          lineHeight:'25.2px',
          marginTop:'10px',
          color:'#38B6FF'
        }}
      >Sanitasi Lingkungan-Poltekes JKT II II
      </Typography>
      <Box
        sx={{
          border:'1px solid #E5EAF180',
          borderRadius:'16px',
          marginTop:'30px',
          padding:'10px'
        }}
      >
      <Typography
        sx={{
          fontSize:'16px',
          fontWeight:'400',
          lineHeight:'22.4px',
          marginTop:'10px',
          color:'#4D4D4D'
        }}
      >
        {"dari segi tentornya enak bgt bgt bgt karena bisa berbaur sama murid muridnya, tentornya ga yg mengintimidasi alias chill🤓. kalo cara ngajar enak juga sih kita diajarin sampe paham terus sabar (ka alvin ngga guys karna dia kl dikatain ngatain balik😇). RANKING KU DARI 20 BESAR JADI 10 BESAR SELAMA BELAJAR DI SINTETA🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻. kalo kalian bingung mau kuliah kemana, tenang ada pa badru yg siap sedia mengarahkan. kalo kalian mumet sama mtk, ada ka arya siap bantuin jawab soal mtk yg diluar nalar itu. kalo kalian gangerti biologi, ada ka firyal siap ngejelasin berulang ulang. kalo kalian gasuka fisika, ada ka wau yg bikin fisika jadi gampang dan seru. kalo kalian pusing kimia, ada ka alvin sepuh kimia. jangan lupa log in sinteta guys😜😜😜😇😇🫰🏻🫰🏻🫰🏻".substring(0,150) + "..."}
      </Typography>
      </Box>
      

    </Box>
      
      <Box
       component="div"
       className='container-siswa'
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          
          width:'100%',
          order:{md:'0',xs:'0'}
        }}
      >
      <Box
        sx={{
          width:'201px',
          height:'201px'
        }}
      >
         <img src={pp2} alt="" style={{borderRadius:'64px'}} width="100%" height="100%"/>
      </Box>
       
      </Box>

  </Box> */}
          

        </Box>
        <Button variant='contained' onClick={()=> setItemPerPage(itemsPerPage + 2)}  sx={{
          background:'#61B3E3',
          display: itemsPerPage == data.length ? 'none' : 'block'
        }}>
          Lihat Semua
        </Button>
    </Box>
  )
}

export default HomeTestimoni