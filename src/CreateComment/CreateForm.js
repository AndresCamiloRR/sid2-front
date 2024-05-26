import React, { useState, useEffect } from 'react';
import { Button, Grid } from "@mui/material";
import FormTextField from "./FormTextField";
import FreeSolo from "./FreeSolo";
import CommentService from "../Services/CommentService";
import EventService from "../Services/EventService";
import { useNavigate } from 'react-router-dom';

const CreateForm = () => {

    const [user, setUser] = useState('');
    const [event, setEvent] = useState('');
    const [comment, setComment] = useState('');
    const [allEvents, setAllEvents] = useState([]);
    const [selected, setSelected] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        EventService.getEventsFilteredNoCategories('', '')
            .then(response => {
                setAllEvents(response);
            })
            .catch(error => {
                console.error("Error al obtener eventos:", error);
            });
    }, []);

    const handleCreateAttendant = () => {
        console.log("Trabajando")
        localStorage.setItem('reload', true)
        CommentService.createComment(event, comment, user)
        navigate('/Comments')
    }

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
                <FormTextField onFieldChange={setUser} label={"Usuario"} value={user} selected={[selected, setSelected]} width={200} />
            </Grid>
            <Grid item xs={5} display="flex" justifyContent="center">
                <FreeSolo label={"Evento"} values={allEvents} onChange={[event, setEvent]} selected={[selected, setSelected]} width={300} />
            </Grid>
            <Grid item xs={5} textAlign={"center"}>
                <FormTextField onFieldChange={setComment} label={"Comentario"} value={comment} selected={[selected, setSelected]} width={200} />
            </Grid>
            <Grid item xs={5} textAlign={"center"}>
                <Button style={{'backgroundColor':'#46ad95', 'color':'white'}}   onClick={handleCreateAttendant}>Registrar Comentario</Button>
            </Grid>
        </Grid>
    );
}

export default CreateForm;
