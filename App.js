import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import CustomButton from './components/CustomButton';

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Ali', age: 31, id: 1 },
    { name: 'Reza', age: 45, id: 2 },
    { name: 'Morad', age: 67, id: 3 },
    { name: 'Gholi', age: 62, id: 4 },
    { name: 'Hasan', age: 87, id: 5 },
    { name: 'Hamid', age: 78, id: 6 },
    { name: 'Saber', age: 97, id: 7 },
    { name: 'Jaber', age: 68, id: 8 },
    { name: 'Mohsen', age: 32, id: 9 }
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>Ali Jahankah | Full-Stack Dev</Text>
      </View>
      <View style={styles.scrollViewWrapper}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          <CustomButton title="Button 1" styles={styles.button} />
          <CustomButton title="Button 2" styles={styles.button} />
          <CustomButton title="Button 3" styles={styles.button} />
          <CustomButton title="Button 4" styles={styles.button} />
          <CustomButton title="Button 5" styles={styles.button} />
          <CustomButton title="Button 6" styles={styles.button} />
          <CustomButton title="Button 7" styles={styles.button} />
          <CustomButton title="Button 8" styles={styles.button} />
        </ScrollView>
      </View>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f6'
  },
  textView: {
    height: 150,
    backgroundColor: '#8fd1d2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  scrollViewWrapper: {
    backgroundColor: '#146b8e',
    paddingVertical: 10
  },
  scrollViewContent: {
    justifyContent: 'center',
    gap: 10
  },
  button: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  card: {
    backgroundColor: '#56c2c9',
    margin: 10,
    padding: 5
  },
  cardText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
