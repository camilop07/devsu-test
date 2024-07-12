import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import {HomeScreenProps} from '@utils/interface/navigation.interface';
import {styles} from './HomeScreen.Style';
import {useGetProductsQuery} from '@api/index';
import {Button, ProductItem} from '@components/index';
import {Datum} from '@utils/interface/application.interface';

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  const isFromUpdating = useMemo(
    () => route.params?.fromUpdating || false,
    [route.params?.fromUpdating],
  );
  const {data, isLoading} = useGetProductsQuery(undefined);
  const [products, setProducts] = useState<Datum[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Datum[]>([]);

  useEffect(() => {
    if (!isLoading && data?.data) {
      setProducts(data.data);
      setFilteredProducts(data.data);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (isFromUpdating && route.params?.item) {
      navigation.navigate('DetailScreen', {
        item: route.params.item,
      });
    }
  }, [isFromUpdating, navigation, route.params?.item]);

  const handleItemPress = (item: Datum) => {
    navigation.navigate('DetailScreen', {item});
  };

  const renderArtItem = ({item, index}: {item: Datum; index: number}) => (
    <ProductItem
      item={item}
      onPress={() => handleItemPress(item)}
      idx={index}
    />
  );

  const onFilter = (value: string) => {
    if (value) {
      const newData = products.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : '';
        const textData = value.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredProducts(newData);
      return;
    }
    setFilteredProducts(products);
  };

  const separator = useMemo(() => <View style={styles.separator} />, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.principalContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={'Search...'}
          onChangeText={value => onFilter(value)}
        />
        {filteredProducts.length === 0 ? (
          <View style={styles.notFoundContainer}>
            <Text style={styles.notFoundText}>
              {'No se encontraron productos :('}
            </Text>
          </View>
        ) : (
          <FlatList
            data={filteredProducts}
            renderItem={renderArtItem}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => separator}
            style={styles.flatlist}
            contentContainerStyle={styles.flatListContainer}
            horizontal={false}
            numColumns={1}
          />
        )}
      </View>
      <Button
        label={'Agregar'}
        onPress={() => navigation.navigate('AddProductScreen')}
        type={'primary'}
        size={'full'}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
