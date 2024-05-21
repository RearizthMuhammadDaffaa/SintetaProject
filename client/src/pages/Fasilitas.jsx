import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import icon from '../assets/img/Icon.png'
import { data_fasilitas } from '../utils/dataFasilitas'
import SectionTitle from '../components/SectionTitle'
import axios from 'axios'
const Fasilitas = () => {


  const [data,setData] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL

  const [image,setImage] = useState('');
  const [loading, setLoading] = useState(true);
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
      const response = await axios.get(`${baseUrl}facility`);
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

  return (
    <Box
    sx={{
      width:'100%',
      height:'100%',
      padding:'120px 0',
      gap:'70px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }}
    >
       {/* <Box sx={{
          width:{md:'327px',lg:'327px',sm:'100%',xs:'100%'},
          height:{md:'89px',lg:'89px',sm:'60px',xs:'60px'},
          position:'relative',
          gap:'32px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
         
          
        }}>
        <Typography
          sx={{
            fontSize:{md:'48px',lg:'48px',sm:'30px',xs:'30px'},
            lineHeight:'52.8px',
            fontWeight:'700',
            color:'#2A4088',
           
          }}
        >
          Fasilitas 
        </Typography>
        <span style={{
          display:'block',
          width:'100px',
          height:'4px',
          background:'#FFE528',
          position:'absolute',
          bottom:'0',
          
          }}></span>
        </Box> */}

        <SectionTitle title="Fasilitas"/>
      
      <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      flexWrap='wrap'
      gap='173px'
     
      >

        {data.map((item,i)=>(
             <Box
             sx={{
               width:'300px',
               height:'250px',
               gap:'32px',
               display:'flex',
               flexDirection:'column',
               justifyContent:'center',
               alignItems:'center'
             }}
           >
             <img src={item.image} alt="" width='100' height='100'/>
             <Typography
             sx={{
               fontWeight:'600',
               fontSize:'24px',
               lineHeight:'28.8px',
               textAlign:'center',
               color:'#61B3E3'
             }}
             >{item.about}</Typography>
   
             <Typography
               sx={{
                 fontWeight:'500',
                 fontSize:'16px',
                 lineHeight:'22.4px',
                 textAlign:'center',
                 color:'#4B4D52'
               }}
             >
            {item.description}
             </Typography>
           </Box>
        ))}

       
      
       
    
      </Stack>
    </Box>
  )
}

export default Fasilitas