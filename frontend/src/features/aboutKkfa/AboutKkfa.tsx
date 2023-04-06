import React from 'react';

import './AboutKkfa.css';
function AboutKkfa(): JSX.Element {
  return (
    <div className="container">
      <div>
        <img
          src="/contactsImg/111.png"
          height={450}
        />
      </div>
      <div className="textDiv">
        {' '}
        <span>
          {' '}
          <span className="textHeader">Краснодарская краевая</span> <br />
          федерация автоспорта занимается
          <br /> проведением автоспортивных мероприятий различного
          <br /> уровня на протяжении 15 лет. В том числе и любительских <br />
          соревнований по дисциплине time-attack в которых может принять участие
          практически любой желающий.
        </span>
      </div>
    </div>
  );
}

export default AboutKkfa;
