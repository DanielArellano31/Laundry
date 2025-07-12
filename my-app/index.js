import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './App';
import DashboardUser from './DashboardUser';
import DashboardClient from './DashboardClient';
import Register from './Register';
import searchbyname from './SearchByName';


const Stack = createNativeStackNavigator();

export default function Main() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DashboardClient">
            <Stack.Screen name="DashboardUser" component={DashboardUser}  />
            <Stack.Screen name="DashboardClient" component={DashboardClient}  />
            <Stack.Screen name="Home" component={LoginScreen}  />
            <Stack.Screen name="Register" component={Register}  />
            <Stack.Screen name="searchbyname" component={searchbyname}  />
            
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
