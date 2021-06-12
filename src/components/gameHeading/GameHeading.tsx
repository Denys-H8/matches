import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './gameHeading.styles';

type TProps = {
  handleBack: (value: boolean) => void;
  handleShowRules: (value: boolean) => void;
};

const GameHeading: React.FC<TProps> = ({ handleBack, handleShowRules }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleBack(false)}>
        <Text style={styles.button}>⬅️</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleShowRules(true)}>
        <Text style={styles.button}>❓</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameHeading;
