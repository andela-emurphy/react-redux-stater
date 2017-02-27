import { CHANGE_AUTH } from './types';

export const isAuthenticated = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    isLoggedIn
  }
};
