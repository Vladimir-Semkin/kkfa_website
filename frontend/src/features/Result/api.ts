import { Result } from './types/types';

export const initResult = async (): Promise<Result[]> => {
  console.log('lala');
  const res = await fetch('/api/result');
  return res.json();
};

export const lala = () => {};