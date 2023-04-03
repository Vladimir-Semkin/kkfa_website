import React from 'react';
import NavBar from '../features/navbar/Navbar';
import './App.css';
import RegistrationForm from '../features/RegistrationForm';
import Document from '../features/documents/Documents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from '../features/adminPage/AdminPage';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<RegistrationForm />}
          />
          <Route
            path="/docs"
            element={<Document />}
          />
          <Route
            path="/admin"
            element={<AdminPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
