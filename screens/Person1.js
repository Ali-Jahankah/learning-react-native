import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import CenterText from '../components/CenterText';
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function Person1({ navigation }) {
  const orientation = useDeviceOrientation();
  return (
    <View style={styles.container}>
      <CenterText text={`Person1 in ${orientation} mode`}></CenterText>
      <Button title="Person2" onPress={() => navigation.navigate('Person2')} />
      <Button title="Modal" onPress={() => navigation.navigate('TestModal')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
