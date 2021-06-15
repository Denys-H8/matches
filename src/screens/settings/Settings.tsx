import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { SettingsContext } from '../../store/context';
import {
  changeFirstMove,
  changeParamM,
  changeParamN,
} from '../../store/actions';
import { styles } from './settings.styles';

const Settings: React.FC = () => {
  const { state, dispatch } = useContext(SettingsContext);

  const onChangeParam = (value: string, type: 'N' | 'M'): void | null => {
    if (+value || value === '') {
      if (type === 'N') {
        if (+value === 0) {
          dispatch(changeParamM(1));
        }

        dispatch(changeParamN(+value));
      } else {
        if (+value > state.paramN * 2 + 1) {
          value = (state.paramN * 2 + 1).toString();
        }

        if (state.paramN === 0) {
          value = '0';
        }
        dispatch(changeParamM(+value));
      }
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>The first move:</Text>
        <View style={styles.firstMoveContainer}>
          <TouchableOpacity onPress={() => dispatch(changeFirstMove('AI'))}>
            <Text
              style={[styles.text, state.firstMove === 'AI' && styles.active]}>
              AI
            </Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity onPress={() => dispatch(changeFirstMove('USER'))}>
            <Text
              style={[
                styles.text,
                state.firstMove === 'USER' && styles.active,
              ]}>
              User
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Parameter N: {state.paramN}</Text>
        <TextInput
          keyboardType="numeric"
          value={state.paramN.toString()}
          onChangeText={text => onChangeParam(text, 'N')}
          style={styles.text}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Parameter M: {state.paramM}</Text>
        <TextInput
          keyboardType="numeric"
          value={state.paramM.toString()}
          onChangeText={text => onChangeParam(text, 'M')}
          style={styles.text}
        />
      </View>
    </View>
  );
};

export default Settings;
