import React, {useCallback, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {DetailScreenProps} from '@utils/interface/navigation.interface';
import {styles} from './DetailScreen.Style';
import {Button, Modal} from '@components/index';
import {SafeAreaView} from 'react-native-safe-area-context';
import DetailsRow from '@screens/Detail/components/DetailsRow';
import {useDeleteProductMutation} from '@api/hooks';

const DetailScreen = ({route, navigation}: DetailScreenProps) => {
  const {item} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteProduct] = useDeleteProductMutation();

  const onDelete = useCallback(async () => {
    await deleteProduct(item.id);
    navigation.goBack();
  }, [deleteProduct, item.id, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.upperSection}>
          <Text style={styles.titleID}>{`ID: ${item.id}`}</Text>
          <Text style={styles.subtitle}>{`Información extra`}</Text>
        </View>

        <DetailsRow name={'Nombre'} value={item.name} />
        <DetailsRow name={'Descripción'} value={item.description} />
        <DetailsRow name={'Logo'} value={''} />
        <Image
          source={{
            uri: item.logo,
          }}
          style={styles.image}
        />
        <DetailsRow
          name={'Fecha liberación'}
          value={String(item.date_release)}
        />
        <DetailsRow
          name={'Fecha revisión'}
          value={String(item.date_revision)}
        />
      </View>
      <Button
        label={'Editar'}
        onPress={() => navigation.navigate('AddProductScreen', {item})}
        type={'ghost'}
        size={'full'}
      />
      <Button
        label={'Eliminar'}
        onPress={() => setModalVisible(true)}
        type={'danger'}
        size={'full'}
      />
      <Modal
        showModal={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={onDelete}
        item={item}
      />
    </SafeAreaView>
  );
};

export default DetailScreen;
