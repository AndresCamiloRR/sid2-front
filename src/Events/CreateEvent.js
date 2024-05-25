import React from 'react';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import CreateForm from './CreateForm';


export default class CreateEvent extends React.Component {


  render(){
    
    return (
        <html className='home-html-body'>
          <body className='home-html-body'>
            <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>
              <TopBar name={"Crear Evento"}/>
              <SideBar/>
              <CreateForm></CreateForm>
              <div className='circle-home'> </div>
          </body>
        </html>
        
    );
  }
}
