import React from 'react';
import './Home.css';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import { Stack } from '@mui/material';
import EventTable from './EventTable';


export default class Recommendations extends React.Component {


  render(){
    
    return (
        <html className='home-html-body'>
          <body className='home-html-body'>
            <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>
              <TopBar name={"Recomendaciones"}/>
              <SideBar/>
              <Stack>
              <EventTable/>
              </Stack>
              <div className='circle-home'> </div>
          </body>
        </html>
        
    );
  }
}
