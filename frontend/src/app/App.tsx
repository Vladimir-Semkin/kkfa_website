import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../features/navbar/Navbar';
import './App.css';
import RegistrationForm from '../features/RegistrationForm';
import AdminForm from '../Admin/AdminForm';
import { useAppDispatch } from '../store';
import { verificationAdmin } from '../Admin/types/auth.slice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(verificationAdmin());
  }, []);

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
