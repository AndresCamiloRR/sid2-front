import React from 'react';
import './Home.css';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import CreateForm from './CreateForm';


export default class CreateAttendant extends React.Component {


  render(){
    
    return (
        <html className='home-html-body'>
          <body className='home-html-body'>
            <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>
              <TopBar name={"Home"}/>
              <SideBar/>
              <CreateForm></CreateForm>
              <div className='circle-home'> </div>
          </body>
        </html>
        
    );
  }
}
