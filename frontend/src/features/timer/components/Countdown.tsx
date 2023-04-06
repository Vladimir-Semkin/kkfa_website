/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import './timer.scss';
import { useSelector } from 'react-redux';
import daysInYear from '../helpers/daysInYear';
import { RootState, useAppDispatch } from '../../../store';
import { initRace } from '../../Calendar/raceSlice';
import CountdownBox from './CountdownBox';

const Countdown = (): JSX.Element => {
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

  const dateForTimer = String(resultArr[0]).replace(
    /(\d{4})(\d{2})(\d{2})/g,
    '$1-$2-$3'
  );
  let interval: ReturnType<typeof setInterval>;
  const now = new Date();
  const selectedDate = new Date(dateForTimer);
  const millisecondsLeft = selectedDate.getTime() - now.getTime();
  const dLeft = Math.floor(millisecondsLeft / (1000 * 60 * 60 * 24));
  const daysInSelectedYear = daysInYear(selectedDate.getFullYear());

  const yearsLeft = Math.floor(dLeft / daysInSelectedYear);
  const daysLeft = dLeft <= 0 ? 0 : dLeft - yearsLeft * daysInSelectedYear;
  const hoursLeft = Math.floor((millisecondsLeft / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((millisecondsLeft / (1000 * 60)) % 60);
  const secondsLeft = Math.floor((millisecondsLeft / 1000) % 60);

  const yearsLeftOutput = yearsLeft < 10 ? `0${yearsLeft}` : yearsLeft;
  const daysLeftOutput = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
  const hoursLeftOutput = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
  const minutesLeftOutput = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
  const secondsLeftOutput = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: daysLeft > 0 ? daysLeftOutput : '00',
    hours: hoursLeft > 0 ? hoursLeftOutput : '00',
    minutes: minutesLeft > 0 ? minutesLeftOutput : '00',
    seconds: secondsLeft > 0 ? secondsLeftOutput : '00',
  });

  useEffect(() => {
    if (completed) {
      clearInterval(interval);
    }
  }, [completed]);

  useEffect(() => {
    if (!completed) {
      interval = setInterval(() => {
        if (millisecondsLeft > 0) {
          setTimeLeft({
            days: daysLeftOutput,
            hours: hoursLeftOutput,
            minutes: minutesLeftOutput,
            seconds: secondsLeftOutput,
          });
        } else {
          setTimeLeft({
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
          });
          setCompleted(true);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    selectedDate,
    now,
    completed,
    yearsLeft,
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft,
    millisecondsLeft,
    yearsLeftOutput,
    daysLeftOutput,
    hoursLeftOutput,
    minutesLeftOutput,
    secondsLeftOutput,
  ]);

  return (
    <div className="countdownDiv">
      <h1 className="countdownH">Ближайшее событие:</h1>
      <div className="countdown">
        <CountdownBox
          left={timeLeft.days}
          divideBy={daysInSelectedYear}
          label="Дней"
        />
        <div className="vl"></div>
        <CountdownBox
          left={timeLeft.hours}
          divideBy={24}
          label="Часов"
        />
        <div className="vl"></div>
        <CountdownBox
          left={timeLeft.minutes}
          divideBy={60}
          label="Минут"
        />
        <div className="vl"></div>
        <CountdownBox
          left={timeLeft.seconds}
          divideBy={60}
          label="Секунд"
        />
      </div>
    </div>
  );
};

export default Countdown;
