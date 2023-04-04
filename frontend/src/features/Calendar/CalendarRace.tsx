import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAppDispatch } from '../../store';
// import { delRace } from './raceSlice';
import { Race } from './types/types';

function CalendarRace({ race }: { race: Race }): JSX.Element {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const deleteRace = (): void => {
  //   dispatch(delRace(race.id));
  // };
  return (
    <div>
      <div
        onClick={() => navigate(`/result/${race['Participants.raceEventId']}`)}
      >
        {race.title} {race.date}
      </div>
      {/* <button type="button" onClick={deleteRace}>
        удалить
      </button> */}
    </div>
  );
}

export default CalendarRace;
