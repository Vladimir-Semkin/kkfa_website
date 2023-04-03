import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../features/navbar/Navbar';


import ResultList from '../features/Result/ResultList';

import './App.css';
import Calendar from '../features/Calendar/Calendar';
import NavBar from '../features/navbar/Navbar';
import RegistrationForm from '../features/RegistrationForm';
import AdminForm from '../Admin/AdminForm';
import Document from '../features/documents/Documents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from '../features/adminPage/AdminPage';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/admin" element={<AdminForm />} />
      </Routes>
        <Route
          path="/calendar"
          element={<Calendar />}
        />
        <Route
          path="/result/:id"
          element={<ResultList />}
        />
        <Route
          path="/lk"
          element={<ResultList />}
        />
      </Routes>
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
