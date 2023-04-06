import React, { FC } from 'react';
import './timer.scss';
interface CountdownBoxProps {
  left: number | string;
  divideBy: number;
  label: string;
}

const CountdownBox: FC<CountdownBoxProps> = ({ left, divideBy, label }) => {
  return(
    <div className="countdown__box contImg">
      <div className="countdown__box_circles">
        <svg height="110" width="110">

        </svg>
        <div className="countdown__box_left">{left}</div>
      </div>
      <p className="countdown__box_label">{label}</p>
    </div>
  );
}

export default CountdownBox;