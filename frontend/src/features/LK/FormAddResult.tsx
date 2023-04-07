/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addResult } from '../Result/resultSlice';
import { useAppDispatch } from '../../store';

// export default function FormAddResult(): JSX.Element {
//   const [startNomer, setStartNomer] = useState();
//   const [attempt, setAttempt] = useState('');
//   const [time, setTime] = useState('');
//   const dispatch = useAppDispatch();
//   const { id } = useParams;

//   function formAddResult(e: React.FormEvent<HTMLFormElement>): void {
//     e.preventDefault();
//     dispatch(addResult({ id, startNomer, attempt, time }));
//   }

//   return (
//     <div>
//       <form onSubmit={formAddResult}>
//         <input
//           name="startNumber"
//           onChange={(e) => setStartNomer(e.target.value)}
//           value={startNomer}
//         />
    //     <input
    //       name="attempt"
    //       onChange={(e) => setAttempt(e.target.value)}
    //       value={attempt}
    //     />
    //     <input
    //       name="time"
    //       onChange={(e) => setTime(e.target.value)}
    //       value={time}
    //     />
    //     <button type="submit" className="indigo">
    //       Добавить
    //     </button>
    //   </form>
    // </div>
// );
// }
