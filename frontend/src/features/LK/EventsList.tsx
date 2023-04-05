import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initRace } from './lkSlice';
import EventCard from './EventCard';

function EventsList(): JSX.Element {
  const { racesArr } = useSelector((store: RootState) => store.lk);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initRace());
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>Название</th>
          <th>Дата</th>
          <th>Что-то</th>
        </tr>
        {racesArr.map((race) => (
          <EventCard race={race} key={race.id} />
        ))}
      </table>
    </div>
  );
}

export default EventsList;
