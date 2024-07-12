import {StyleSheet} from 'react-native';
import {COLORS} from '@constants/colors';

export const styles = StyleSheet.create({
  modalWrapper: {
    height: '95%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 25,
    width: '100%',
    height: 350,
  },
  typeContentWrapper: {
    flexDirection: 'column',
    color: COLORS.black,
    height: 80,
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
  },
  typeWrapper: {
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    height: 130,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: COLORS.softGray,
    borderBottomColor: COLORS.softGray,
  },
  icon: {
    height: 25,
    width: 25,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  buttonsContainer: {
    marginBottom: 40,
  },
});
