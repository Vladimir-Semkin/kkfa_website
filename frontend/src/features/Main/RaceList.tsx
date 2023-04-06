import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initRace } from '../Calendar/raceSlice';
import './MainCalendar.css';
import RaceCard from './RaceCard';

function RaceList(): JSX.Element {
  const { racesArr } = useSelector((store: RootState) => store.race);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(initRace());
  // }, [dispatch]);
  return (
    <><div>
  
    <div className="container">
      {racesArr.length > 0
        ? racesArr.map((race) => <RaceCard race={race} key={race.id} />)
        : null}
    </div></div></>
  );
}

export default RaceList;
