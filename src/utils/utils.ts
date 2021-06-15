import { TState } from '../store/reducer';

export const getAIMoveValue = (
  matches: number,
  matchesAI: number,
  state: TState,
): number => {
  let value = 1;

  if (state.firstMove === 'USER' || matches % (state.paramM + 1) === 1) {
    for (let i = state.paramM; i > 0; i -= 2) {
      if (
        (matches - i) % (state.paramM + 1) === 0 ||
        (matches - i) % (state.paramM + 1) === 1
      ) {
        value = i;
        break;
      }
    }
  } else {
    for (let i = state.paramM; i > 0; i -= 2) {
      if (
        (matches - i) % (state.paramM + 1) === 1 &&
        (matchesAI + i) % 2 === 0
      ) {
        value = i;
        break;
      }
    }
  }

  if (matches <= state.paramM) {
    for (let i = state.paramM; i > 0; i--) {
      if (
        (matches - i === 0 || matches - i === 1) &&
        (matchesAI + i) % 2 === 0
      ) {
        value = i;
        break;
      }
    }
  }

  return value;
};

export const checkWinner = (
  cMatches: number,
  cMatchesUser: number,
  cMatchesAI: number,
): string => {
  if (cMatches === 0) {
    if (cMatchesUser % 2 === 0 && cMatchesAI % 2 === 0) {
      return 'DRAW';
    } else if (cMatchesUser % 2 === 0) {
      return 'User';
    }

    return 'AI';
  } else {
    return '';
  }
};

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
