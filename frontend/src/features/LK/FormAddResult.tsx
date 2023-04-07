/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addResult } from '../Result/resultSlice';
import { useAppDispatch } from '../../store';

export default function FormAddResult(): JSX.Element {
    const [startNomer, setStartNomer] = useState(0);
    const [attempt, setAttempt] = useState(0);
    const [time, setTime] = useState(0);
    const { id } = useParams();
  const dispatch = useAppDispatch();

  function formAddResult(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(addResult({ id: Number(id), startNomer, attempt, time }));
  }
console.log(attempt);

  return (
    <div>
      <form onSubmit={formAddResult}>
        <input
          name="startNumber"
          onChange={(e) => setStartNomer(Number(e.target.value))}
          value={startNomer}
        />
        <input
          name="attempt"
          onChange={(e) => setAttempt(Number(e.target.value))}
          value={attempt}
        />
        <input
          name="time"
          onChange={(e) => setTime(Number(e.target.value))}
          value={time}
        />
        <button type="submit" className="indigo">
          Добавить
        </button>
      </form>
    </div>
  );
}
