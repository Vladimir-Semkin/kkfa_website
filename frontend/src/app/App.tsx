import React from 'react';
import Document from '../features/documents/Documents';
import FormAddApplication from '../features/navbar/FormAddApplication';
import NavBar from '../features/navbar/Navbar';


import './App.css';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <FormAddApplication />{' '}
      <Document/>
      
    </>
  );
}

export default App;
