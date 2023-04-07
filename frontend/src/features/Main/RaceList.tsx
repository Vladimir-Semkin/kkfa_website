import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import './MainCalendar.css';
import RaceCard from './RaceCard';

function RaceList(): JSX.Element {
  const { racesArr } = useSelector((store: RootState) => store.race);
  const date = new Date(); // получаем дату текущую
  const dateForTimerToDay = date.toISOString().split('T')[0];
  const arr = racesArr.map((el) => el.date);
  const regularDat = arr.map((el) => Number(el.replace(/[\s.-]/g, '')));
  const racesArrFilter = racesArr.filter(
    (el) =>
      Number(el.date.replace(/[\s.-]/g, '')) >
      Number(dateForTimerToDay.replace(/[\s.-]/g, ''))
  );

  return (
    <div>
      <div className="container">
        <div className="divCalendarCard">Предстоящие события:</div>
        {racesArrFilter.length > 0
          ? racesArrFilter.map((race) => (
              <RaceCard
                race={race}
                key={race.id}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default RaceList;
