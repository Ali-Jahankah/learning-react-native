import React, { useRef, useState } from 'react';
import '../gesture-handler';

import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CenterText from '../components/CenterText';
import CustomButton from '../components/CustomButton';
import { changeColorHandler, userHandler } from '../utils/handlers';

export default function Home({ navigation }) {
  const [people, setPeople] = useState([
    { name: 'Ali', age: 31, id: 1 },
    { name: 'Reza', age: 45, id: 2 },
    { name: 'Morad', age: 67, id: 3 },
    { name: 'Gholi', age: 62, id: 4 },
    { name: 'Hasan', age: 87, id: 5 },
    { name: 'Hamid', age: 78, id: 6 },
    { name: 'Saber', age: 97, id: 7 },
    { name: 'Jaber', age: 68, id: 8 },
    { name: 'Mohsen', age: 32, id: 9 }
  ]);
  const [user, setUser] = useState({ name: '', age: '', id: null });
  const flatListRef = useRef(null);

  return (
    <ScrollView style={styles.container}>
      {/* UI Components for Header */}
      <Button title="About" onPress={() => navigation.navigate('About')} />
      <Button
        title="Details"
        onPress={() =>
          navigation.navigate('Details', { name: 'Ali', surname: 'Jahankhah' })
        }
      />
      <View style={styles.textView}>
        <Text style={styles.text}>Ali Jahankah | Full-Stack Dev</Text>
      </View>
      <ScrollView
        horizontal
        style={styles.scrollViewWrapper}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.scrollViewContent}>
          {[...Array(8).keys()].map((i) => (
            <CustomButton
              key={i}
              title={`Button ${i + 1}`}
              styles={styles.button}
              handler={changeColorHandler}
              handlerType="color"
            />
          ))}
        </View>
      </ScrollView>
      <CenterText text="Below is a FlatList component" />
      <TextInput
        style={styles.userInputs}
        value={user.name}
        placeholder="--- Name ---"
        onChangeText={(val) => setUser((prev) => ({ ...prev, name: val }))}
      />
      <TextInput
        style={styles.userInputs}
        value={user.age}
        placeholder="--- Age ---"
        onChangeText={(val) => {
          if (Number(val) || !val) {
            setUser((prev) => ({ ...prev, age: val }));
          } else {
            Alert.alert('Input Error:', 'Value must be a number', [
              { text: 'Understood' },
              { text: 'Close' }
            ]);
          }
        }}
        keyboardType="numeric"
      />
      <CustomButton
        title="Add user"
        styles={{
          ...styles.button,
          borderRadius: 10,
          marginHorizontal: 'auto',
          width: 100,
          backgroundColor: '#18e295'
        }}
        handlerType="user"
        handler={() => {
          userHandler(
            {
              name: user.name,
              age: user.age,
              id: people.length ? people[people.length - 1].id + 1 : 1
            },
            'add',
            setPeople,
            people
          );
          setUser({ name: '', age: '', id: null });
        }}
      />

      {/* FlatList for rendering user names only */}
      <FlatList
        ref={flatListRef}
        data={people}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
            <MaterialCommunityIcons
              name="delete"
              size={30}
              color="#ec451f"
              onPress={() =>
                userHandler(null, 'remove', setPeople, people, item.id)
              }
            />
          </View>
        )}
        contentContainerStyle={styles.contentContainer} // Apply layout styles here
        scrollEnabled={false} // Disable FlatList scrolling
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8ad50',
    flex: 1
  },
  contentContainer: {
    alignItems: 'center'
  },
  textView: {
    height: 100,
    backgroundColor: '#e6e30c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  scrollViewWrapper: {
    backgroundColor: '#f3c323',
    paddingVertical: 10,
    flexGrow: 0
  },
  scrollViewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    gap: 10
  },
  button: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  card: {
    width: '90%',
    backgroundColor: '#f8ffb9',
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    paddingHorizontal: 20
  },
  cardText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  userInputs: {
    fontSize: 20,
    padding: 10,
    width: '80%',
    marginVertical: 10,
    marginHorizontal: 'auto',
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#49c4e6',
    backgroundColor: '#f5efef'
  }
});
