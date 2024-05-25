import * as React from 'react';
import CommentTableHeader from './CommentTableHeader';
import { useState } from 'react';
import CommentTableBody from './CommentTableBody';


const CommentTable = () => {

    const [userValue, setUserValue] = useState('');
    const [eventValue, setEventValue] = useState('');
    const [textValue, setTextValue] = useState('');
    const [selected, setSelected] = useState('');

    return (
      <>
      <CommentTableHeader handleUser={[userValue, setUserValue]} handleEvent={[eventValue, setEventValue]}
      handleText={[textValue, setTextValue]} handleSelected={[selected, setSelected]}></CommentTableHeader>
      <CommentTableBody eventName={eventValue} text={textValue} author={userValue}></CommentTableBody>
      </>
    );

    
}

export default CommentTable