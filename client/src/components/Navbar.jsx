import React, { useState } from 'react'
import { AppBar,Toolbar ,Box,Typography,Button,Drawer, ListItem, ListItemButton, ListItemText, List, Divider, Container} from '@mui/material'
import logo from "../assets/img/Logo Bimbel 1.png"
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  const container = window !== undefined ? () => window().document.body : undefined;
  const drawerWidth = 140;
  // const { window } = props;
  const [mobileOpen,setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',width:'100%' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List sx={{width:'300px'}}>
        
          <ListItem sx={{
             display:'flex',
             flexDirection:'column',
          }}>
            <ListItemButton sx={{ 
               display:'flex',
               flexDirection:'column',
               
              textAlign: 'justify' }}>
      
          <Link 
             to='/'
          style={{
            fontSize:'16px',
            color:'#4B4D52',
            textDecoration:'none'
            }}>Beranda</Link>
         
       
            </ListItemButton>
            <ListItemButton sx={{ 
               display:'flex',
               flexDirection:'column',
              textAlign: 'center' }}>
      
        
          <Link  
            to='/kelas'
          style={{
            fontSize:'16px',
            color:'#4B4D52',
            textDecoration:'none'
            }}>Kelas</Link>
        
       
            </ListItemButton>
            <ListItemButton sx={{ 
               display:'flex',
               flexDirection:'column',
              textAlign: 'center' }}>
      
          <Link  
            to="/kelolosan"
          style={{
            fontSize:'16px',
            color:'#4B4D52',
            textDecoration:'none'
            }}>Bukti Kelolosan</Link>
        
       
            </ListItemButton>
            <ListItemButton sx={{ 
               display:'flex',
               flexDirection:'column',
              textAlign: 'center' }}>
      
       
          <Link  
           to='/fasilitas'
          style={{
            fontSize:'16px',
            color:'#4B4D52',
            textDecoration:'none'
            }}>Fasilitas</Link>
         
       
            </ListItemButton>
            <ListItemButton sx={{ 
               display:'flex',
               flexDirection:'column',
              textAlign: 'center' }}>
      
       
          <Link  style={{
            fontSize:'16px',
            color:'#4B4D52',
            textDecoration:'none'
            }}>Promo Belajar</Link>
        
       
            </ListItemButton>
            <ListItemButton sx={{ 
               display:'flex',
               flexDirection:'column',
              textAlign: 'center' }}>
      
       
          <Link  
           to='/tentangkami'
          style={{
            fontSize:'16px',
            color:'#4B4D52',
            textDecoration:'none'
            }}>Tentang Kami</Link>
           
       
            </ListItemButton>
            <ListItemButton sx={{ 
               display:'flex',
               flexDirection:'column',
              textAlign: 'center' }}>
      
       
           
       
            </ListItemButton>
            <a href="https://exam.bimbel-sinteta.my.id/"
              target='_blank'
            >
               <Button variant="contained"
              sx={{
                width:'100%',
                height:'38px',
                borderRadius:'12px',
                padding:'8px 24px',
                gap:'8px',
                fontSize:'16px',
                background:'#38B6FF'
              }}
              size='small'
              >TryOut</Button>
            </a>
           
          </ListItem>
   
      </List>
    </Box>
  );


  return (
   
    <AppBar 
      sx={{
        padding:'0',
        margin:'0',
        zIndex:'100000000',
        background:'#fff',
        width: '100%'   
      }}
    >
      <Toolbar>
        <Box 
         sx={{
          display:'flex',
          justifyContent:'space-between',
          width:'100%',
          alignItems:'center'
         }}
        >


        <Container
          sx={{
            width:{md:'40%',xs:'100%'},
            
          }}
        >
        <img src={logo} alt="" />
        </Container>
       
        <Box sx={{
         
          display:{xs:'none',md:'flex',sm:"none"},
          alignItems:'center',
         
          gap:'32px',
         
        }}>
          <Link 
          className='active-link'
          to='/'
          style={{
            fontSize:'14px',
            color:'#4B4D52',
            textDecoration:'none'
            }}>Beranda</Link>
          <Link 
             to='/kelas'
          style={{
            fontSize:'14px',
            color:'#4B4D52',
            textDecoration:'none'
            }}>Kelas</Link>
          <Link  
            to="/kelolosan"
          style={{
            fontSize:'14px',
            color:'#4B4D52',
            textDecoration:'none'
            }}>Bukti Kelolosan</Link>
          <Link 
             to='/fasilitas'
          style={{
            fontSize:'14px',
            color:'#4B4D52',
            textDecoration:'none'
            }}>Fasilitas</Link>
          <Link  style={{
           fontSize:'14px',
           color:'#4B4D52',
            textDecoration:'none'
            }}>Promo Belajar</Link>
          <Link 
          to='/tentangkami'
          style={{
            fontSize:'14px',
            color:'#4B4D52',
            textDecoration:'none'
            }}>Tentang Kami</Link>

             <a href="https://exam.bimbel-sinteta.my.id/"
              target='_blank'
            >
               <Button variant="contained"
              sx={{
                width:'100%',
                height:'38px',
                borderRadius:'12px',
                padding:'8px 24px',
                gap:'8px',
                fontSize:'16px',
                background:'#38B6FF'
              }}
              size='small'
              >TryOut</Button>
            </a>
        </Box>

        </Box>
        
        


        <Button
          onClick={handleDrawerToggle}
        >
        <MenuIcon sx={{
          display: { xs: 'flex', sm: 'flex',md:'none' },
          cursor:'pointer'
          }} />
        </Button>
          <Drawer anchor='right' open={mobileOpen} onClose={handleDrawerToggle}>
            {drawer}
          </Drawer>
        
         
      </Toolbar>
    </AppBar>
   
  )
}

export default Navbar