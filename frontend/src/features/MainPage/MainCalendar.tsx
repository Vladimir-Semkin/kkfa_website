import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initRace } from '../Calendar/raceSlice';
import ScoringGroups from '../ScoringGroups/ScoringGroups';
import CalendarCard from './CalendarCard';
import './MainCalendar.css';

function MainCalendar(): JSX.Element {
  const { racesArr } = useSelector((store: RootState) => store.race);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initRace());
  }, []);
  return (
    <div className="cont">
      {' '}
      <div className="container">
        {racesArr.length > 0
          ? racesArr.map((race) => (
              <CalendarCard
                race={race}
                key={race.id}
              />
            ))
          : null}
      </div>
      <div className="slider">
        <ScoringGroups />
      </div>
    </div>
  );
}

export default MainCalendar;
