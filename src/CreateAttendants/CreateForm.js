import React, { useState, useEffect } from 'react';
import { Button, Grid } from "@mui/material";
import FormTextField from "./FormTextField";
import FreeSolo from "./FreeSolo";
import { useNavigate } from "react-router-dom";
import AttendantsService from "../Services/AttendantsService";
import EmployeeService from '../Services/EmployeeService';

const CreateForm = () => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [relation, setRelation] = useState("");
    const [email, setEmail] = useState("");
    const [cityName, setCityName] = useState("");
    const [cityState, setCityState] = useState("");
    const [cityCountry, setCityCountry] = useState("");

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
        AttendantsService.createAttendant(username, name, relation, email, cityName, cityState, cityCountry);
        navigate('/Attendants');
    };

    const searchUsername = (username) => {
        setUsername(username);
        EmployeeService.findEmployee(username)
            .then((worker) => {
                console.log(worker)
                if (worker && worker.firstName) {
                    setRelation(worker.employeeTypeEntity)
                    setName(worker.firstName + " " + worker.lastName)
                    setCityName(worker.placeOfBirth.name)
                    setCityState(worker.placeOfBirth.department)
                    setCityCountry(worker.placeOfBirth.country)
                    setEmail(worker.email)
                }else{
                    setName("")
                    setCityName("")
                    setCityState("")
                    setCityCountry("")
                    setRelation("")
                    setEmail("")
                }
            })
            .catch((error) => {
                console.error('Error finding employee:', error);
            });
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
                <Button style={{'backgroundColor':'#46ad95', 'color':'white'}}  onClick={handleCreateAttendant}>Guardar Asistente</Button>
            </Grid>
        </Grid>
    );
}

export default CreateForm;
