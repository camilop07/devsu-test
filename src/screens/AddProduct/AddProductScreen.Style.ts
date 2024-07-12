import {StyleSheet} from 'react-native';
import {COLORS} from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
  },
  inputText: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: COLORS.softGray,
    backgroundColor: COLORS.white,
    padding: 10,
    height: 40,
    fontSize: 15,
    lineHeight: 16,
    marginVertical: 5,
  },
  errorInputText: {
    borderColor: COLORS.danger,
  },
  field: {
    marginVertical: 5,
  },
  errorText: {
    color: COLORS.danger,
  },
});
