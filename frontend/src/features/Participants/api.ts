import { Application } from './types/types';

export const addApplication = async (
  obj: Application
): Promise<Application> => {
  console.log(1111);
  const res = await fetch('/api/application', {
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
