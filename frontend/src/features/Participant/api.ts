import { IdApplication } from '../RegApplication/types/types';
import { Participant } from './types/types';

export const addAppInPart = async (id: IdApplication): Promise<Participant> => {
  const res = await fetch(`/api/lk/race/${id}/application`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(id),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
export const jsdjd = 1;
