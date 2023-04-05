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
    <tr>
      <td>{race.title}</td>
      <td>{race.date}</td>
      <td>
        {race.photo && (
          <img className={style.photoEvent} src={race?.photo} alt="car&event" />
        )}
      </td>
      <td>
        <button type="button" onClick={deleteRace}>
          удалить
        </button>
      </td>
      <td>
        <button type="button" onClick={() => navigate(`/lk/race/${race.id}`)}>
          окрыть
        </button>
      </td>
    </tr>
  );
}

export default EventCard;
