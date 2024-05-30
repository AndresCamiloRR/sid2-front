import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const AttendantsTable = ({attendants}) => {

    
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
        <TableContainer component={Paper} sx={{width: '30vh',  height: 'auto'}}>
        <Typography variant="h6" component="div" style={{ padding: '16px', backgroundColor: '#55B8A1', textAlign: 'center', color:'white'}}>
          Asistentes
        </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Nombre</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendants.map((attendant) => (
                <TableRow >
                  <StyledTableCell>{attendant.name}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}


export default AttendantsTable