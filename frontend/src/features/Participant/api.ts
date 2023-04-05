import { IdApplication } from '../RegApplication/types/types';
import { ObjAddPart, Participant } from './types/types';

export const addAppInPart = async (obj: ObjAddPart): Promise<Participant> => {
  const res = await fetch(`/api/lk/race/${obj.id}/application`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
export const delPart = async (obj: ObjAddPart): Promise<number> => {
  const res = await fetch(`/api/lk/race/${obj.id}/application/${obj.applicationId}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
