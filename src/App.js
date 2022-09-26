import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Add from "./component/Add";
import AddPage from "./component/AddPage";
import FormData from "./component/FormData";
import Edit from "./component/Edit";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/FormData" element={<FormData/>}/>
            <Route path="/Add" element={<Add/>}/>
            <Route path="/AddPage" element={<AddPage/>}/>
            <Route path="/Edit/:id" element={<Edit/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
