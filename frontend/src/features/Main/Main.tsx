import React from 'react';
import Contacts from '../contacts/Contacts';
import ScoringGroups from '../ScoringGroups/ScoringGroups';
import RaceList from './RaceList';
import TimeBeforeRace from './TimeBeforeRace';

function Main(): JSX.Element {
  return (
    <>
      <TimeBeforeRace />
      <RaceList />
      <ScoringGroups />
      <Contacts />
      {/* <p></p> */}
    </>
  );
}

export default Main;
