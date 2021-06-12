import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './notStarted.styles';

type TProps = {
  setIsStarted: (value: boolean) => void;
};

const NotStarted: React.FC<TProps> = ({ setIsStarted }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Matches</Text>
        <Text style={styles.text}>Press PLAY to start the game</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsStarted(true)}>
        <Text style={styles.text}>PLAY</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotStarted;
