import {
  CHANGE_FIRST_MOVE,
  CHANGE_PARAM_N,
  CHANGE_PARAM_M,
} from './actionTypes';

export const changeFirstMove = (player: string) => ({
  type: CHANGE_FIRST_MOVE,
  payload: player,
});
export const changeParamN = (value: number) => ({
  type: CHANGE_PARAM_N,
  payload: value,
});
export const changeParamM = (value: number) => ({
  type: CHANGE_PARAM_M,
  payload: value,
});
