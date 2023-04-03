import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initRace } from './raceSlice';
import CalendarRace from './CalendarRace';

function Calendar(): JSX.Element {
  const { racesArr } = useSelector((store: RootState) => store.race);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initRace());
  }, []);
  return (
    <div>
      {racesArr.length > 0 ? (
        racesArr.map((race) => <CalendarRace race={race} key={race.id} />)
      ) : (
        null
      )}
    </div>
  );
}

export default Calendar;
