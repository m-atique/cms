import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/loginnew';
import Home from '../../screens/home';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown:false
          }}
        />
          <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
      


        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack