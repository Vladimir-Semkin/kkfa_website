import { Race } from './types/types';

export const initRace = async (): Promise<Race[]> => {
  
  const res = await fetch('/api/calendar');
  return res.json();
};

export const lala = () => {};