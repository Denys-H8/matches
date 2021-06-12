import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './score.styles';

type TProps = {
  type: string;
  value: number;
};

const Score: React.FC<TProps> = ({ type, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {type} {value}
      </Text>
    </View>
  );
};

export default Score;
