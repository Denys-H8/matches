import { StyleSheet } from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: constants.COLORS_SUB,
    padding: 20,
    paddingBottom: 40,
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    marginTop: 25,
    backgroundColor: constants.COLORS_BUTTON,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});
