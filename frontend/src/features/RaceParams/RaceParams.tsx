import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ResultList from '../Result/ResultList';
import Photos from '../Photos/Photos';
import { RootState } from '../../store';

function RaceParams(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const { racesArr } = useSelector((store: RootState) => store.lk);
  const racesArrId = racesArr.filter((el) =>  el.id === Number(id));

  return (
    <>
      <button
        type="button"
        onClick={() => navigate(`/race/registration/${id}`)}
      >
        Подать заявку
      </button>
      <ResultList id={Number(id)} />
      {racesArrId &&
        racesArrId?.map((el) => (
          <div>
            <div>{el.title}</div>
            <div>{el.date}</div>
          </div>
        ))}
      {racesArrId && <Photos racesArrId={racesArrId[0].GroupPhotos} />}
    </>
  );
}

export default RaceParams;
