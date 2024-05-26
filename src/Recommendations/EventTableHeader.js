import { tableCellClasses } from '@mui/material/TableCell';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import FreeSolo from './FreeSolo';

const EventTableHeader = ({values, handleUser, handleSelected}) => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#46ad95',
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

      return (
        <TableContainer component={Paper} sx={{
          zIndex: 1,
          width:1000
          }}>
          <Table aria-label="customized table">
          <TableHead sx={{height: '15vh'}}>
            <TableRow>
              <StyledTableCell>
                <Grid container wrap="nowrap" alignItems="center">
                  <Grid item>
                    <FreeSolo label={"Atendiente"} values={values} onChange={handleUser} selected={handleSelected} width={400}/>
                  </Grid>
                </Grid>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          </Table>
        </TableContainer>
    );
}

export default EventTableHeader