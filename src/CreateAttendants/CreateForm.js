import React, { useState, useEffect } from 'react';
import { Button, Grid } from "@mui/material";
import FormTextField from "./FormTextField";
import FreeSolo from "./FreeSolo";
import { AppContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AttendantsService from "../Services/AttendantsService";

const CreateForm = () => {
    const { attendantGlobal, setAttendantGlobal } = useContext(AppContext);

    const initialUsername = attendantGlobal ? attendantGlobal.username : '';
    const isEdit = Boolean(attendantGlobal);
    const initialName = attendantGlobal ? attendantGlobal.name : '';
    const initialRelation = attendantGlobal ? attendantGlobal.relation : '';
    const initialEmail = attendantGlobal ? attendantGlobal.email : '';
    const initialCityName = attendantGlobal ? attendantGlobal.city.name : '';
    const initialCityState = attendantGlobal ? attendantGlobal.city.state : '';
    const initialCityCountry = attendantGlobal ? attendantGlobal.city.country : '';

    const [username, setUsername] = useState(initialUsername);
    const [name, setName] = useState(initialName);
    const [relation, setRelation] = useState(initialRelation);
    const [email, setEmail] = useState(initialEmail);
    const [cityName, setCityName] = useState(initialCityName);
    const [cityState, setCityState] = useState(initialCityState);
    const [cityCountry, setCityCountry] = useState(initialCityCountry);

    const [selected, setSelected] = useState("");
    const [allRelations, setAllRelations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        AttendantsService.getRelations()
            .then(response => {
                setAllRelations(response);
            })
            .catch(error => {
                console.error("Error al obtener eventos:", error);
            });
    }, []);

    const handleCreateAttendant = () => {
        console.log("Trabajando");
        console.log(relation);
        AttendantsService.createAttendant(username, name, relation, email, cityName, cityState, cityCountry);
        setAttendantGlobal(null);
        navigate('/Attendants');
    };

    return (
        <Grid spacing={3} container alignItems="center" sx={{
            height: '80vh',
            zIndex: 1,
            width: 1000,
            backgroundColor: "white",
            borderRadius: 1,
            boxShadow: 1
        }}>
            <Grid item xs={5} textAlign="center">
                <FormTextField readOnly={isEdit} onFieldChange={setUsername} label={"Cédula"} value={username} selected={[selected, setSelected]} width={200} />
            </Grid>
            <Grid item xs={5} textAlign="center">
                <FormTextField onFieldChange={setName} label={"Nombre"} value={name} selected={[selected, setSelected]} width={200} />
            </Grid>
            <Grid item xs={5} textAlign="center">
                <FormTextField onFieldChange={setCityName} label={"Ciudad"} value={cityName} selected={[selected, setSelected]} width={200} />
            </Grid>
            <Grid item xs={5} display="flex" justifyContent="center">
                <FreeSolo values={allRelations} label={"Relación *"} onChange={[relation, setRelation]} selected={[selected, setSelected]} width={200} />
            </Grid>
            <Grid item xs={5} textAlign="center">
                <FormTextField onFieldChange={setCityState} label={"Departamento"} value={cityState} selected={[selected, setSelected]} width={200} />
            </Grid>
            <Grid item xs={5} textAlign="center">
                <FormTextField onFieldChange={setEmail} label={"Correo"} value={email} selected={[selected, setSelected]} width={200} />
            </Grid>
            <Grid item xs={5} textAlign="center">
                <FormTextField onFieldChange={setCityCountry} label={"País"} value={cityCountry} selected={[selected, setSelected]} width={200} />
            </Grid>
            <Grid item xs={5} textAlign="center">
                <Button onClick={handleCreateAttendant}>Guardar Asistente</Button>
            </Grid>
        </Grid>
    );
}

export default CreateForm;
