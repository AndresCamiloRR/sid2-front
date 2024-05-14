import './App.css';
import Home from './Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import CreateEvent from './Events/CreateEvent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/CreateEvent" element={<CreateEvent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
