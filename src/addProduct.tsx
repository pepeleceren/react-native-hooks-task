/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function AddProduct(): JSX.Element {
  const [listArray, setListArray] = useState<any | null>();
  const [Name, setName] = useState<any | null>();
  const [UnitPrice, setUnitPrice] = useState<any | null>();
  const [UnitsInStock, setUnitsInStock] = useState<any | null>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function onPressAdd() {
    let alinanlar = {
      name: Name,
      unitPrice: UnitPrice,
      unitsInStock: UnitsInStock,
    };
    let sonuc = [...(listArray || []), alinanlar];
    setListArray(sonuc);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <TextInput
          style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
          onChangeText={setName}
          value={Name}
          placeholder="Name:"
        />
        <TextInput
          style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
          onChangeText={setUnitPrice}
          value={UnitPrice}
          placeholder="Unit Price:"
        />
        <TextInput
          style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
          onChangeText={setUnitsInStock}
          value={UnitsInStock}
          placeholder="Units In Stock:"
        />
        <View>
          <Button
            onPress={onPressAdd}
            title="Add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

        <View style={{borderTopWidth: 2, paddingTop: 10}}>
          <FlatList
            data={listArray}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Text>{item.name}</Text>
                <Text>{item.unitPrice}</Text>
                <Text>{item.unitsInStock}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AddProduct;
