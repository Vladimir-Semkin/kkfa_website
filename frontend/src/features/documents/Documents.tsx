/* eslint-disable jsx-a11y/iframe-has-title */

import React from 'react';

function Document(): JSX.Element {
  return (
    <div>
      <div>
        <iframe
          src="https://drive.google.com/file/d/1m2Dp4DvDDL34fF2YC9Z0FF1awMe0_3Ab/preview"
          width="640"
          height="480"
          allow="autoplay"
        />
        <a href="https://drive.google.com/uc?export=download&id=1m2Dp4DvDDL34fF2YC9Z0FF1awMe0_3Ab">
          Скачать
        </a>
      </div>
      <div>
        <iframe
          src="https://drive.google.com/file/d/1QepBviqG-ZuZaK-YamhSpuJGkvEWHALc/preview"
          width="640"
          height="480"
          allow="autoplay"
        />
        <a href="https://drive.google.com/uc?export=download&id=1QepBviqG-ZuZaK-YamhSpuJGkvEWHALc">
          Скачать
        </a>
      </div>
    </div>
  );
}

export default Document;
