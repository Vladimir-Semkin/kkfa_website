import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../features/navbar/Navbar';
import './App.css';
import RegistrationForm from '../features/RegistrationForm';
import AdminForm from '../Admin/AdminForm';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/admin" element={<AdminForm />} />
      </Routes>
    </>
  );
}

export default App;
