import About from './screens/About';

import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Details from './screens/Details';
const App = () => {
  const Drawer = createDrawerNavigator();
  // const Stack = createStackNavigator();
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
              backgroundColor: '#272626'
            },
            headerTintColor: '#ffae00',
            headerTitleAlign: 'center'
          }}
        >
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="About" component={About}></Stack.Screen>
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ title: 'Info' }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer> */}

      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#ffdcaf'
            },
            drawerLabelStyle: {
              color: 'black',
              fontSize: 20,
              textAlign: 'center'
            },
            drawerActiveBackgroundColor: '#1a9bcf'
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Details" component={Details} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
