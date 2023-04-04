import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './AdminForm.module.css';
import { RootState } from '../store';
import { loginAdmin } from './types/auth.slice';

export default function AdminForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { admin, error } = useSelector((store: RootState) => store.auth);

  if ('id' in admin) {
    navigate('/');
  }

  const login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(loginAdmin({ email, password }));
  };
  return (
    <div className={style.adminForm}>
      <form onSubmit={login}>
        <p>email:</p>
        <input onChange={(e) => setEmail(e.target.value)} value={email} />
        <p>password:</p>
        <input onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit">войти</button>
      </form>
      {error && <h4>{error}</h4>}
    </div>
  );
}
