

import React,{useState} from 'react';

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
import Lbl_Input from '../components/lblInput';






function SignUp() {

    const defaults ={
        name:"",
        father:"",
    }

    const [data,setData] =useState(defaults)

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'android' ? 'padding' : 'height'}
    style={{flex:1}}
    enabled
  >
<View>

<LinearGradient colors={['#85C1E9', '#82E0AA']}  start={{x: 0.1, y: 0.1}} end={{x: 0.7, y: 0.7}}  className="w-full h-screen  bg-opacity-40 flex items-center justify-center  ">
 
 <View className='w-11/12 h-[90%] items-center justify-center bg-slate-200 rounded-md shadow-md shadow-slate-700 '>
    <Text className='w-full font-extrabold font-sans text-blue-800 p-3 text-center'>CREATE YOUR ACCOUNT</Text>

    <View className='flex items-center justify-center w-[90%] m-2 h-[90%]  '>
   
    <Lbl_Input  label="Name" phl ="Your Name Here" value={data.name} setValue={(value)=>setData({...data,name:value})} />

    </View>

 </View>



</LinearGradient>
</View>
   </KeyboardAvoidingView>
  );
}



export default SignUp;
