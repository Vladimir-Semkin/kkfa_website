import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { delRace } from './lkSlice';
import { Race } from './types/types';
import style from './EventCard.module.css';

function EventCard({ race }: { race: Race }): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const deleteRace = (): void => {
    dispatch(delRace(race.id));
  };
  return (
    <div>
      <div onClick={() => navigate(`/lk/race/${race.id}`)}>
        <div>
          {race.photo && (
            <img
              className={style.photoEvent}
              src={race?.photo}
              alt="car&event"
            />
          )}
        </div>
        <div className={style.title}>
          {race.title} {race.date}
        </div>
      </div>
      <button type="button" onClick={deleteRace}>
        удалить
      </button>
    </div>
  );
}

export default EventCard;
