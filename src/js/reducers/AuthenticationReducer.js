import { CHANGE_AUTH } from '../actions/types';

export default (state = false, actions) => {
  switch (actions.type) {
    case  CHANGE_AUTH:
      return actions.isLoggedIn
    default:
      return state;
  }
}