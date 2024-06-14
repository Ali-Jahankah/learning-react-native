import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

const CustomButton = ({ title, styles, handler, state, handlerType }) => {
  const [color, setColor] = useState('#fff');

  return (
    <TouchableHighlight
      onPress={
        handlerType === 'color' ? () => handler(setColor) : () => handler()
      }
      style={{
        ...styles,
        backgroundColor: !styles.backgroundColor
          ? color
          : styles.backgroundColor
      }}
    >
      <Text style={buttonStyles.text}>{title}</Text>
    </TouchableHighlight>
  );
};
const buttonStyles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
export default CustomButton;
