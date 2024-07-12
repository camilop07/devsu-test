import {StyleSheet} from 'react-native';
import {COLORS} from '@constants/colors';

export const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.softGray,
  },
  image: {height: '50%'},
});
