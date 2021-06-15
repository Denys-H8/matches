import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './matches.styles';

type TProps = {
  quantity: number;
};

const Matches: React.FC<TProps> = ({ quantity }) => {
  const length = quantity >= 30 ? 30 : quantity;
  const array = new Array(length).fill('1');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quantity}</Text>
      <View style={styles.matchesContainer}>
        {array.map((_, i) => (
          <Text style={styles.text} key={i}>
            ✏️
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Matches;
