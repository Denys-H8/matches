import { StyleSheet } from 'react-native';
import constants from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS_WHITE,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  subContainer: {
    alignItems: 'center',
  },
  heading: {
    color: constants.COLORS_DARK,
    fontSize: 45,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    backgroundColor: constants.COLORS_BUTTON,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: constants.COLORS_DARK,
    fontSize: 20,
  },
});
