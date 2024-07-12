import {Datum} from '@utils/interface/application.interface';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {Datum} from '@utils/interface/artworks.interface';

export type RootStackParamList = {
  HomeScreen: {fromUpdating: boolean; item: Datum} | undefined;
  DetailScreen: {item: Datum};
  AddProductScreen: {item: Datum} | undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>;
export type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailScreen'
>;
export type AddProductScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AddProductScreen'
>;
