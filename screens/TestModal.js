import { Button, Text, View } from 'react-native';
import React from 'react';

export default function TestModal({ navigation }) {
  return (
    <View style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>
        Hello I am a Modal
      </Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </View>
  );
}
