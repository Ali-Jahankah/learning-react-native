import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Person1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Person1</Text>
      <Button title="Person2" onPress={() => navigation.navigate('Person2')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
