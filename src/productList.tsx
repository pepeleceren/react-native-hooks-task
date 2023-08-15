/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  FlatList,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function ProductsList({navigation}: any): JSX.Element {
  const [listArray, setListArray] = useState();
  useEffect(() => {
    axios
      .get('https://northwind.vercel.app/api/products')
      .then(result => setListArray(result.data));
  }, []);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Products name="PRODUCT NAME" price="PRODUCT PRICE" />
      <FlatList
        data={listArray}
        renderItem={({item}) => (
          <Products name={item.name} price={item.unitPrice} />
        )}
        keyExtractor={item => item.id}
      />
      <Button
        title="Go to Add Products Page"
        onPress={() => navigation.navigate('AddProduct')}
      />
    </SafeAreaView>
  );
}
function Products(props: any) {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          flex: 1,
        }}>
        <Text style={{color: props.price > 50 ? 'red' : 'black'}}>
          {props.name}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <Text style={{color: props.price > 50 ? 'red' : 'black'}}>
          {props.price}
        </Text>
      </View>
    </View>
  );
}

export default ProductsList;
