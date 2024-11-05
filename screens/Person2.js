import { Button, StyleSheet, Text, View } from 'react-native';

import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default function Person2({ navigation }) {
  useFocusEffect(
    useCallback(() => {
      alert('Hello Person 2');
      return () => alert('Goodby Person 2');
    })
  );
  return (
    <View style={styles.container}>
      <Text>Person2</Text>
      <Button title="Person1" onPress={() => navigation.navigate('Person1')} />
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
