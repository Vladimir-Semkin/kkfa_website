import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';



import ArhivCard from './ArhivCard';

function RaceArhiv():JSX.Element {
    const { racesArr } = useSelector((store: RootState) => store.race);
    const date = new Date(); // получаем дату текущую
  const dateForTimerToDay = date.toISOString().split('T')[0];
    const arr = racesArr.map((el) => el.date)
    // const regularDat = arr.map((el) => Number(el.replace(/[\s.-]/g, '')))
    const racesArrFilter = racesArr.filter((el) => Number(el.date.replace(/[\s.-]/g, '')) < Number(dateForTimerToDay.replace(/[\s.-]/g, '')));
  return (
    <div >
     

    <div className="container">
       <div className="divCalendarCard">Прошедшие события:</div>
      {racesArrFilter.length > 0
        ? racesArrFilter.map((race) => (
            <ArhivCard
              race={race}
              key={race.id}
            />
          ))
        : null}
    </div>
  </div>
  )
}

export default RaceArhiv