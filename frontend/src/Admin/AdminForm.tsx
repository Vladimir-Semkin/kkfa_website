import React from 'react';
import style from './AdminForm.module.css';

export default function AdminForm(): JSX.Element {
  return (
    <div className={style.adminForm}>
      <form>
        <p>email:</p>
        <input />
        <p>password:</p>
        <input />
      </form>
    </div>
  );
}
