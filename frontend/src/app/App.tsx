import React from 'react';
import NavBar from '../features/navbar/Navbar';
import './App.css';
import RegistrationForm from '../features/RegistrationForm';
import Document from '../features/documents/Documents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<RegistrationForm/>}/>
          <Route
            path="/docs"
            element={<Document />}
          />
        </Routes>
       ?
      </BrowserRouter>
    </>
  );
}

export default App;
