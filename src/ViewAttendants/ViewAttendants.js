import React from 'react';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import { useLocation } from "react-router-dom";
import { List, ListItem, ListItemText, Card, CardContent, Typography } from '@mui/material';
import './ViewAttendants.css';

export function ViewAttendants() {
  const location = useLocation();
  let obj = location.state.obj;

  return (
    <div className='container'>
    <TopBar name={"Ver Asistentes"} />
    <SideBar />
    <div className='content'>

        <div className='cityInfo-Attendants'>

        <div style={{width: '60%', paddingLeft:'2px'}}>
          <h2 className='tittle-Attendants'>Información general</h2>
          </div>
          
          <Card className='cardCity-Attendants'>
          <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>

            

            <CardContent className='cardCityContent-Attendants'>
            

              <div className='cityPadding-Attendants'>
                <Typography  className='textCard-Attendants' style={{ fontSize: '19px', fontWeight: 'bold', fontFamily: 'Rubik'}}>
                  Nombre:
                </Typography>
                <Typography className='textCard-Attendants' style={{ fontSize: '16px', fontFamily: 'Rubik'}}>
                  {obj.name}
                </Typography>
              </div>

              <div className='cityPadding-Attendants'>
                <Typography  className='textCard-Attendants' style={{ fontSize: '19px', fontWeight: 'bold', fontFamily: 'Rubik'}}>
                  Email:
                </Typography>
                <Typography className='textCard-Attendants' style={{ fontSize: '16px', fontFamily: 'Rubik'}}>
                  {obj.email}
                </Typography>
              </div>

              <div className='cityPadding-Attendants'>
                <Typography  className='textCard-Attendants' style={{ fontSize: '19px', fontWeight: 'bold',fontFamily: 'Rubik'}}>
                  Relación:
                </Typography>
                <Typography className='textCard-Attendants' style={{ fontSize: '16px', fontFamily: 'Rubik'}}>
                  {obj.relation}
                </Typography>
              </div>
            
            
              <div className='cityPadding-Attendants'>
                <Typography  className='textCard-Attendants' style={{ fontSize: '19px', fontWeight: 'bold',fontFamily: 'Rubik'}}>
                  Cédula:
                </Typography>
                <Typography className='textCard-Attendants' style={{ fontSize: '16px', fontFamily: 'Rubik'}}>
                  {obj.username}
                </Typography>
              </div>

            </CardContent>
          </Card>




          <div style={{width: '60%', paddingLeft:'2px'}}>
          <h2 className='tittle-Attendants'>Lugar de residencia</h2>
          </div>
          
          <Card className='cardCity-Attendants'>
          <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>

            

            <CardContent className='cardCityContent-Attendants'>
            

              <div className='cityPadding-Attendants'>
                <Typography  className='textCard-Attendants' style={{ fontSize: '19px', fontWeight: 'bold', fontFamily: 'Rubik'}}>
                  Ciudad:
                </Typography>
                <Typography className='textCard-Attendants' style={{ fontSize: '16px', fontFamily: 'Rubik'}}>
                  {obj.city.name}
                </Typography>
              </div>

              <div className='cityPadding-Attendants'>
                <Typography  className='textCard-Attendants' style={{ fontSize: '19px', fontWeight: 'bold', fontFamily: 'Rubik'}}>
                  País:
                </Typography>
                <Typography className='textCard-Attendants' style={{ fontSize: '16px', fontFamily: 'Rubik'}}>
                  {obj.city.country}
                </Typography>
              </div>

              <div className='cityPadding-Attendants'>
                <Typography  className='textCard-Attendants' style={{ fontSize: '19px', fontWeight: 'bold',fontFamily: 'Rubik'}}>
                  Departamento:
                </Typography>
                <Typography className='textCard-Attendants' style={{ fontSize: '16px', fontFamily: 'Rubik'}}>
                  {obj.city.state}
                </Typography>
              </div>
            

            </CardContent>
          </Card>


          <div style={{width: '60%', paddingLeft:'2px'}}>
          <h2 className='tittle-Attendants'>Preferencias</h2>
          </div>
          
          <Card className='cardPreferences-Attendants'>
          <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>

            

            <CardContent className='cardPreferencesContent-Attendants'>
            
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Typography  className='textCard-Event' style={{ fontSize: '21px', fontWeight: 'bold'}}>
                    Categorías:
                  </Typography>
                  <List style={{display: 'flex', flexDirection:'row'}}>
                    {obj.events.map((event, index) => (
                      <ListItem key={index} style={{ padding: '2px 0', fontFamily: 'Rubik', fontSize: '18px', width: 'auto', paddingLeft: '8px'}}>
                        <ListItemText>
                          <Typography variant="body1" style={{ fontSize: '18px' }}>
                            • {event}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
              </div>

            </CardContent>
          </Card>

        </div>
    </div>
    </div>

  );
}

export default ViewAttendants;