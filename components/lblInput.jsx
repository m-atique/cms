

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
  KeyboardAvoidingView
} from 'react-native';

import {

  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewSignUpScreen';
import LinearGradient from 'react-native-linear-gradient';
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import Entypo  from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'






function Lbl_Input(props) {


  return (
    <View className='flex flex-row w-full  items-center justify-center mb-2'>
        <View className='w-[30%] text-center bg-slate-300 p-2 '><Text>{props.label}</Text></View>
        <View className = 'w-[70%] rounded-md pl-2'>
        <TextInput type ="text" placeholder={props.phl}
            value= {props.value}
            onChangeText={(txt) => props.setValue(txt)}
            className='w-full border pl-5  border-slate-400 rounded-md p-1'
            />
        </View>
    </View>
  );
}



export default Lbl_Input;
