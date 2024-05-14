import React from "react";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
import CreateEvent from "../Events/CreateEvent";

export default function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/CreateEvent" element={<CreateEvent/>}></Route>
            </Routes>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);