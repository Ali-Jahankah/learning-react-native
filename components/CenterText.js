import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function CenterText({ text }) {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  }
});
