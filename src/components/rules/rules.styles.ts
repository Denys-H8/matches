import { StyleSheet } from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    backgroundColor: constants.COLORS_BUTTON,
    padding: 20,
    paddingBottom: 40,
    borderRadius: 15,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
});
