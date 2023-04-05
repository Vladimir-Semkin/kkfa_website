import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initRace } from '../Calendar/raceSlice';
import './MainCalendar.css';

function TimeBeforeRace(): JSX.Element {
  const { racesArr } = useSelector((store: RootState) => store.race);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initRace());
  }, []);

  const arr = racesArr.map((el) => el.date); // достаем из списка событий массив с датами

  const arrRevers = arr.map((el) => el.split('.').reverse().join('.')); // переворачиваем даты в массиве
  const sortDate = arrRevers.sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime() // сортируем перевернутые
  );

  const regularDat = sortDate.map((el) => Number(el.replace(/[\s.-]/g, ''))); // убрали лишние знаки

  const date = new Date(); // получаем дату текущую

  const dateType = `${String(date.getDate()).padStart(2, '0')}.${
    String(date.getMonth() + 1).padStart(2, '0') // текущая дата в правильном формате
  }.${date.getFullYear()}`;

  const result = dateType.split('.').reverse().join('.').replace(/[\s.]/g, '');
  const resultArr = regularDat.filter((el) => el > Number(result));
  const actualDate = String(resultArr[0])
    .replace(/(\d{4})(\d{2})(\d{2})/g, '$1.$2.$3')
    .split('.')
    .reverse()
    .join('.');

  return (
    <div className="cont">
      <h1>Ближайший этап: {actualDate}</h1>
    </div>
  );
}

export default TimeBeforeRace;