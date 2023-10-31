import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const categoriData = [
  { id: '1', name: 'Salad', image: require('../assets/salad.png') },
  { id: '2', name: 'Taco', image: require('../assets/taco.png') },
  { id: '3', name: 'Fries', image: require('../assets/fries.png') },
];

const Box = ({ id, name, image }) => {
  return (
    <View
      style={{
        margin: 5,
        width: 140,
        height: 120,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const renderItem = ({ item }) => {
  return (
    <Box id={item.id} name={item.name} image={item.image} />
  );
};

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>
        Categories
        <TouchableOpacity
          onPress={() => {
            // categories.js
          }}
        >
          <Text style={{ fontSize: 14, color: 'red', fontWeight: 'bold' }}>
            View All
          </Text>
        </TouchableOpacity>
      </Text>

      <FlatList
        data={categoriData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true}
      />

      <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>
        Popular Today
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 180,
    paddingLeft: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default HomeScreen;