import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const FacultiesTable = ({faculties}) => {

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
        <TableContainer component={Paper} sx={{width: '40vh', height: 'auto'}}>
        <Typography variant="h6" component="div" style={{ padding: '16px', backgroundColor: '#55B8A1', textAlign: 'center', color: 'white'}}>
          Facultades
        </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell>Ubicación</StyledTableCell>
                <StyledTableCell>Teléfono</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {faculties.map((facultie)=>(
                <TableRow >
                <StyledTableCell>{facultie.name}</StyledTableCell>
                <StyledTableCell>{facultie.location}</StyledTableCell>
                <StyledTableCell>{facultie.phoneNumber}</StyledTableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}


export default FacultiesTable