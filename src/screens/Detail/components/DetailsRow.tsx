import React from 'react';
import {Text, View} from 'react-native';

import {DetailsRowProps} from '@utils/interface/application.interface';
import {styles} from './DetailsRow.Style';

const DetailsRow = ({name, value}: DetailsRowProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.keyText}>{name}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default DetailsRow;
