import React, { createContext, useReducer } from 'react';

import { initialState, SettingsReducer, TState } from './reducer';

export const SettingsContext = createContext<{
  state: TState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const SettingsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(SettingsReducer, initialState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
