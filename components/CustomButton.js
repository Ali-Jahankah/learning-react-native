import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import { changeColorHandler } from '../utils/handlers';

const CustomButton = ({ title, styles }) => {
  const [color, setColor] = useState('#fff');
  return (
    <TouchableHighlight
      onPress={() => changeColorHandler(setColor)}
      style={{
        ...styles,
        backgroundColor: color
      }}
    >
      <Text style={buttonStyles.text}>{title}</Text>
    </TouchableHighlight>
  );
};
const buttonStyles = StyleSheet.create({
  text: {
    backgroundColor: '#ffffffb9',
    color: 'black'
  }
});
export default CustomButton;
