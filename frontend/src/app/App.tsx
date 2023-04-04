import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ResultList from '../features/Result/ResultList';
import './App.css';
import Calendar from '../features/Calendar/Calendar';
import NavBar from '../features/navbar/Navbar';
import RegistrationForm from '../features/RegistrationForm';
import AdminForm from '../Admin/AdminForm';
import { useAppDispatch } from '../store';
import { verificationAdmin } from '../Admin/types/auth.slice';
import Document from '../features/documents/Documents';
// import AdminPage from '../features/adminPage/AdminPage';
import LK from '../features/LK/LK';
import EventParams from '../features/LK/EventParams';
import MainCalendar from '../features/MainPage/MainCalendar';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(verificationAdmin());
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainCalendar />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/result/:id" element={<ResultList />} />
        <Route path="/lk" element={<LK />} />
        <Route path="/docs" element={<Document />} />
        <Route path="/lk/race/:id" element={<EventParams />} />
        <Route path="/docs" element={<Document />} />
      </Routes>
    </>
  );
}

export default App;
