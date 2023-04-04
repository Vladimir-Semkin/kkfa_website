import { IdRace, Message, Race } from './types/types';

export const initRace = async (): Promise<Race[]> => {

  const res = await fetch('/api/calendar');
  return res.json();
};
export const kfk = () => {};
// export const addRace = async (obj:Race):Promise<Race> => {
//   const res = await fetch('/api/lk', {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify(obj)
//    });
//    if (!res.ok) {
//        const { message } = await res.json();
//        throw message;
//     }
//     return res.json();
// };
// export const delRace = async (id:IdRace):Promise<number | Message> => {
//   const res = await fetch(`/api/lk/${id}`, {
//        method: 'DELETE',
//    });
//    if (!res.ok) {
//       const { message } = await res.json();
//       throw message;
//    }
//    return res.json();
// };
