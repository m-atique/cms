

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
    <View className='flex flex-row w-full  items-center justify-center'>
        <View className=''><Text>{props.label}</Text></View>
        <View className = ' rounded-md pl-2 w-4/5'>
        <TextInput type ="text" placeholder={props.phl}
            value= {props.value}
            onChangeText={(e) => props.setfatherJob(e.target.value)}
            className='w-full border pl-2  border-slate-400 rounded-md p-1'
            />
        </View>
    </View>
  );
}



export default Lbl_Input;
