import './gesture-handler';
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
// Only import react-native-gesture-handler on native platforms
import React, { useRef, useState } from 'react';
import { changeColorHandler, userHandler } from './utils/handlers';

import About from './screens/About';
import CenterText from './components/CenterText';
import CustomButton from './components/CustomButton';
import Home from './screens/Home';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';

const App = () => {
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
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="About" component={About}></Stack.Screen>
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>Ali Jahankah | Full-Stack Dev</Text>
        </View>
        <View style={styles.scrollViewWrapper}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContent}
          >
            <CustomButton
              title="Button 1"
              styles={styles.button}
              handler={changeColorHandler}
              handlerType="color"
            />
            <CustomButton
              title="Button 2"
              styles={styles.button}
              state={{}}
              handler={changeColorHandler}
              handlerType="color"
            />
            <CustomButton
              title="Button 3"
              styles={styles.button}
              state={{}}
              handler={changeColorHandler}
              handlerType="color"
            />
            <CustomButton
              title="Button 4"
              styles={styles.button}
              state={{}}
              handler={changeColorHandler}
              handlerType="color"
            />
            <CustomButton
              title="Button 5"
              styles={styles.button}
              state={{}}
              handler={changeColorHandler}
              handlerType="color"
            />
            <CustomButton
              title="Button 6"
              styles={styles.button}
              state={{}}
              handler={changeColorHandler}
              handlerType="color"
            />
            <CustomButton
              title="Button 7"
              styles={styles.button}
              state={{}}
              handler={changeColorHandler}
              handlerType="color"
            />
            <CustomButton
              title="Button 8"
              styles={styles.button}
              state={{}}
              handler={changeColorHandler}
              handlerType="color"
            />
          </ScrollView>
        </View>
        <CenterText text="Below is a FlatList component"></CenterText>
        <Button
          title="jump to last index"
          onPress={() =>
            flatListRef.current.scrollToIndex({
              animated: true,
              index: people.length - 1
            })
          }
        />
        <CenterText text={`Name: ${user.name}`} />
        <CenterText text={`Age: ${user.age}`} />
        <TextInput
          style={styles.userInputs}
          value={user.name}
          placeholder="--- Name ---"
          onChangeText={(val) =>
            setUser((prev) => {
              return { ...prev, name: val };
            })
          }
        />
        <TextInput
          style={styles.userInputs}
          value={user.age}
          placeholder="--- Age ---"
          onChangeText={(val) => {
            console.log(val);
            if (Number(val) || !val) {
              setUser((prev) => {
                return { ...prev, age: val };
              });
            } else {
              Alert.alert('Input Error:', 'Value must be a number', [
                {
                  text: 'Understood',
                  onPress: () => console.log('Understood')
                },
                { text: 'Close', onPress: () => console.log('Closed') }
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
            marginLeft: 'auto',
            width: 100,
            marginRight: 'auto',
            backgroundColor: '#18e295'
          }}
          state={{}}
          handlerType="user"
          handler={() => {
            userHandler(
              {
                name: user.name,
                age: user.age,
                id: people.length ? Number(people[people.length - 1].id + 1) : 1
              },
              'add',
              setPeople,
              people,
              null
            );
            setUser({ name: '', age: '', id: null });
          }}
        ></CustomButton>

        <FlatList
          ref={flatListRef}
          style={styles.usersList}
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
        />
      </View> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textView: {
    height: 150,
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
    paddingVertical: 10
  },
  scrollViewContent: {
    justifyContent: 'center',
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
    backgroundColor: '#f8ffb9',
    margin: 10,
    padding: 5,
    flex: 1,
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
    padding: 5,
    width: 300,
    marginHorizontal: 'auto',
    marginVertical: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray'
  },
  usersList: {
    height: 400
  }
});

export default App;
