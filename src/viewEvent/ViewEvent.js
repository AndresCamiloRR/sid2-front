import React, { useState, useEffect, useContext } from 'react';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import { useLocation } from "react-router-dom";
import { List, ListItem, ListItemText, Card, CardContent, Typography } from '@mui/material';
import ProgramTable from './ProgramsTable';
import LocationTable from './LocationTable';
import FacultiesTable from './FacultiesTable';
import AttendantsTable from './AttendantsTable';
import AttendantsService from '../Services/AttendantsService';
import './ViewEvent.css';

export function ViewEvent() {
  const location = useLocation();
  let obj = location.state.obj;
  const [attendantsInfo, setAttendantsInfo] = useState([]);

  const handleViewAttendants = async() =>{
    try {
      const response = await AttendantsService.getAttendantsByID(obj.attendants);
      setAttendantsInfo(response);
    } catch (error) {
      console.error("Error al obtener asistentes:", error);
    }
  }

  
  useEffect(() => {
    handleViewAttendants();
  }, []);


  console.log(attendantsInfo)

  const eventDate = new Date(obj.date).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (

    
    <div className='container'>
      <TopBar name={"Ver Evento"} />
      <SideBar />
      <div className='content' >
        <div className='InfoContainer-Event'>
        <div style={{width: '60%', paddingLeft:'2px'}}>
          <h2 className='tittle-Attendants'>Información del evento</h2>
          </div>
        <Card className='cardInfo-Event'>

        <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>
        
        <CardContent className='cardContent-Event' >

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Typography  className='textCard-Event' style={{ fontSize: '21px', fontWeight: 'bold'}}>
            Nombre del evento:
          </Typography>
     
          <Typography className='textCard-Event' style={{ fontSize: '18px'}}>
            {obj.title}
          </Typography>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Typography  className='textCard-Event' style={{ fontSize: '21px', fontWeight: 'bold'}} >
            Fecha del evento:
          </Typography>
          <Typography className='textCard-Event'style={{ fontSize: '18px'}}>
            {eventDate}
          </Typography>
        </div>

      </CardContent>
    </Card>

    <Card className='cardDescription-Event' sx= {{height: 'auto', width:'60%', zIndex: '2'}}>
      <CardContent style={{width:'100%'}}>

        <div style={{ display: 'inline', alignItems: 'center', gap: '8px', zIndex: '2'}}>
          <Typography  className='textCard-Event' style={{ fontSize: '21px', fontWeight: 'bold'}}>
            Descripción:
          </Typography>
          <div className='textCard-Event' style={{ fontSize: '18px', height:'auto', 'text-wrap': 'wrap','word-wrap': 'break-word'}}>
            {obj.description}
          </div>
        </div>
        
        {attendantsInfo.length > 0 && (
        <div>
          <AttendantsTable attendants={attendantsInfo} />

        </div>
        )
        
        }
      </CardContent>
    </Card>

    

    <Card className='cardCategories-Event' style={{zIndex: '2', width: 'auto', overflow: 'auto' }}>

    <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>

      <CardContent className='cardCategories-Event' >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: '2' }}>
                <Typography  className='textCard-Event' style={{ fontSize: '21px', fontWeight: 'bold'}}>
                  Categorías:
                </Typography>
                <List style={{display: 'flex', flexDirection:'row'}}>
                  {obj.categories.map((category, index) => (
                    <ListItem key={index} style={{ padding: '2px 0', fontFamily: 'Rubik', fontSize: '18px', width: 'auto', paddingLeft: '8px'}}>
                      <ListItemText>
                        <Typography variant="body1" style={{ fontSize: '18px' }}>
                          • {category}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
          </div>
              
              <br/>
              <div style={{ display: 'flex', gap: '10px', zIndex: '2' }}> 
                <LocationTable location={obj.location} />
                <FacultiesTable faculties={obj.faculties} />
                <ProgramTable programs={obj.programs} />
              </div>

            </CardContent>
        </Card>

        </div>
      </div>
      <div className='circle-home'></div>
    </div>
  );
}

export default ViewEvent;