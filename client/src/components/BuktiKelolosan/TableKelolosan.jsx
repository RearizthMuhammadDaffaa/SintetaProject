import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { data_Siswa } from '../../utils/dataSiswa';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import CardSiswa from './CardSiswa';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#38B6FF',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor:"#FFFFFF",
  },
  '&:nth-of-type(even)':{
    backgroundColor:'#38B6FF26'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];





const TableKelolosan = ({search,handleShowCard,handleCloseCard,selectedSiswa,display}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const pageNumbers = [];

  

  const filteredData = data_Siswa.filter((siswa) =>
  siswa.nama.toLowerCase().includes(search.toLowerCase())
);

for(let i = 1; i <= Math.ceil(filteredData.length/ itemsPerPage); i++) {
  pageNumbers.push(i)
} 

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <TableContainer component={Paper} sx={{overflowX:'scroll',display:display}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >No</StyledTableCell>
            <StyledTableCell align="center">Nama</StyledTableCell>
            <StyledTableCell align="center">Sekolah</StyledTableCell>
            <StyledTableCell align="center">Universitas</StyledTableCell>
            <StyledTableCell align="center">Tahun Lolosan</StyledTableCell>
            <StyledTableCell align="center">Review</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {       
          currentData.map((row,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {i + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{row.nama}</StyledTableCell>
              <StyledTableCell align="center">{row.asalSekolah}</StyledTableCell>
              <StyledTableCell align="center">{row.kuliah}</StyledTableCell>
              <StyledTableCell align="center">2024</StyledTableCell>
              <StyledTableCell align="center">
                <Link 
                style={{
                  fontSize:'16px',
                  lineHeight:'22.4px',
                  fontWeight:'400',
                  color:'#38B6FF'
                }}
                component="button" onClick={() => handleShowCard(row)}>
                  Lihat Testimoni
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          
          ))
         
          }
        </TableBody>
      </Table>
    </TableContainer>

    <Box sx={{ display: display, justifyContent: 'center', marginTop: '20px' }}>
        <Button  disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)} variant="outlined">
          
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 16C11.0108 15.6542 11.1406 15.3593 11.4326 15.0949L19.8692 7.33559C20.0964 7.11186 20.3992 7 20.7453 7C21.4484 7 22 7.50847 22 8.16949C22 8.49492 21.8594 8.78983 21.6214 9.02373L14.0177 16L21.6214 22.9763C21.8594 23.2 22 23.4949 22 23.8203C22 24.4915 21.4484 25 20.7453 25C20.3992 25 20.0964 24.8881 19.8692 24.6644L11.4326 16.9051C11.1406 16.6407 11 16.3458 11 16Z" fill="#38B6FF"/>
          </svg>

        </Button>
       { pageNumbers.map(number => (
            <Box 
             key={number}
            sx={{ 
         
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              width:'29px',
              height:'36px',
              border:'1px solid #E5EAF1' ,
              borderRadius:number == 1 ? '8px 0px 0px 8px': number == pageNumbers.length? '0px 8px 8px 0px' :'0px',
              padding:'4px 8px',
              background:number == currentPage ?'#38B6FF' :'#FFFFFF' 
             
             }}>
              {number}  
           </Box>
       ))}
        <Button
          disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
          onClick={() => paginate(currentPage + 1)}
          variant="outlined"
        >
         
        <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 9C11 9.34576 10.8702 9.64068 10.5782 9.90508L2.14159 17.6644C1.90364 17.8881 1.6116 18 1.26549 18C0.562439 18 0 17.4915 0 16.8203C0 16.4949 0.151426 16.2 0.378564 15.9763L7.99312 9L0.378564 2.02373C0.14061 1.78983 0 1.49492 0 1.16949C0 0.508475 0.562439 0 1.26549 0C1.6116 0 1.90364 0.111864 2.14159 0.335593L10.5782 8.09492C10.8594 8.35932 11 8.65424 11 9Z" fill="#38B6FF"/>
        </svg>

        </Button>
      </Box>
    </>
  )
}

export default TableKelolosan