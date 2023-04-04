import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { updRace } from './lkSlice';

function EventParams(): JSX.Element {
  const { id } = useParams();
  const { racesArr } = useSelector((store: RootState) => store.race);
  const race = racesArr.find((el) => el.id === Number(id));
  const [title, setTitle] = useState(race?.title);
  const [date, setDate] = useState(race?.date);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function update(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(updRace({ id: Number(id), title, date }));
  }

  return (
    <div className="col s3 ">
      {race && (
        <div className="card-image">
          <p>Заявки</p>
          <p>Участники</p>
          <p>Результаты</p>
          <form onSubmit={update}>
            <input onChange={(e) => setTitle(e.target.value)} value={title} />
            <input onChange={(e) => setDate(e.target.value)} value={date} />
            <button type="submit">сохранить изменения</button>
          </form>
          <p>Добавить фото</p>
          <p>Ссылка на фото</p>
        </div>
      )}
      <button type="button" onClick={() => navigate(-1)}>
        назад
      </button>
    </div>
  );
}

export default EventParams;
