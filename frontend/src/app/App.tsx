import React from 'react';
import NavBar from '../features/navbar/Navbar';
import './App.css';
import RegistrationForm from '../features/RegistrationForm';

function App(): JSX.Element {
  return (
    <>
    
      <NavBar />
      <RegistrationForm />
    </>
  );
}

export default App;
