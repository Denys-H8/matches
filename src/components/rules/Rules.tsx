import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './rules.styles';

type TProps = {
  handleClose: (value: boolean) => void;
};

const Rules: React.FC<TProps> = ({ handleClose }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.nav} onPress={() => handleClose(false)}>
          <Text>❌</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Двое играют в игру. Из кучки, где имеется 25 спичек, каждый берёт себе
          по очереди одну, две или три спички. Выигрывает тот, у кого в конце
          игры – после того, как все спички будут разобраны, – окажется четное
          число спичек. Игра реализуется по алгоритму (2n + 1) спичек, m ходов.
          Эти параметры можно настроить на экране Settings.
        </Text>
      </View>
    </View>
  );
};

export default Rules;
