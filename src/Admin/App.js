import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import Main from './Main';




const App = () => {
  return (
    <>
    <ToastContainer />
      <Routes>  
         <Route path="/" element={<Login />} />
         <Route path="/main/*" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;