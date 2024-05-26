import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const LocationTable = ({location}) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#46ad95',
        color: theme.palette.common.white,
        fontSize: 16,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));  

    return(
        <TableContainer component={Paper} sx={{width: '40vh',  height: 'auto'}}>
        <Typography variant="h6" component="div" style={{ padding: '16px', backgroundColor: '#55B8A1', textAlign: 'center', color:'white'}}>
          Lugar
        </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell>Dirección</StyledTableCell>
                <StyledTableCell>Ciudad</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                  <StyledTableCell>{location.name}</StyledTableCell>
                  <StyledTableCell>{location.address}</StyledTableCell>
                  <StyledTableCell>{location.city.name}</StyledTableCell>
                </TableRow>
            
            </TableBody>
          </Table>
        </TableContainer>
    );
}


export default LocationTable