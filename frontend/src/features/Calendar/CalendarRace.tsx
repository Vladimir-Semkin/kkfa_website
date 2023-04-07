import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Race } from './types/types';

function CalendarRace({ race }: { race: Race }): JSX.Element {
  const navigate = useNavigate();

  return (
    <div>
      <div onClick={() => navigate(`/race/${race.id}`)}>
        {race.title} {race.date}
      </div>
    </div>
  );
}

export default CalendarRace;
