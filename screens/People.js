import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';
export default function People({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>People</Text>
      <Button title="Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
