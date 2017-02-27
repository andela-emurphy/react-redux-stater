import { CHANGE_AUTH } from 'types';

export default (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    isLoggedIn
  }
};
