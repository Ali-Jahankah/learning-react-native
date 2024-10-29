import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Details({ navigation, route }) {
  const { name, surname } = route.params || {};
  return name && surname ? (
    <View style={styles.container}>
      <Text>Details</Text>
      <Text>{`MY name is ${name} ${surname}`}</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />

      <Button
        title="Return to previous page"
        onPress={() => navigation.goBack()}
      />
    </View>
  ) : (
    <View>
      <Text>Name & Surname are not existed</Text>
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
