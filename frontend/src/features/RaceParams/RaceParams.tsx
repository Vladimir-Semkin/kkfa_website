import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ResultList from '../Result/ResultList';

function RaceParams(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <button type="button" onClick={() => navigate(`/race/registration/${id}`)}>
        Подать заявку
      </button>
      <ResultList id={Number(id)} />
    </>
  );
}

export default RaceParams;
