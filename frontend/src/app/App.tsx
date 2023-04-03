import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResultList from '../features/Result/ResultList';

import NavBar from '../features/navbar/Navbar';
// import { useAppDispatch } from '../store';
// import { initResult } from '../features/Result/resultSlice';

import './App.css';
import Calendar from '../features/Calendar/Calendar';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/result/:id" element={<ResultList />} />
        <Route path="/lk" element={<ResultList />} />

      </Routes>
    </>
  );
}

export default App;
