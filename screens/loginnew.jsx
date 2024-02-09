

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
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import Entypo  from 'react-native-vector-icons/Entypo'






function Login() {


  return (
   <View className =" realtive flex items-center  h-screen bg-slate-300 ">

    {/* <View className="relative  h-[30%] w-[110%] rounded-b-full border-r-[16px] border-r-yellow-400   ">
    <Image source={require('../public/nhmpclg.jpeg')}   className='w-full h-full rounded-b-full   flex opacity-40 bg-[#125975]' />
    </View> */}
 {/* <Image source={require('../public/logo.png')}   className=' absolute w-20 h-20 bg-blue-800 rounded-full top-[24%]' /> */}

 <View className="relative  h-[46%] w-[110%]  ">
 <Image source={require('../public/loginbck.png')}   className='h-[100%] w-[100%]    flex ' />
 </View>


<View className="h-1/4 flex w-5/6 items-center justify-center  mb-8 ">

  <AntDesignIcons name ="" />
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
<Text className='text-slate-900 text-center  text-md p-2 font-bold  font-sans'>All rights resereved by IT Wing Training College NHMP</Text> 
</View>

   </View>
  );
}



export default Login;
