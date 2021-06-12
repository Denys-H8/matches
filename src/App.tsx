import React from 'react';

import SettingsProvider from './store';
import MainNavigator from './navigation';

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <MainNavigator />
    </SettingsProvider>
  );
};

export default App;
