import {
  CHANGE_FIRST_MOVE,
  CHANGE_PARAM_N,
  CHANGE_PARAM_M,
} from './actionTypes';

export type TState = {
  firstMove: 'USER' | 'AI';
  paramN: number;
  paramM: number;
};

export const initialState = {
  firstMove: 'USER',
  paramN: 12,
  paramM: 3,
};

export const SettingsReducer = (
  state = initialState,
  action: { type: string; payload?: any },
) => {
  switch (action.type) {
    case CHANGE_FIRST_MOVE:
      return {
        ...state,
        firstMove: action.payload,
      };
    case CHANGE_PARAM_N:
      return {
        ...state,
        paramN: action.payload,
      };
    case CHANGE_PARAM_M:
      return {
        ...state,
        paramM: action.payload,
      };
    default:
      return state;
  }
};
