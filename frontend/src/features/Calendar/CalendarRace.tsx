import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Race } from './types/types';

function CalendarRace({ race }: { race: Race }): JSX.Element {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          navigate(`/result/${race['Participants.raceEventId']}`)
        }
      >
        {race.title} {race.date}
      </button>
    </div>
  );
}

export default CalendarRace;
