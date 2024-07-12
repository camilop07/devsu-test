import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ModalProps} from '@utils/interface/application.interface';
import {styles} from './Modal.Style';
import {Portal, Modal} from 'react-native-paper';
import {Button} from '@components/index';

const ModalBottomSheet = ({
  showModal,
  onConfirm,
  onClose,
  item,
}: ModalProps) => (
  <Portal>
    <Modal
      style={styles.modalWrapper}
      visible={showModal}
      onDismiss={() => (onClose ? onClose() : null)}>
      <View style={styles.container}>
        <View style={styles.typeContentWrapper}>
          <TouchableOpacity onPress={onClose}>
            <Image
              style={styles.icon}
              source={require('@assets/images/cross.png')}
            />
          </TouchableOpacity>

          <View style={styles.typeWrapper}>
            <Text>{`Estás seguro de eliminar el producto ${item?.name}`}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            label={'Confirmar'}
            onPress={() => (onConfirm ? onConfirm() : null)}
            type={'primary'}
            size={'full'}
          />
          <Button
            label={'Cancelar'}
            onPress={() => (onClose ? onClose() : null)}
            type={'ghost'}
            size={'full'}
          />
        </View>
      </View>
    </Modal>
  </Portal>
);

export default ModalBottomSheet;
