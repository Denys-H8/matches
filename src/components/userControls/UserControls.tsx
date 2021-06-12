import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import { styles } from './userControls.styles';

type TProps = {
  handleClick: (value: number) => void;
  disabled: boolean;
  matches: number;
  paramM: number;
};

const UserControls: React.FC<TProps> = ({
  handleClick,
  disabled,
  matches,
  paramM,
}) => {
  const [sliderValue, setSliderValue] = useState(1);
  let array: string[] = [];

  if (paramM <= 4) {
    array = new Array(paramM).fill('1');
  }

  return (
    <View style={styles.container}>
      {array.length > 0 ? (
        array.map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.button,
              (disabled || matches - i - 1 < 0) && styles.disabled,
            ]}
            onPress={() => handleClick(i + 1)}
            disabled={disabled || matches - i - 1 < 0}>
            <Text style={styles.text}>{i + 1}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <View style={styles.sliderContainer}>
          <Text style={styles.textSlider}>{sliderValue}</Text>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={paramM > matches ? matches : paramM}
            minimumTrackTintColor="#000"
            maximumTrackTintColor="#999"
            step={1}
            value={sliderValue}
            onValueChange={value => {
              setSliderValue(value);
            }}
          />
          <TouchableOpacity
            style={[
              styles.button,
              (disabled || matches - sliderValue < 0) && styles.disabled,
            ]}
            disabled={disabled || matches - sliderValue < 0}
            onPress={() => {
              handleClick(sliderValue);
              setSliderValue(1);
            }}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default UserControls;
