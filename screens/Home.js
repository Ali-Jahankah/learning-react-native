import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="About" onPress={() => navigation.navigate('About')} />
      <Button
        title="Details"
        onPress={() =>
          navigation.navigate('Details', { name: 'Ali', surname: 'Jahankhah' })
        }
      />
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
