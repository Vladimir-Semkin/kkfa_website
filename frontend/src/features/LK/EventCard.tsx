import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { delRace } from './lkSlice';
import { Race } from './types/types';
// import style from './EventCard.module.css';
import './EventStyle.css';

function EventCard({ race }: { race: Race }): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const deleteRace = (): void => {
    dispatch(delRace(race.id));
  };
  return (
    <tbody>
      <tr>
        <td>{race.title}</td>
        <td>{race.date}</td>
        <td>
          {race.photo && (
            <img className="photoEvent" src={race?.photo} alt="car&event" />
          )}
        </td>
        <td>
          <button
            type="button"
            onClick={deleteRace}
            className="icon-del-race"
          />
        </td>
        <td>
          <button
            type="button"
            onClick={() => navigate(`/lk/race/${race.id}`)}
            className="icon-open-race"
          />
        </td>
      </tr>
    </tbody>
  );
}

export default EventCard;
