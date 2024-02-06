

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
  Pressable,Image
} from 'react-native';

import {

  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewLoginScreen';
import LinearGradient from 'react-native-linear-gradient';
import icon from 





function Login() {


  return (
   <View className =" realtive flex items-center  h-screen bg-slate-300 ">

    <View className="relative  h-[30%] w-[110%] rounded-b-full border-r-[16px] border-r-yellow-400   ">
    <Image source={require('../public/nhmpclg.jpeg')}   className='w-full h-full rounded-b-full   flex opacity-40 bg-[#125975]' />
    </View>
 <Image source={require('../public/logo.png')}   className=' absolute w-20 h-20 bg-blue-800 rounded-full top-[24%]' />

<View className="h-2/6  flex w-5/6 items-center justify-center mt-8">
<TextInput type ="text" className=" border-b-2 border-slate-800 w-full"  />

<TextInput type ="text" className=" border-b-2 border-slate-800 w-full mt-5"  />
<Text className='text-slate-900 text-right font w-full text-md p-2 font-bold font-sans'>Forgot your password ?</Text>
</View>

<Pressable className="w-4/6 flex items-center justify-center ">
<LinearGradient colors={['#324EB5', '#005163']}  start={{x: 0.0, y: 0.0}} end={{x: 0.9, y: 0.9}} locations={[0.1,0.9,]} className="w-full p-3 flex items-center justify-center  ">
  <Text className='text-slate-100 text-lg font-semibold font-sans'>LOGIN</Text>
</LinearGradient>
</Pressable>
<View className="flex flex-row py-3">

<Text className='text-slate-900 text-center font  text-md p-2 font-bold font-sans'>You don't have account ?</Text> 
<Pressable className=" flex items-center justify-center">
  <Text className='text-blue-800 text-md font-bold font-sans'>SIGN UP</Text>
</Pressable>
</View>

<View className='absolute   w-full bottom-5  '>
<Text className='text-slate-900 text-center  text-md p-2 font-bold  font-sans'>All rights resereved by IT Wing T/C NHMP</Text> 
</View>



   </View>
  );
}



export default Login;
