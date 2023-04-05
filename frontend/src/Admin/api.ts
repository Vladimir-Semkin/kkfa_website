import { Admin, Message } from './types/types';

export const login = async (obj: Admin): Promise<Admin | Message> => {
  const res = await fetch('/api/auth/sign-in', {
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

export const session = async (): Promise<Admin | Message> => {
  const res = await fetch('/api/auth/verification', { credentials: 'include' });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const logout = async (): Promise<Message> => {
  const res = await fetch('/api/auth/logout', { credentials: 'include' });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
