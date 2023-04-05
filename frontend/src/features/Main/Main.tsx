import React from 'react';
import ScoringGroups from '../ScoringGroups/ScoringGroups';
import RaceList from './RaceList';

function Main(): JSX.Element {
  return (
    <>
      <RaceList />
      <ScoringGroups />
    </>
  );
}

export default Main;
