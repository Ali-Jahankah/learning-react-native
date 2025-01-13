import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import CenterText from '../components/CenterText';

export default function Person1({ navigation }) {
  return (
    <View style={styles.container}>
      <CenterText text="Person1"></CenterText>
      <Button title="Person2" onPress={() => navigation.navigate('Person2')} />
      <Button title="Modal" onPress={() => navigation.navigate('TestModal')} />
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
