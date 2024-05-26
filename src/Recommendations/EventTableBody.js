import React, { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';  // Importación correcta de tableCellClasses
import EventCard from './EventCard';
import EventService from '../Services/EventService';
import { AppContext } from '../App';
import AttendantsService from '../Services/AttendantsService';

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

const EventTableBody = ({ user }) => {
  const [events, setEvents] = useState([]);
  const { reload, setReload } = useContext(AppContext);

  useEffect(() => {
    setReload(false);
    const fetchEvents = async () => {
      const userSelected = await AttendantsService.getAttendantByName(user)
      try {
        let response;
        if (userSelected && userSelected.events && userSelected.events.length > 0) {
          response = await EventService.getEventsFiltered("", "", userSelected.events);
        } else {
          response = await EventService.getEventsFilteredNoCategories("", "");
        }
        setEvents(response);
      } catch (error) {
        console.error("Error al obtener eventos:", error);
      }
    };

    fetchEvents();
  }, [user, reload]);

  return (
    <TableContainer component={Paper} sx={{ height: '60vh', zIndex: 1, width: 1000 }}>
      <Table aria-label="customized table">
        <TableBody>
          {events.map((event) => (
            <StyledTableRow key={event.id}>
              <StyledTableCell>
                <EventCard event={event} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventTableBody;
