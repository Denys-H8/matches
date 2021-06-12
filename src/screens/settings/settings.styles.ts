import { StyleSheet } from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS_WHITE,
    padding: 15,
  },
  section: {
    borderColor: constants.COLORS_DARK,
    borderBottomWidth: 2,
    padding: 10,
  },
  firstMoveContainer: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: constants.COLORS_DARK,
  },
  active: {
    color: constants.COLORS_MAIN,
  },
  divider: {
    width: 1,
    backgroundColor: constants.COLORS_DARK,
    marginHorizontal: 12,
  },
});
