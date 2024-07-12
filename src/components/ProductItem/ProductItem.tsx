import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {styles} from './ProductItem.Style';
import {ProductItemProps} from '@utils/interface/application.interface';

const ProductItem = ({item, onPress}: ProductItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Text>{item.name}</Text>
        <Text style={styles.idText}>{`ID: ${item.id}`}</Text>
      </View>
      <Image style={styles.icon} source={require('@assets/images/right.png')} />
    </TouchableOpacity>
  );
};

export default ProductItem;
