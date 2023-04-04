/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { addRace } from './lkSlice';
import { useAppDispatch } from '../../store';

export default function FormAddRace(): JSX.Element {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useAppDispatch();

  function add(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(addRace({ title, date }));
  }

  return (
    <div>
      <form onSubmit={add}>
        <input
          placeholder="наименование"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          placeholder="дата"
          name="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <button type="submit" className="indigo">
          Добавить
        </button>
      </form>
    </div>
  );
}
