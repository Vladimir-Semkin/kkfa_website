import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initRace } from './lkSlice';
import EventCard from './EventCard';
import './EventStyle.css';

function EventsList(): JSX.Element {
  const { racesArr } = useSelector((store: RootState) => store.lk);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initRace());
  }, []);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Название</th>
          <th>Дата</th>
          <th>Фотография</th>
          <th />
          <th />
        </tr>
      </thead>
      {racesArr.map((race) => (
        <EventCard race={race} key={race.id} />
      ))}
    </table>
  );
}

export default EventsList;
