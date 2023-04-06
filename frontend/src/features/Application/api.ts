import { IdRace } from '../Calendar/types/types';
import { ObjAddPart } from '../Participant/types/types';
import { Application, IdApplication } from '../RegApplication/types/types';

export const initApplication = async (id: IdRace): Promise<Application[]> => {
  const res = await fetch(`/api/lk/race/${id}/application`);
  return res.json();
};

export const delAppl = async (obj: ObjAddPart): Promise<number> => {
  const res = await fetch(
    `/api/lk/race/${obj.id}/application/${obj.applicationId}/delete`,
    {
      method: 'DELETE',
    },
  );
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }

  const data = await res.json();

  return data
};
