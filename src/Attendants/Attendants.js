import React from 'react';
import './Home.css';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import { Stack } from '@mui/material';
import AttendantTable from './AttendantTable';


export default class Attendants extends React.Component {


  render(){
    
    return (
        <html className='home-html-body'>
          <body className='home-html-body'>
            <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>
              <TopBar name={"Home"}/>
              <SideBar/>
              <Stack>
              <AttendantTable/>
              </Stack>
              <div className='circle-home'> </div>
          </body>
        </html>
        
    );
  }
}
