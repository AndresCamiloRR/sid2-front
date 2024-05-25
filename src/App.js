import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import CreateEvent from './Events/CreateEvent';
import Attendants from './Attendants/Attendants';
import CreateAttendant from './CreateAttendants/CreateAttendant';
import CreateComment from './CreateComment/CreateComment';
import Comments from './Comments/Comments';

export const AppContext = createContext();

function App() {

  const getInitialState = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  };

  const [attendantGlobal, setAttendantGlobal] = useState(() => getInitialState('attendantGlobal', null));
  const [commentGlobal, setCommentGlobal] = useState(() => getInitialState('commentGlobal', null));
  const [eventGlobal, setEventGlobal] = useState(() => getInitialState('eventGlobal', null));
  const [reload, setReload] = useState(() => getInitialState('reload', false));

  useEffect(() => {
    localStorage.setItem('attendantGlobal', JSON.stringify(attendantGlobal));
  }, [attendantGlobal]);

  useEffect(() => {
    localStorage.setItem('commentGlobal', JSON.stringify(commentGlobal));
  }, [commentGlobal]);

  useEffect(() => {
    localStorage.setItem('eventGlobal', JSON.stringify(eventGlobal));
  }, [eventGlobal]);

  useEffect(() => {
    localStorage.setItem('reload', JSON.stringify(reload));
  }, [reload]);

  return (
    <AppContext.Provider value={{ attendantGlobal, setAttendantGlobal, commentGlobal, setCommentGlobal, eventGlobal, setEventGlobal, reload, setReload }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
          <Route path="/Attendants" element={<Attendants />} />
          <Route path="/CreateAttendant" element={<CreateAttendant />} />
          <Route path="/CreateComment" element={<CreateComment />} />
          <Route path="/Comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
