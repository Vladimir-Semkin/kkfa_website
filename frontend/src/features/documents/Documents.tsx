/* eslint-disable jsx-a11y/iframe-has-title */

import React from 'react';
import { Button } from '@mui/material';
import './Document.css';

function Document(): JSX.Element {
  return (
    <div className="containerDoc">
      <div className="doc1">
        <h2 className='h2Docs'>Регламент Сочи Автодром</h2>
        <iframe
          src="https://drive.google.com/file/d/1m2Dp4DvDDL34fF2YC9Z0FF1awMe0_3Ab/preview"
         height='500'
          allow="autoplay"
        />
        <Button
          variant="contained"
        
          
          href="https://drive.google.com/uc?export=download&id=1m2Dp4DvDDL34fF2YC9Z0FF1awMe0_3Ab"
        >
          Скачать
        </Button>
      </div>
      <div className="doc1">
        <h2 className='h2Docs'>Регламент Усть-Лабинск</h2>
        <iframe
          src="https://drive.google.com/file/d/1QepBviqG-ZuZaK-YamhSpuJGkvEWHALc/preview"
          height='500'
          allow="autoplay"
        />
        <Button
          variant="contained"
         
          href="https://drive.google.com/uc?export=download&id=1QepBviqG-ZuZaK-YamhSpuJGkvEWHALc"
        >
          Скачать
        </Button>
      </div>
    </div>
  );
}

export default Document;
