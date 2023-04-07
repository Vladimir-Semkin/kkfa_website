import { Result } from './types/types';

export const initResult = async (): Promise<Result[]> => {
  const res = await fetch('/api/race');
  return res.json();
};

export const addResult = async (obj: Result): Promise<Result> => {
  const res = await fetch(`/api/lk/race/${obj.id}/results`, {
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