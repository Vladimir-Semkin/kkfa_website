/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page404.css';
function Page404():JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="container404">
      <div className="text404">
        <button
          onClick={() => navigate('/')}
          className="button404"
        >
          На главную
        </button>
        <span>Кажется, что-то пошло не так...</span>
      </div>

      <img
        className="photoTimeAttack"
        src="./page404Img/24Crash_1-superJumbo.jpg"
      />
    </div>
  );
}

export default Page404;
