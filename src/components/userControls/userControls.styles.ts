import { StyleSheet } from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: constants.COLORS_BUTTON,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    color: constants.COLORS_DARK,
  },
  disabled: {
    opacity: 0.3,
  },
  sliderContainer: {
    alignItems: 'center',
  },
  slider: {
    width: 200,
    height: 40,
  },
  textSlider: {
    fontSize: 20,
    color: constants.COLORS_DARK,
  },
});
