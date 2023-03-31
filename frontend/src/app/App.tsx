import React from 'react';
import FormAddApplication from '../features/navbar/FormAddApplication';
import NavBar from '../features/navbar/Navbar';

import './App.css';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <FormAddApplication />{' '}
    </>
  );
}

export default App;
