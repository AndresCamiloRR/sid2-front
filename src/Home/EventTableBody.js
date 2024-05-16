import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EventCard from './EventCard';
import EventService from '../Services/EventService';
import { useState, useEffect } from 'react';

const EventTableBody = ({ name, location, categories }) => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    if(categories.length>0){
      EventService.getEventsFiltered(name, location, categories)
        .then(response => {
          setEvents(response.content);
        })
        .catch(error => {
          console.error("Error al obtener eventos:", error);
        });
    }else{
      EventService.getEventsFilteredNoCategories(name, location)
        .then(response => {
          setEvents(response.content);
        })
        .catch(error => {
          console.error("Error al obtener eventos:", error);
        });
    }

  }, [name, location, categories]); // <-- Array vacío como segundo argumento

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
          {console.log(events)}
          {events.map(event => (
            <StyledTableRow key={event.id}>
              <StyledTableCell>
                <EventCard event={event}></EventCard>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EventTableBody;
