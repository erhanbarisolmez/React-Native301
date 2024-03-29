import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './screens/Detail';
// pages
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Questions'}}
          />

          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{title: 'Detail'}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
