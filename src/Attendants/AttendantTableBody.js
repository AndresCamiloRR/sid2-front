import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AttendantCard from './AttendantCard';
import AttendantsService from '../Services/AttendantsService';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

const AttendantTableBody = ({ username, name, relations }) => {

  const [attendants, setAttendants] = useState([]);

  const { reload, setReload } = useContext(AppContext);

  useEffect(() => {
    setReload(false)
    if(relations.length>0){
      AttendantsService.getAttendantsFiltered(username, name, relations)
        .then(response => {
          setAttendants(response);
        })
        .catch(error => {
          console.error("Error al obtener eventos:", error);
        });
    }else{
      AttendantsService.getAttendantsFilteredNoRelations(username, name)
        .then(response => {
          setAttendants(response);
        })
        .catch(error => {
          console.error("Error al obtener eventos:", error);
        });
    }

  }, [username, name, relations, reload]); // <-- Array vacío como segundo argumento

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#46ad95',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper} sx={{
      height: '60vh',
      zIndex: 1,
      width: 1000,
    }}>
      <Table aria-label="customized table">
        <TableBody>
          {attendants.map(attendant => (
            <StyledTableRow key={attendant.id}>
              <StyledTableCell>
                <AttendantCard attendant={attendant}></AttendantCard>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AttendantTableBody;
