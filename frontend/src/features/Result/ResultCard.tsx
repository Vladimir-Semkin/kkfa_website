import React from 'react';
import { Result } from './types/types';

function ResultCard({ result }: { result: Result }): JSX.Element {
  return (
    <>
      <td>{result['Participants.startNomer']}</td>
      <td>
        {result.familiya} {result.name} {result.otchestvo}
      </td>
      <td>{result['Participants.Results.time']}</td>
      <td>{result['Participants.Results.attempt']}</td>
    </>
  )
}

export default ResultCard;
