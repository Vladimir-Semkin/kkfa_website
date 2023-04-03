import React from 'react';
import { Result } from './types/types';

function ResultCard({ result }: { result: Result }): JSX.Element {
  return (
    <div>
      <tr>
        <th>{result['Participants.startNomer']}</th>
        <th>
          {result.familiya} {result.name} {result.otchestvo}
        </th>
        <th>{result['Participants.Results.time']}</th>
        <th>{result['Participants.Results.attempt']}</th>
      </tr>
    </div>
  );
}

export default ResultCard;
