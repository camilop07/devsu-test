import {StyleSheet} from 'react-native';
import {COLORS} from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginBottom: 10,
    flex: 1,
  },
  principalContainer: {
    flex: 1,
  },
  flatListContainer: {
    margin: 20,
    borderColor: COLORS.softGray,
    borderWidth: 1,
    borderRadius: 10,
  },
  flatlist: {
    flexGrow: 1,
  },
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 40,
    margin: 20,
  },
  subtitle: {
    color: COLORS.black,
    fontSize: 16,
    margin: 20,
  },
  inputText: {
    borderWidth: 2,
    borderColor: COLORS.softGray,
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 50,
    padding: 10,
    height: 50,
    fontSize: 15,
    lineHeight: 16,
  },
  separator: {height: 1, backgroundColor: COLORS.softGray},
  notFoundContainer: {
    alignSelf: 'center',
    paddingTop: 100,
    paddingHorizontal: 15,
  },
  notFoundText: {
    fontSize: 20,
  },
});
