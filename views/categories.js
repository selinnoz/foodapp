import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const categoriData = [
  { id: '1', name: 'Salad', image: require('./assets/salad.png') },
  { id: '2', name: 'Taco', image: require('./assets/taco.png') },
  { id: '3', name: 'Fries', image: require('./assets/fries.png') },
 
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );
};

const Categories = () => {
  return (
    <FlatList
      categoriData={categoriData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Categories;

