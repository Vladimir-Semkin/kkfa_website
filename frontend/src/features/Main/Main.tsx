import React from 'react';
import AboutKkfa from '../aboutKkfa/AboutKkfa';
import Contacts from '../contacts/Contacts';
import ScoringGroups from '../ScoringGroups/ScoringGroups';
import Countdown from '../timer/components/Countdown';
import RaceList from './RaceList';

function Main(): JSX.Element {
  return (
    <div className='main'>
     
      <div className="wrapper">
        <Countdown />
      </div>
      <RaceList />
      <ScoringGroups />
      <Contacts />
      <AboutKkfa />
    </div>
  );
}

export default Main;
