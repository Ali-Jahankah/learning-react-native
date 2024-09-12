import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Push 'About' page"
        onPress={() => navigation.push('About')}
      />
      <Button
        title="Return to previous page"
        onPress={() => navigation.goBack()}
      />
      <Button title="Pop to top" onPress={() => navigation.popToTop()} />
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
