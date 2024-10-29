import About from './screens/About';

import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Details from './screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
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

      {/* <NavigationContainer>
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
      </NavigationContainer> */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'About':
                  iconName = focused
                    ? 'information-circle'
                    : 'information-circle-outline';
                  break;
                case 'Details':
                  iconName = focused ? 'person' : 'person-outline';
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ff8000'
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
