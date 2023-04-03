import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import ResultCard from './ResultCard';
import { initResult } from './resultSlice';
import './ResultList.css';

function ResultList(): JSX.Element {
  const { resultsArr } = useSelector((store: RootState) => store.result);
  const { id } = useParams();
  const resultsArrId = resultsArr.filter(
    (resultObj) => resultObj['Participants.raceEventId'] === Number(id),
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initResult());
  }, []);

  return (
    <>
      <h1>Календарь</h1>
      <h2>15 июля 2022</h2>
      <div
        style={{
          display: 'inline-flex',
        }}
      >
        <div>
          <h3>Результаты</h3>
          <div>
            <table>
              <caption>Результаты чемпионата, допустим</caption>
              <tr>
                <th>стартовый номер</th>
                <th>ФИО</th>
                <th>время</th>
                <th>попытка</th>
              </tr>
              {resultsArrId.length > 0
                ? resultsArrId.map((result) => (
                    <ResultCard result={result} key={result.id} />
                  ))
                : null}
            </table>
          </div>
        </div>
        <div>
          <h3>Фотографии с места событий</h3>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default ResultList;
