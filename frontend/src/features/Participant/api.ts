import { IdRace } from '../LK/types/types';
// import { Application } from '../RegApplication/types/types';
import { ApprovedParticipant, ObjAddPart, Participant } from './types/types';

export const initParticipants = async (id: IdRace): Promise<ApprovedParticipant[]> => {
  const res = await fetch(`/api/lk/race/${id}/participant`);
  return res.json();
};
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

export const updPart = async (obj: ObjAddPart): Promise<number> => {
  const res = await fetch(`/api/lk/race/${obj.id}/participant/${obj.applicationId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};