import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calendar from '../features/Calendar/Calendar';
import NavBar from '../features/navbar/Navbar';
import TimeAttack from '../features/adoutTimeAttack/TimeAttack';
import ApplicationList from '../features/Application/ApplicationList';
import RegistrationForm from '../features/RegApplication/RegistrationForm';
import AdminForm from '../features/Admin/AdminForm';
import { useAppDispatch } from '../store';
import { verificationAdmin } from '../features/Admin/types/auth.slice';
import Document from '../features/documents/Documents';
import LK from '../features/LK/LK';
import EventParams from '../features/LK/EventParams';
import Main from '../features/Main/Main';
import RaceParams from '../features/RaceParams/RaceParams';
import { initRace } from '../features/LK/lkSlice';
import { initResult } from '../features/Result/resultSlice';
import ParticipantList from '../features/Participant/ParticipantList';
import Page404 from '../features/page404/Page404';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(verificationAdmin());
    dispatch(initRace());
    dispatch(initResult());
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/admin"
          element={<AdminForm />}
        />
        <Route
          path="/lk"
          element={<LK />}
        />
        <Route
          path="/lk/race/:id"
          element={<EventParams />}
        />
        <Route
          path="/lk/race/:id/application"
          element={<ApplicationList />}
        />
        <Route
          path="/calendar"
          element={<Calendar />}
        />
        <Route
          path="/race/:id"
          element={<RaceParams />}
        />
        <Route
          path="/race/registration/:id"
          element={<RegistrationForm />}
        />
        <Route
          path="/docs"
          element={<Document />}
        />
        <Route
          path="/abouttimeattack"
          element={<TimeAttack />}
        />
        <Route
          path="*"
          element={<Page404 />}
        />
        <Route
          path="lk/race/:id/participant"
          element={<ParticipantList />}
        />
      </Routes>
    </>
  );
}

export default App;
