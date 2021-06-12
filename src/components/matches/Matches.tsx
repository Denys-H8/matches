import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './matches.styles';

type TProps = {
  quantity: string[];
};

const Matches: React.FC<TProps> = ({ quantity }) => {
  if (quantity.length > 30) {
    quantity.splice(30);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quantity.length}</Text>
      <View style={styles.matchesContainer}>
        {quantity.map((_, i) => (
          <Text style={styles.text} key={i}>
            ✏️
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Matches;
