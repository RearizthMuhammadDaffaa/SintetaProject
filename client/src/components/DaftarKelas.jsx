import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import gambar from '../assets/img/Gambar.png'
import gambar2 from "../assets/imgClass/Gambar (27).png"
import gambar3 from "../assets/imgClass/Gambar (28).png"
import gambar4 from "../assets/imgClass/Gambar (29).png"
import gambar5 from "../assets/imgClass/Gambar (30).png"
import gambar6 from "../assets/imgClass/Gambar (31).png"
import vektor from '../assets/img/Vector (1).png'

const DaftarKelas = () => {
  return (
    <Box
    sx={{
      padding:'120px 0',
      position:'relative',
    }}
    >

      <Box
        sx={{
          width:'100%',
          height:'100%',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',

        }}
      >
         <Box sx={{
          width:{md:'327px',lg:'327px',sm:'100%',xs:'100%'},
          height:{md:'89px',lg:'89px',sm:'60px',xs:'60px'},
          position:'relative',
          gap:'32px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'50px'
          
        }}>
        <Typography
          sx={{
            fontSize:{md:'48px',lg:'48px',sm:'30px',xs:'30px'},
            lineHeight:'52.8px',
            fontWeight:'700',
            color:'#38B6FF',
           
          }}
        >
         Daftar Kelas
        </Typography>
        <span style={{
          display:'block',
          width:'100px',
          height:'4px',
          background:'#FFE528',
          position:'absolute',
          bottom:'0',
          
          }}></span>
        </Box>

        <Stack 
      
        direction='row'
        flexWrap='wrap'
        justifyContent='center'
        gap='35px'
        sx={{
          width:'100%',
          height:'100%',
         
          backgroundRepeat: "no-repeat",
       
        }}
        >
          <Card sx={{
            width:'390px',
            height:'512px',
            gap:'30px',
            zIndex:'1'
          }}>
            <CardMedia 
              component='img'
              image={gambar}
              height='196'
            />
            <CardContent
            sx={{
              padding:'30px',
             
            }}
            >
              <Typography
              sx={{
                fontWeight:'600',
                fontSize:'24px',
                lineHeight:'28.8px',
                color:'#202020'
              }}
              >
              Kelas Matematika Dasar
              </Typography>

              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'18px',
                lineHeight:'25.2px',
                color:'#38B6FF'
              }}
              >
                Tingkat Dasar
              </Typography>
              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'22.4px',
                color:'#4D4D4D'
              }}
              >
                {" Kelas ini dirancang untuk memperkuat pemahaman dasar siswa dalam matematika. Materi meliputi konsep dasar matematika seperti bilangan, persamaan, geometri, dan fungsi. Siswa akan dilatih untuk menguasai teknik-teknik dasar dalam menyelesaikan soal matematika yang sering muncul dalam ujian masuk PTN.".substring(0,150)+ "..."}
              </Typography>
            </CardContent>
            <CardActions
            sx={{
              padding:'0 30px'
            }}
            >
              <Button variant='contained' sx={{background:'#38B6FF',gap:'10px',borderRadius:'12px'}}> 
                Selengkapnya

                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6914 7.68555C18.6914 7.35352 18.5547 7.02148 18.3105 6.78711L11.9141 0.400391C11.6406 0.126953 11.3477 0 11.0449 0C10.3418 0 9.84375 0.498047 9.84375 1.16211C9.84375 1.51367 9.99023 1.80664 10.2148 2.03125L12.4023 4.23828L14.9707 6.5918L12.7637 6.46484H1.25C0.507812 6.46484 0 6.96289 0 7.68555C0 8.4082 0.507812 8.90625 1.25 8.90625H12.7637L14.9805 8.7793L12.4023 11.1328L10.2148 13.3398C9.99023 13.5547 9.84375 13.8477 9.84375 14.209C9.84375 14.8633 10.3418 15.3613 11.0449 15.3613C11.3477 15.3613 11.6406 15.2441 11.9043 14.9902L18.3105 8.58398C18.5547 8.34961 18.6914 8.01758 18.6914 7.68555Z" fill="white"/>
                </svg>

              </Button>
            </CardActions>
          </Card>
          <Card sx={{
            width:'390px',
            height:'512px',
            gap:'30px',
            zIndex:'1'
          }}>
            <CardMedia 
              component='img'
              image={gambar2}
              height='196'
            />
            <CardContent
            sx={{
              padding:'30px',
             
            }}
            >
              <Typography
              sx={{
                fontWeight:'600',
                fontSize:'24px',
                lineHeight:'28.8px',
                color:'#202020'
              }}
              >
              Kelas Bahasa Indonesia
              </Typography>

              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'18px',
                lineHeight:'25.2px',
                color:'#38B6FF'
              }}
              >
                Tingkat Dasar
              </Typography>
              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'22.4px',
                color:'#4D4D4D'
              }}
              >
                {" Kelas ini bertujuan untuk meningkatkan kemampuan siswa dalam memahami dan menggunakan Bahasa Indonesia secara baik dan benar. Materi meliputi tata bahasa, kosa kata, membaca pemahaman, menulis esai, dan berbicara secara efektif. Siswa akan dilatih untuk menguasai keterampilan bahasa Indonesia yang dibutuhkan dalam ujian tulis maupun wawancara seleksi masuk PTN.".substring(0,150)+ "..."}
              </Typography>
            </CardContent>
            <CardActions
            sx={{
              padding:'0 30px'
            }}
            >
              <Button variant='contained' sx={{background:'#38B6FF',gap:'10px',borderRadius:'12px'}}> 
                Selengkapnya

                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6914 7.68555C18.6914 7.35352 18.5547 7.02148 18.3105 6.78711L11.9141 0.400391C11.6406 0.126953 11.3477 0 11.0449 0C10.3418 0 9.84375 0.498047 9.84375 1.16211C9.84375 1.51367 9.99023 1.80664 10.2148 2.03125L12.4023 4.23828L14.9707 6.5918L12.7637 6.46484H1.25C0.507812 6.46484 0 6.96289 0 7.68555C0 8.4082 0.507812 8.90625 1.25 8.90625H12.7637L14.9805 8.7793L12.4023 11.1328L10.2148 13.3398C9.99023 13.5547 9.84375 13.8477 9.84375 14.209C9.84375 14.8633 10.3418 15.3613 11.0449 15.3613C11.3477 15.3613 11.6406 15.2441 11.9043 14.9902L18.3105 8.58398C18.5547 8.34961 18.6914 8.01758 18.6914 7.68555Z" fill="white"/>
                </svg>

              </Button>
            </CardActions>
          </Card>
          <Card sx={{
            width:'390px',
            height:'512px',
            gap:'30px',
            zIndex:'1'
          }}>
            <CardMedia 
              component='img'
              image={gambar3}
              height='196'
            />
            <CardContent
            sx={{
              padding:'30px',
             
            }}
            >
              <Typography
              sx={{
                fontWeight:'600',
                fontSize:'24px',
                lineHeight:'28.8px',
                color:'#202020'
              }}
              >
              Kelas IPA
              </Typography>

              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'18px',
                lineHeight:'25.2px',
                color:'#38B6FF'
              }}
              >
                Tingkat Dasar
              </Typography>
              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'22.4px',
                color:'#4D4D4D'
              }}
              >
                {" Kelas ini fokus pada pemahaman konsep-konsep dasar dalam ilmu pengetahuan alam seperti fisika, kimia, dan biologi. Siswa akan mempelajari materi-materi yang sering diujikan dalam seleksi masuk PTN, serta dilatih untuk memecahkan soal-soal yang membutuhkan pemahaman konsep dan penerapan rumus ilmiah.".substring(0,150)+ "..."}
              </Typography>
            </CardContent>
            <CardActions
            sx={{
              padding:'0 30px'
            }}
            >
              <Button variant='contained' sx={{background:'#38B6FF',gap:'10px',borderRadius:'12px'}}> 
                Selengkapnya

                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6914 7.68555C18.6914 7.35352 18.5547 7.02148 18.3105 6.78711L11.9141 0.400391C11.6406 0.126953 11.3477 0 11.0449 0C10.3418 0 9.84375 0.498047 9.84375 1.16211C9.84375 1.51367 9.99023 1.80664 10.2148 2.03125L12.4023 4.23828L14.9707 6.5918L12.7637 6.46484H1.25C0.507812 6.46484 0 6.96289 0 7.68555C0 8.4082 0.507812 8.90625 1.25 8.90625H12.7637L14.9805 8.7793L12.4023 11.1328L10.2148 13.3398C9.99023 13.5547 9.84375 13.8477 9.84375 14.209C9.84375 14.8633 10.3418 15.3613 11.0449 15.3613C11.3477 15.3613 11.6406 15.2441 11.9043 14.9902L18.3105 8.58398C18.5547 8.34961 18.6914 8.01758 18.6914 7.68555Z" fill="white"/>
                </svg>

              </Button>
            </CardActions>
          </Card>
          <Card sx={{
            width:'390px',
            height:'512px',
            gap:'30px',
            zIndex:'1'
          }}>
            <CardMedia 
              component='img'
              image={gambar4}
              height='196'
            />
            <CardContent
            sx={{
              padding:'30px',
             
            }}
            >
              <Typography
              sx={{
                fontWeight:'600',
                fontSize:'24px',
                lineHeight:'28.8px',
                color:'#202020'
              }}
              >
              Kelas IPS
              </Typography>

              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'18px',
                lineHeight:'25.2px',
                color:'#38B6FF'
              }}
              >
                Tingkat Dasar
              </Typography>
              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'22.4px',
                color:'#4D4D4D'
              }}
              >
                {"Kelas ini menitikberatkan pada pemahaman konsep-konsep dasar dalam ilmu pengetahuan sosial seperti sejarah, geografi, dan ekonomi. Siswa akan mempelajari materi-materi yang relevan dengan bidang studi sosial-humaniora, serta dilatih untuk menganalisis dan menafsirkan informasi dalam soal-soal ujian masuk PTN.".substring(0,150)+ "..."}
              </Typography>
            </CardContent>
            <CardActions
            sx={{
              padding:'0 30px'
            }}
            >
              <Button variant='contained' sx={{background:'#38B6FF',gap:'10px',borderRadius:'12px'}}> 
                Selengkapnya

                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6914 7.68555C18.6914 7.35352 18.5547 7.02148 18.3105 6.78711L11.9141 0.400391C11.6406 0.126953 11.3477 0 11.0449 0C10.3418 0 9.84375 0.498047 9.84375 1.16211C9.84375 1.51367 9.99023 1.80664 10.2148 2.03125L12.4023 4.23828L14.9707 6.5918L12.7637 6.46484H1.25C0.507812 6.46484 0 6.96289 0 7.68555C0 8.4082 0.507812 8.90625 1.25 8.90625H12.7637L14.9805 8.7793L12.4023 11.1328L10.2148 13.3398C9.99023 13.5547 9.84375 13.8477 9.84375 14.209C9.84375 14.8633 10.3418 15.3613 11.0449 15.3613C11.3477 15.3613 11.6406 15.2441 11.9043 14.9902L18.3105 8.58398C18.5547 8.34961 18.6914 8.01758 18.6914 7.68555Z" fill="white"/>
                </svg>

              </Button>
            </CardActions>
          </Card>
          <Card sx={{
            width:'390px',
            height:'512px',
            gap:'30px',
            zIndex:'1'
          }}>
            <CardMedia 
              component='img'
              image={gambar5}
              height='196'
            />
            <CardContent
            sx={{
              padding:'30px',
             
            }}
            >
              <Typography
              sx={{
                fontWeight:'600',
                fontSize:'24px',
                lineHeight:'28.8px',
                color:'#202020'
              }}
              >
              Kelas TPA
              </Typography>

              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'18px',
                lineHeight:'25.2px',
                color:'#38B6FF'
              }}
              >
                Tingkat Dasar
              </Typography>
              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'22.4px',
                color:'#4D4D4D'
              }}
              >
                {"Kelas ini menyediakan latihan dan strategi khusus untuk menghadapi tes potensi akademik (TPA) yang sering menjadi bagian dari seleksi masuk PTN. Siswa akan dilatih untuk mengembangkan kemampuan logika, verbal, dan numerik mereka melalui latihan soal-soal TPA yang representatif.".substring(0,150)+ "..."}
              </Typography>
            </CardContent>
            <CardActions
            sx={{
              padding:'0 30px'
            }}
            >
              <Button variant='contained' sx={{background:'#38B6FF',gap:'10px',borderRadius:'12px'}}> 
                Selengkapnya

                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6914 7.68555C18.6914 7.35352 18.5547 7.02148 18.3105 6.78711L11.9141 0.400391C11.6406 0.126953 11.3477 0 11.0449 0C10.3418 0 9.84375 0.498047 9.84375 1.16211C9.84375 1.51367 9.99023 1.80664 10.2148 2.03125L12.4023 4.23828L14.9707 6.5918L12.7637 6.46484H1.25C0.507812 6.46484 0 6.96289 0 7.68555C0 8.4082 0.507812 8.90625 1.25 8.90625H12.7637L14.9805 8.7793L12.4023 11.1328L10.2148 13.3398C9.99023 13.5547 9.84375 13.8477 9.84375 14.209C9.84375 14.8633 10.3418 15.3613 11.0449 15.3613C11.3477 15.3613 11.6406 15.2441 11.9043 14.9902L18.3105 8.58398C18.5547 8.34961 18.6914 8.01758 18.6914 7.68555Z" fill="white"/>
                </svg>

              </Button>
            </CardActions>
          </Card>
          <Card sx={{
            width:'390px',
            height:'512px',
            gap:'30px',
            zIndex:'1'
          }}>
            <CardMedia 
              component='img'
              image={gambar6}
              height='196'
            />
            <CardContent
            sx={{
              padding:'30px',
             
            }}
            >
              <Typography
              sx={{
                fontWeight:'600',
                fontSize:'24px',
                lineHeight:'28.8px',
                color:'#202020'
              }}
              >
              Kelas Bahasa Inggris
              </Typography>

              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'18px',
                lineHeight:'25.2px',
                color:'#38B6FF'
              }}
              >
                Tingkat Dasar
              </Typography>
              <Typography
              sx={{
                fontWeight:'400',
                fontSize:'16px',
                lineHeight:'22.4px',
                color:'#4D4D4D'
              }}
              >
                {"Kelas Bahasa Inggris merupakan program yang dirancang untuk meningkatkan kemampuan siswa dalam berbicara, mendengarkan, membaca, dan menulis dalam bahasa Inggris. Dalam kelas ini, siswa akan diajak untuk mempelajari tata bahasa (grammar), kosakata (vocabulary), serta pola-pola kalimat yang umum digunakan dalam komunikasi sehari-hari dan situasi akademis. Selain itu, siswa akan diberikan kesempatan untuk berlatih berbicara dalam berbagai konteks, termasuk percakapan formal dan informal, presentasi, serta diskusi kelompok. Melalui pendekatan yang interaktif dan mendidik, kelas Bahasa Inggris bertujuan untuk meningkatkan kepercayaan diri siswa dalam menggunakan bahasa Inggris serta mempersiapkan mereka menghadapi ujian masuk PTN yang memerlukan kemampuan bahasa Inggris yang baik.".substring(0,150)+ "..."}
              </Typography>
            </CardContent>
            <CardActions
            sx={{
              padding:'0 30px'
            }}
            >
              <Button variant='contained' sx={{background:'#38B6FF',gap:'10px',borderRadius:'12px'}}> 
                Selengkapnya

                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6914 7.68555C18.6914 7.35352 18.5547 7.02148 18.3105 6.78711L11.9141 0.400391C11.6406 0.126953 11.3477 0 11.0449 0C10.3418 0 9.84375 0.498047 9.84375 1.16211C9.84375 1.51367 9.99023 1.80664 10.2148 2.03125L12.4023 4.23828L14.9707 6.5918L12.7637 6.46484H1.25C0.507812 6.46484 0 6.96289 0 7.68555C0 8.4082 0.507812 8.90625 1.25 8.90625H12.7637L14.9805 8.7793L12.4023 11.1328L10.2148 13.3398C9.99023 13.5547 9.84375 13.8477 9.84375 14.209C9.84375 14.8633 10.3418 15.3613 11.0449 15.3613C11.3477 15.3613 11.6406 15.2441 11.9043 14.9902L18.3105 8.58398C18.5547 8.34961 18.6914 8.01758 18.6914 7.68555Z" fill="white"/>
                </svg>

              </Button>
            </CardActions>
          </Card>
        
          
     

        </Stack>

      </Box>
      <Box 
     sx={{
      position:'absolute',
      bottom:'0',
      zIndex:'0',
      width:{md:'100%',xs:'100%'}
     }}
     >
     <svg width="100%" height="389" viewBox="0 0 1440 389" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 129.667H60C120 129.667 240 129.667 360 151.278C480 172.889 600 216.111 720 244.926C840 273.741 960 288.148 1080 244.926C1200 201.704 1320 100.852 1380 50.4259L1440 0V389H1380C1320 389 1200 389 1080 389C960 389 840 389 720 389C600 389 480 389 360 389C240 389 120 389 60 389H0V129.667Z" fill="#38B6FF"/>
</svg>

     </Box>
    </Box>
  )
}

export default DaftarKelas