import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ResultList from '../Result/ResultList';
import Photos from '../Photos/Photos';
import { RootState } from '../../store';
import style from './RaceParams.module.css';

function RaceParams(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const { racesArr } = useSelector((store: RootState) => store.lk);
  const date = new Date(); // получаем дату текущую
  const dateForTimerToDay = date.toISOString().split('T')[0];
  const arr = racesArr.map((el) => el.date);
  const regularDat = arr.map((el) => Number(el?.replace(/[\s.-]/g, '')));
  const racesArrFilter = racesArr.filter(
    (el) =>
      Number(el.date?.replace(/[\s.-]/g, '')) >
      Number(dateForTimerToDay.replace(/[\s.-]/g, ''))
  );
  const racesArrId = racesArr.filter((el) => el.id === Number(id));
  const res = racesArrFilter.map((el) => el.id);
  // console.log(racesArrFilter)
  // console.log(res)
  return (
    <>
      {res.includes(Number(id)) && (
        <button
          type="button"
          onClick={() => navigate(`/race/registration/${id}`)}
        >
          Подать заявку
        </button>
      )}

      <ResultList id={Number(id)} />
      {racesArrId &&
        racesArrId?.map((el) => (
          <div>
            <div >{el.title}</div>
            <div>{el.date}</div>
            {el.link && (
              <div>
                <a
                  className={style.link}
                  href={el.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  Посмотреть галерею фотографий на яндекс диске
                </a>
              </div>
            )}

          </div>
        ))}
      {racesArrId && <Photos racesArrId={racesArrId[0].GroupPhotos} />}
    </>
  );
}

export default RaceParams;
