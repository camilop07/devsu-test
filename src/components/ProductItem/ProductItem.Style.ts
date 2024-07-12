import {StyleSheet} from 'react-native';
import {COLORS} from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  leftContainer: {
    height: '100%',
    paddingVertical: 10,
  },
  icon: {
    height: 15,
    width: 15,
  },
  idText: {
    color: COLORS.backdrop,
  },
  // imageContainer: {
  //   borderBottomLeftRadius: 10,
  //   borderBottomRightRadius: 10,
  //   borderRadius: 10,
  //   overflow: 'hidden',
  // },
  // itemContainer: {
  //   borderRadius: 10,
  //   margin: 15,
  //   overflow: 'hidden',
  //   backgroundColor: COLORS.softGray,
  //   padding: 10,
  // },
  // image: {
  //   aspectRatio: 1,
  //   height: undefined,
  //   width: '100%',
  // },
  // button: {
  //   backgroundColor: COLORS.black,
  //   borderRadius: 50,
  //   marginTop: 10,
  //   padding: 8,
  //   width: '80%',
  // },
  // buttonDanger: {
  //   borderColor: COLORS.danger,
  //   borderWidth: 1,
  //   borderRadius: 50,
  //   marginTop: 10,
  //   padding: 8,
  //   width: '100%',
  // },
  // textButtonDanger: {
  //   color: COLORS.danger,
  //   fontSize: 12,
  //   textAlign: 'center',
  // },
  // textButton: {
  //   color: COLORS.white,
  //   fontSize: 12,
  //   textAlign: 'center',
  // },
  // textArt: {
  //   fontWeight: 'bold',
  //   marginTop: 10,
  //   textTransform: 'capitalize',
  // },
  // textArtist: {
  //   fontSize: 10,
  //   textTransform: 'capitalize',
  // },
  // item: {
  //   flex: 1,
  // },
});
