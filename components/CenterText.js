import { Platform, StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function CenterText({ text }) {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
const platStyle = Platform.select({
  ios: {
    color: 'green',
    fontSize: 40
  },
  android: {
    color: 'red',
    fontSize: 20
  }
});
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    ...platStyle
  }
});
