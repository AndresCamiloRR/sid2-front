import React, { useState, useEffect } from 'react';
import { Button, Grid } from "@mui/material";
import FreeSolo from "./FreeSolo";
import EventService from "../Services/EventService";
import MultipleAutocomplete from './MultipleAutocomplete';
import AttendantsService from '../Services/AttendantsService';

const CreateForm = () => {

    const [allAttendants, setAllAttendants] = useState([]);
    const [event, setEvent] = useState('');
    const [allEvents, setAllEvents] = useState([]);
    const [selected, setSelected] = useState("");
    const [attendants, setAttendants] = useState([]);

    useEffect(() => {
        EventService.getEventsFilteredNoCategories('', '')
            .then(response => {
                setAllEvents(response);
            })
            .catch(error => {
                console.error("Error al obtener eventos:", error);
            });
        AttendantsService.getAttendantsFilteredNoRelations('','')
            .then(response => {
                setAllAttendants(response);
            })
            .catch(error => {
                console.error("Error al obtener asistentes:", error);
            });
    }, []);

    const handleAttendantsChange = (selectedUsernames) => {
        const selectedAttendants = allAttendants.filter(attendant => 
            selectedUsernames.includes(attendant.username)
        );
        setAttendants(selectedAttendants);
    };

    return (
        <Grid spacing={3} container alignItems="center" sx={{
            height: '60vh',
            zIndex: 1,
            width: 900,
            backgroundColor: "white",
            borderRadius: 1,
            boxShadow: 1
        }}>
            <Grid item xs={5} textAlign={"center"}>
                <MultipleAutocomplete 
                    values={allAttendants.map(attendant => attendant.username)} 
                    onMultipleChange={[attendants.map(attendant => attendant.username), handleAttendantsChange]} 
                    width={400} 
                    label="Asistentes *" 
                    selected={[selected, setSelected]}
                />
            </Grid>
            <Grid item xs={5} display="flex" justifyContent="center">
                <FreeSolo 
                    label={"Evento"} 
                    values={allEvents} 
                    onChange={[event, setEvent]} 
                    selected={[selected, setSelected]} 
                    width={300} 
                />
            </Grid>
            <Grid item xs={5} textAlign={"center"}>
                <Button onClick={null}>Registrar Recomendación</Button>
            </Grid>
        </Grid>
    );
}

export default CreateForm;