import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './Header.Style';

const Header = () => (
  <View style={styles.header}>
    <Image
      style={styles.image}
      source={require('@assets/images/header-image.png')}
    />
  </View>
);

export default Header;
