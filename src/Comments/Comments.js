import React from 'react';
import './Home.css';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import { Stack } from '@mui/material';
import CommentTable from './CommentTable';


export default class Comments extends React.Component {


  render(){
    
    return (
        <html className='home-html-body'>
          <body className='home-html-body'>
            <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>
              <TopBar name={"Comentarios"}/>
              <SideBar/>
              <Stack>
                <CommentTable></CommentTable>
              </Stack>
              <div className='circle-home'> </div>
          </body>
        </html>
        
    );
  }
}
