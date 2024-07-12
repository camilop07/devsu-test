import {StyleSheet} from 'react-native';
import {COLORS} from '@constants/colors';

export const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    height: 50,
    padding: 8,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  md: {
    width: '80%',
    padding: 15,
  },
  full: {
    width: '90%',
  },
  sm: {
    width: '40%',
  },
  primary: {
    backgroundColor: COLORS.yellow,
  },
  danger: {
    backgroundColor: COLORS.danger,
  },
  ghost: {
    backgroundColor: COLORS.softGray,
  },
  textBase: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  text_primary: {
    color: COLORS.black,
  },

  text_danger: {
    color: COLORS.white,
  },
  text_ghost: {
    color: COLORS.black,
  },
});
