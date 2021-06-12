import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './winnerMsg.styles';

type TProps = {
  winner: string;
  matchesAI: number;
  matchesUser: number;
  handleClick: (value: boolean) => void;
};

const WinnerMsg: React.FC<TProps> = ({
  winner,
  matchesAI,
  matchesUser,
  handleClick,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {winner === 'DRAW' ? (
          <Text style={styles.text}>Draw!</Text>
        ) : (
          <Text style={styles.text}>{winner} Wins!</Text>
        )}
        <Text style={styles.text}>
          AI({matchesAI}) : User({matchesUser})
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClick(false)}>
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WinnerMsg;
