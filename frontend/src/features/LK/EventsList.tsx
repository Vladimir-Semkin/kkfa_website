import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initRace } from './lkSlice';
import EventCard from './EventCard';

function EventsList(): JSX.Element {
  const { racesArr } = useSelector((store: RootState) => store.lk);
  console.log(racesArr, '00000000s');
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initRace());
  }, []);
  return (
    <div>
      {racesArr.map((race) => (
        <EventCard race={race} key={race.id} />
      ))}
    </div>
  );
}

export default EventsList;
