import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/login';
import Home from '../../screens/home';
import SignUp from '../../screens/signUp';
import { Text,View } from 'react-native';
import MyDrawer from './drawernv';
import MyTabs from './tabnv';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'slate' } }}>

      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown:false
          }}
        />
          <Stack.Screen
          name="Home"
          component={MyDrawer}
          options={{
            headerShown:false
          }}
          
        />

      <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown:false
          }}
          />


        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack