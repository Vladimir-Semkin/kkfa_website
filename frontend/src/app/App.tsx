import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResultList from '../features/Result/ResultList';
import './App.css';
import Calendar from '../features/Calendar/Calendar';
import NavBar from '../features/navbar/Navbar';
import RegistrationForm from '../features/RegistrationForm';
import AdminForm from '../Admin/AdminForm';
import Document from '../features/documents/Documents';
import AdminPage from '../features/adminPage/AdminPage';
import MainCalendar from '../features/MainPage/MainCalendar';

function App(): JSX.Element {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<MainCalendar />}
        />
        <Route
          path="/registration"
          element={<RegistrationForm />}
        />
        <Route
          path="/admin"
          element={<AdminForm />}
        />
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
        <Route
          path="/docs"
          element={<Document />}
        />
        <Route
          path="/admin"
          element={<AdminPage />}
        />
      </Routes>
    </>
  );
}

export default App;
