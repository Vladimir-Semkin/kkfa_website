import React from 'react';
import { Result } from './types/types';

function ResultCard({ result }: { result: Result }): JSX.Element {
  return (
    <div>
      <tr>
        <th>{result['Participant.startNomer']}</th>
        <th>
          {result.familiya} {result.name} {result.otchestvo}
        </th>
        <th>{result['Participant.Results.time']}</th>
        <th>{result['Participant.Results.attempt']}</th>
      </tr>
    </div>
  );
}

export default ResultCard;
