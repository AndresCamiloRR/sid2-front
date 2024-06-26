import React, { useState, useEffect } from 'react';
import { Button, Grid, Select , TextField, Autocomplete} from "@mui/material";
import FormTextField from "./FormTextField";
import FreeSolo from "./FreeSolo";
import CommentService from "../Services/CommentService";
import EventService from "../Services/EventService";
import { useNavigate } from 'react-router-dom';
import AttendantsService from '../Services/AttendantsService';

const CreateForm = () => {

    const [user, setUser] = useState( );
    const [event, setEvent] = useState();
    const [comment, setComment] = useState('');
    const [allEvents, setAllEvents] = useState([]);
    const [allAttendants, setAllAttendants] = useState([]);
    const [selected, setSelected] = useState("");
    const navigate = useNavigate();

    const defaultProps = {
        options: allAttendants,
        getOptionLabel: (option) => option.name,
      };

    const defaultPropsEvent= {
        options: allEvents,
        getOptionLabel: (option) => option.title,
      };

    useEffect(() => {
        EventService.getEventsFilteredNoCategories('', '')
            .then(response => {
                setAllEvents(response);
            })
            .catch(error => {
                console.error("Error al obtener eventos:", error);
            });
        AttendantsService.getAttendantsFilteredNoRelations('', '')
            .then(response => {
                setAllAttendants(response);
            })
            .catch(error => {
                console.error("Error al obtener asistentes:", error);
            });
    }, []);

    const handleCreateAttendant = () => {
        console.log("Trabajando")
        localStorage.setItem('reload', true)
        CommentService.createComment(event.title, comment, user.name)
        navigate('/Comments')
    }

    return (
        <form onSubmit={handleCreateAttendant}>
        <Grid spacing={3} container alignItems="center" sx={{
            height: '60vh',
            zIndex: 1,
            width: 900,
            backgroundColor: "white",
            borderRadius: 1,
            boxShadow: 1
        }}>
            

            <Grid item xs={5} textAlign={"center"}>
            <Autocomplete
                {...defaultProps}
                id="controlled-demo"
                width={200}
                value={user}
                onChange={(event, newValue) => {
                setUser(newValue);
                }}
                renderInput={(params) => (
                <TextField {...params} label="Usuario" variant="standard"  required/>
                )}
            />
            </Grid>
            <Grid item xs={5} display="flex" justifyContent="center" >
                <Autocomplete
                sx={{width:'200px'}}
                {...defaultPropsEvent}
                id="controlled-demo"
                width={300}
                value={event}
                onChange={(event, newValue) => {
                setEvent(newValue);
                }}
                renderInput={(params) => (
                <TextField {...params} label="Evento" variant="standard"  required/>
                )}
            />
            </Grid>
            <Grid item xs={5} textAlign={"center"}>
                <FormTextField onFieldChange={setComment} label={"Comentario"} value={comment} selected={[selected, setSelected]} width={300} />
            </Grid>
            <Grid item xs={5} textAlign={"center"}>
                <Button style={{'backgroundColor':'#46ad95', 'color':'white'}}  type="submit">Registrar Comentario</Button>
            </Grid>

           

        </Grid>

        </form>
    );
}

export default CreateForm;
