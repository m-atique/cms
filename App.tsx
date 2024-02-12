/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {

  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login  from './screens/loginnew'
import SignUp from './screens/signUp';




function App(): React.JSX.Element {


  return (
   <View>
   {/* <Login /> */}
   <SignUp />
   </View>
  );
}



export default App;
