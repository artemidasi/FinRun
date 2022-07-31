import { Nullable } from 'types';

export enum LocalKey {
  access_token = 'access_token',
}

export const loadState = <T>(name: LocalKey): Nullable<T> => {
  try {
    const serializedState = localStorage.getItem(name);

    return serializedState ? JSON.parse(serializedState) : null;
  } catch (err) {
    return null;
  }
};

export const saveState = <T>(name: LocalKey, state: T) => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(name, serializedState);
  } catch {
    // ignore write errors
  }
};

export const removeState = (name: LocalKey) => {
  localStorage.removeItem(name);
};
