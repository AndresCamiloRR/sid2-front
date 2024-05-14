import { Grid } from "@mui/material"
import FormTextField from "./FormTextField"
import { useState, useEffect } from 'react';
import MultipleFreeSolo from "./MultipleFreeSolo";
import EventService from "../Services/EventService";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


const CreateForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);
    const [date, setDate] = useState(dayjs('2022-04-17'));
    const [locationName, setLocationName] = useState("");
    const [locationAddress, setLocationAddress] = useState("");
    const [cityName, setCityName] = useState("");
    const [cityState, setCityState] = useState("");
    const [cityCountry, setCityCountry] = useState("");
    const [selected, setSelected] = useState("")

    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        EventService.getCategories()
            .then(response => {
                setAllCategories(response);
              
            })
            .catch(error => {
              console.error("Error al obtener eventos:", error);
            });
      }, []);


    return(
        <Grid spacing={3} container alignItems="center" sx={{
            height: '70vh',
            zIndex: 1,
            width: 1000,
            backgroundColor: "white",
            borderRadius: 1,
            boxShadow: 1
        }}>
            <Grid item xs={5} textAlign={"center"}>
                <FormTextField onFieldChange={setName} label={"Nombre"} value={name} selected={[selected, setSelected]} width={200}></FormTextField>
            </Grid>
            <Grid item xs={5} textAlign={"center"}>
                <MultipleFreeSolo values={allCategories} width={400} label={"Categorías"}/>
            </Grid>
            <Grid item xs={5}>
                <div style={{ textAlign: "center" }}>
                    <div style={{ display: "inline-block" }}> {/* Nuevo contenedor */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <DatePicker
                                    label="Fecha"
                                    value={date}
                                    onChange={(newValue) => setDate(newValue)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
            </Grid>
            <Grid item xs={5} textAlign={"center"}>
                <FormTextField onFieldChange={setDescription} label={"Descripción"} value={description} selected={[selected, setSelected]} width={400}></FormTextField>
            </Grid>
            
            
            
        </Grid>
    )
}

export default CreateForm