import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  upperSection: {
    marginTop: 30,
    marginBottom: 50,
  },
  titleID: {
    fontSize: 30,
  },
  subtitle: {
    color: COLORS.backdrop,
  },
  image: {
    height: 80,
    width: 'auto',
    resizeMode: 'contain',
  },
});
