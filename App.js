import { ScrollView, StyleSheet, Text, View } from 'react-native';

import CustomButton from './components/CustomButton';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>Ali Jahankah | Full-Stack Dev</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10
        }}
      >
        <CustomButton
          title="Button 1"
          styles={{
            width: 70,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
          }}
        />
        <CustomButton
          title="Button 2"
          styles={{
            width: 70,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
          }}
        />
        <CustomButton
          title="Button 3"
          styles={{
            width: 70,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
          }}
        />
        <CustomButton
          title="Button 4"
          styles={{
            width: 70,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
          }}
        />
        <CustomButton
          title="Button 5"
          styles={{
            width: 70,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
          }}
        />
        <CustomButton
          title="Button 6"
          styles={{
            width: 70,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
          }}
        />
        <CustomButton
          title="Button 7"
          styles={{
            width: 70,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
          }}
        />
        <CustomButton
          title="Button 8"
          styles={{
            width: 70,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
          }}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbe32a'
  },
  textView: {
    flex: 1,
    backgroundColor: '#8fd1d2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default App;
