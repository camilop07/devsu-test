import {COLORS} from '@constants/colors';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  keyText: {
    color: COLORS.backdrop,
  },
});
