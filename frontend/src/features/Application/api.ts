import { IdRace } from '../Calendar/types/types';
import { Application } from '../RegApplication/types/types';

export const initApplication = async (id: IdRace): Promise<Application[]> => {
  const res = await fetch(`/api/lk/race/${id}/application`);
  return res.json();
};

export const fjjdf = 1;
