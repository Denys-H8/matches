import { StyleSheet } from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  matchesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '50%',
  },
  text: {
    fontSize: 22,
    color: constants.COLORS_DARK,
  },
});
