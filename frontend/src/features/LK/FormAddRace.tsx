/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { addRace } from './lkSlice';
import { useAppDispatch } from '../../store';

export default function FormAddRace(): JSX.Element {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();

  function add(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(addRace({ title, date, photo, description }));
  }

  return (
    <div>
      <form onSubmit={add}>
        <input
          placeholder="Наименование"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          placeholder="Дата"
          type="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <input
          placeholder="Фото"
          name="photo"
          onChange={(e) => setPhoto(e.target.value)}
          value={photo}
        />
        <textarea
          placeholder="Описание"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button type="submit" className="indigo">
          Добавить
        </button>
      </form>
    </div>
  );
}
