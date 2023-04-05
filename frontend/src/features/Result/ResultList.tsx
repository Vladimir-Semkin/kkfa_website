import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import ResultCard from './ResultCard';
import { initResult } from './resultSlice';
import './ResultList.css';
import { IdRace } from '../Calendar/types/types';

function ResultList({ id }: { id: IdRace }): JSX.Element {
  const { resultsArr } = useSelector((store: RootState) => store.result);
  // const { id } = useParams();
  const resultsArrId = resultsArr.filter(
    (resultObj) => resultObj['Participants.raceEventId'] === Number(id),
  );
  console.log(resultsArrId);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initResult());
  }, []);

  return (
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
                <ResultCard
                  result={result}
                  key={result['Participants.Results.id']}
                />
              ))
            : null}
        </table>
      </div>
    </div>
  );
}

export default ResultList;
