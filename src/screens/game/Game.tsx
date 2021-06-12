import React, { useState } from 'react';
import { View } from 'react-native';

import { styles } from './game.styles';
import NotStarted from './components/notStartedGame';
import Started from './components/startedGame';

const Game: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      {isStarted ? (
        <Started setIsStarted={setIsStarted} />
      ) : (
        <NotStarted setIsStarted={setIsStarted} />
      )}
    </View>
  );
};

export default Game;
