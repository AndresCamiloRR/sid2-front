import React, { useState, useEffect, useContext } from 'react';
import { Button, Grid } from '@mui/material';
import FormTextField from './FormTextField';
import MultipleFreeSolo from './MultipleFreeSolo';
import EventService from '../Services/EventService';
import FacultyService from '../Services/FacultyService';
import ProgramService from '../Services/ProgramService';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MultipleSelect from './MultipleSelect';
import { AppContext } from '../App';
import { redirect } from 'react-router-dom';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const CreateForm = () => {
  const { eventGlobal, setEventGlobal } = useContext(AppContext);

  // Inicialización de valores
  const initialName = eventGlobal ? eventGlobal.title : '';
  const isEdit = Boolean(eventGlobal)
  const initialDescription = eventGlobal ? eventGlobal.description : '';
  const initialCategories = eventGlobal ? eventGlobal.categories : [];
  const initialDate = eventGlobal ? dayjs(eventGlobal.date) : dayjs('2022-04-17');
  const initialFaculties = eventGlobal ? eventGlobal.faculties : [];
  const initialPrograms = eventGlobal ? eventGlobal.programs : [];
  const initialLocationName = eventGlobal ? eventGlobal.location.name : '';
  const initialLocationAddress = eventGlobal ? eventGlobal.location.address : '';
  const initialCityName = eventGlobal ? eventGlobal.location.city.name : '';
  const initialCityState = eventGlobal ? eventGlobal.location.city.state : '';
  const initialCityCountry = eventGlobal ? eventGlobal.location.city.country : '';

  // Definición de estados usando useState
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [categories, setCategories] = useState(initialCategories);
  const [date, setDate] = useState(initialDate);
  const [faculties, setFaculties] = useState(initialFaculties);
  const [programs, setPrograms] = useState(initialPrograms);
  const [locationName, setLocationName] = useState(initialLocationName);
  const [locationAddress, setLocationAddress] = useState(initialLocationAddress);
  const [cityName, setCityName] = useState(initialCityName);
  const [cityState, setCityState] = useState(initialCityState);
  const [cityCountry, setCityCountry] = useState(initialCityCountry);
  const [selected, setSelected] = useState('');
  const [allFaculties, setAllFaculties] = useState([]);
  const [allPrograms, setAllPrograms] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    EventService.getCategories()
      .then(response => {
        setAllCategories(response);
      })
      .catch(error => {
        console.error("Error al obtener eventos:", error);
      });

    FacultyService.getFaculties()
      .then(response => {
        setAllFaculties(response);
      })
      .catch(error => {
        console.error("Error al obtener eventos:", error);
      });

    ProgramService.getPrograms()
      .then(response => {
        setAllPrograms(response);
      })
      .catch(error => {
        console.error("Error al obtener eventos:", error);
      });
  }, []);

  const handleCreateEvent = (e) => {

    
    if (categories.length === 0) {
      e.preventDefault();
      setErrorMessage('Por favor, selecciona al menos una categoría.');

    }else if (categories.length > 0){
      console.log('todo culpa de andres')
      localStorage.setItem('reload', true);
      EventService.createEvent(name, categories, date, description, locationName, locationAddress, cityName, cityState, cityCountry, faculties, programs)
      setEventGlobal(null)
      navigate("/")
    }

  }

  return (
    <form onSubmit={handleCreateEvent}>
    <Grid container alignItems="center" spacing={3} sx={{
      height: '80vh',
      zIndex: 1,
      width: 1000,
      backgroundColor: "white",
      borderRadius: 1,
      boxShadow: 1
    }}>
      <Grid item xs={5} textAlign="center">
        <FormTextField onFieldChange={setName} readOnly={isEdit} label="Nombre" value={name} selected={[selected, setSelected]} width={200} required />
      </Grid>
      <Grid item xs={5} textAlign="center">
        <MultipleFreeSolo values={allCategories} onMultipleChange={[categories, setCategories]} width={400} label="Categorías" selected={[selected, setSelected]}  />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
      <Grid item xs={5} textAlign="center">
        <FormTextField onFieldChange={setDescription} label="Descripción" value={description} selected={[selected, setSelected]} width={400} required />
      </Grid>
      <Grid item xs={5} textAlign="center">
        <FormTextField onFieldChange={setLocationName} label="Lugar" value={locationName} selected={[selected, setSelected]} width={200} required />
      </Grid>
      <Grid item xs={5} textAlign="center">
        <FormTextField onFieldChange={setLocationAddress} label="Dirección" value={locationAddress} selected={[selected, setSelected]} width={400} required />
      </Grid>
      <Grid item xs={5} textAlign="center">
        <FormTextField onFieldChange={setCityName} label="Ciudad" value={cityName} selected={[selected, setSelected]} width={200} required />
      </Grid>
      <Grid item xs={5} textAlign="center">
        <MultipleSelect label="Facultades" values={allFaculties} onMultipleChange={[faculties, setFaculties]} selected={[selected, setSelected]} required />
      </Grid>
      <Grid item xs={5} textAlign="center">
        <FormTextField onFieldChange={setCityState} label="Departamento" value={cityState} selected={[selected, setSelected]} width={200} required />
      </Grid>
      <Grid item xs={5} textAlign="center">
        <MultipleSelect label="Programas" values={allPrograms} onMultipleChange={[programs, setPrograms]} selected={[selected, setSelected]} required />
      </Grid>
      <Grid item xs={5} textAlign="center">
        <FormTextField onFieldChange={setCityCountry} label="País" value={cityCountry} selected={[selected, setSelected]} width={200} required />
      </Grid>
      <Grid item xs={5} textAlign="center">
        <Button style={{'backgroundColor':'#46ad95', 'color':'white'}}  type='submit'>Guardar Evento</Button>
      </Grid>
    </Grid>

    </form>

  );
}

export default CreateForm;
