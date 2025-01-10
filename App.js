import About from './screens/About';

import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';
import TestModal from './screens/TestModal';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Details from './screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Person2 from './screens/Person2';
import Person1 from './screens/Person1';
import People from './screens/People';

const App = () => {
  const Drawer = createDrawerNavigator();
  const HomeStack = createStackNavigator();
  const PeopleStack = createStackNavigator();

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
                case 'People':
                  iconName = focused ? 'person' : 'person-outline';
                  break;
                // case 'Details':
                //   iconName = focused ? 'person' : 'person-outline';
                //   break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ff8000',
            tabBarStyle: {
              backgroundColor: '#9dfaf0'
            },
            headerShown: false
          })}
        >
          <Tab.Screen name="Home">
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen
                  name="About"
                  component={About}
                ></HomeStack.Screen>
                <HomeStack.Screen
                  name="Details"
                  component={Details}
                ></HomeStack.Screen>
              </HomeStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="People">
            {() => (
              <PeopleStack.Navigator screenOptions={{ presentation: 'modal' }}>
                <PeopleStack.Screen
                  name="Person1"
                  component={Person1}
                ></PeopleStack.Screen>
                <PeopleStack.Screen
                  name="Person2"
                  component={Person2}
                ></PeopleStack.Screen>
                <PeopleStack.Screen
                  name="TestModal"
                  component={TestModal}
                  options={{ headerShown: false }}
                ></PeopleStack.Screen>
              </PeopleStack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
