

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





function Login() {


  return (
   <View className ="flex items-center justify-center h-screen ">
    <View className=" myflex items-center justify-center-5 w-5/6">

    <Image source={require('../public/login.png')}   className=' w-52 h-48 border flex ' />
      
      
        
    </View>
   <View className = "border border-slate-200 w-5/6 h-2/5 rounded-xl shadow-md shadow-black bg-[#8cb0ff]   flex items-center  justify-center  gap-2 ">
   <TextInput keyboardType="default" placeholder='User Name' className="border w-5/6 rounded-md pl-2"/>
   <TextInput keyboardType="default"  placeholder='Passward' secureTextEntry = {true} className="border w-5/6 rounded-md pl-2"/>
   <View className="flex flex-row  gap-2 items-center justify-center my-5 h-1/6 w-5/6">
   <Pressable className="bg-white w-2/6 flex items-center p-2  rounded-md  shadow-md shadow-slate-500"><Text className="font-semibold text-blue-500">Login</Text></Pressable>
   <Pressable className="bg-white w-2/6 flex items-center p-2 rounded-md  shadow-md shadow-slate-500"><Text className="font-semibold text-blue-500">SignUp</Text></Pressable>
   </View>

   </View>
   <View className="flex items-center justify-center my-5 h-1/6 w-5/6">
    <Text>Copyright reserve by </Text>
    <Text>IT Wing Trinning College NHMP  </Text>
   </View>
   </View>
  );
}



export default Login;
