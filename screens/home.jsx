

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Pressable,Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,Keyboard
} from 'react-native';

import {

  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewHomeScreen';
import LinearGradient from 'react-native-linear-gradient';
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import Entypo  from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'






function Home() {


  return (
    <View className ='h-screen w-full items-center justify-start pt-16'>
      <View className='h-1/4 w-10/12 rounded-lg bg-slate-100 shadow-lg shadow-black  items-center justify-start border border-slate-300'>
          <View className ="bg-yellow-200 p-1 w-16 h-16 rounded-full  items-center justify-center -top-8  shadow-lg shadow-black   ">
         <Entypo name ="user" size={40} color ='black' />
          </View>
          <View>
            <Text className='text-center text-black font-bold'>Muhammad Hassan </Text>
            <Text className='text-center text-blue-800 font-bold mt-3'>64th Advance Class Course</Text>
          </View>
      </View>
    </View>
  );
}



export default Home;


