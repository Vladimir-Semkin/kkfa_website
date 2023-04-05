import { Application } from './types/types';

export const addApplication = async (
  obj: Application,
): Promise<Application> => {
  const res = await fetch(`/api/race/registration/${obj.id}`, {
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

export const st = 1;
