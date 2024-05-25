import * as React from 'react';
import AttendantTableBody from './AttendantTableBody';
import AttendantTableHeader from './AttendantTableHeader';
import { useState, useEffect } from 'react';
import AttendantsService from '../Services/AttendantsService';


const AttendantTable = () => {

    const [userNameValue, setUserNameValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [relationsValue, setRelationsValue] = useState([]);
    const [selected, setSelected] = useState('');
    const [relations, setRelations] = useState([])

    useEffect(() => {
        AttendantsService.getRelations()
            .then(response => {
              setRelations(response);
              
            })
            .catch(error => {
              console.error("Error al obtener los participantes:", error);
            });
      }, []);

    return (
      <>
      <AttendantTableHeader handleUsername={[userNameValue, setUserNameValue]} handleName={[nameValue, setNameValue]}
      handleRelations={[relationsValue, setRelationsValue]} handleSelected={[selected, setSelected]} values={relations}/>
      <AttendantTableBody username={userNameValue} name={nameValue} relations={relationsValue}/>
      </>
    );

    
}

export default AttendantTable