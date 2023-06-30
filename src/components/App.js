import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import EnterInfo from './EnterInfo';
import Display from './Display';
import './App.css'

function App() {
    
    return (
      <div>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<EnterInfo/>}/>
        <Route path = '/display' element = {<Display />}/>
      </Routes>
      </BrowserRouter>
      </div>
    );
}

export default App