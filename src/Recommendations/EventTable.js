import React, { useState, useEffect } from 'react';
import EventTableBody from './EventTableBody';
import EventTableHeader from './EventTableHeader';
import AttendantsService from '../Services/AttendantsService';

const EventTable = () => {
    const [user, setUser] = useState('');
    const [selected, setSelected] = useState('');
    const [attendants, setAttendants] = useState([]);

    useEffect(() => {
        AttendantsService.getAttendantsFilteredNoRelations("", "")
            .then(response => {
                setAttendants(response);
            })
            .catch(error => {
                console.error("Error al obtener los asistentes:", error);
            });
    }, []);

    return (
        <>
            <EventTableHeader
                handleUser={[user, setUser]}
                handleSelected={[selected, setSelected]}
                values={attendants}
            />
            <EventTableBody
                user={user}
            />
        </>
    );
}

export default EventTable;
