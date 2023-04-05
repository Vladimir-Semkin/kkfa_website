/* eslint-disable jsx-a11y/iframe-has-title */

import React from 'react';
import { Button } from '@mui/material';
import './Document.css';

function Document(): JSX.Element {
  return (
    <div className="container">
      <div className="doc1">
        <h2>Регламент Сочи Автодром</h2>
        <iframe
          src="https://drive.google.com/file/d/1m2Dp4DvDDL34fF2YC9Z0FF1awMe0_3Ab/preview"
          width="640"
          height="480"
          allow="autoplay"
        />
        <Button
          variant="contained"
          color="success"
          href="https://drive.google.com/uc?export=download&id=1m2Dp4DvDDL34fF2YC9Z0FF1awMe0_3Ab"
        >
          Скачать
        </Button>
      </div>
      <div className="doc1">
        <h2>Регламент Усть-Лабинск</h2>
        <iframe
          src="https://drive.google.com/file/d/1QepBviqG-ZuZaK-YamhSpuJGkvEWHALc/preview"
          width="640"
          height="480"
          allow="autoplay"
        />
        <Button
          variant="contained"
          color="success"
          href="https://drive.google.com/uc?export=download&id=1QepBviqG-ZuZaK-YamhSpuJGkvEWHALc"
        >
          Скачать
        </Button>
      </div>
    </div>
  );
}

export default Document;
