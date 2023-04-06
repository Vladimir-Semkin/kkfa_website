import React from 'react';
import { GroupPhotos } from './types/type';
import style from './Photos.module.css';

function Photos({
  racesArrId,
}: {
  racesArrId: GroupPhotos[] | undefined;
}): JSX.Element {
  return (
    <div>
      {racesArrId &&
      racesArrId?.map((el) => (
        <img className={style.photo} src={el.photo} alt="..." />
      ))}
    </div>
  );
}

export default Photos;
