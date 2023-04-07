import React from 'react';
import EventsList from './EventsList';
import FormAddRace from './FormAddRace';

function LK(): JSX.Element {
  return (
    <>
      <div className="title-all-race">Список всех мероприятий</div>
      <div className="lk">
        <EventsList />
        <FormAddRace />
      </div>
    </>
  );
}

export default LK;
