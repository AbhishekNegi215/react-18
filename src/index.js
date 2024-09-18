import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from "./App";
import Home from "./components/home";
import Batching from "./components/batching";
import SuspenseApp from "./components/suspense";
import Transition from "./components/transition";
import {  BrowserRouter,  Routes,Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/automatic-batching" element={<Batching/>}/>
      <Route path="/Transition" element={<Transition/>}/>
      <Route path='/suspense' element={<SuspenseApp/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
