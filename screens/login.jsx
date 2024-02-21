

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
  TouchableWithoutFeedback,
  Keyboard
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';





function Login() {
const navigation = useNavigation()

  return (
<KeyboardAvoidingView  className ='flex flex-1' behavior='height'>
<TouchableWithoutFeedback onPress={Keyboard.dismiss} >
  <View className='h-screen w-full flex flex-grow' style={{flex:1}}>
 <View className ="  flex items-center  h-screen bg-slate-300 " style={{flex:1}} >



  
 <View className="  h-[47%] w-[110%]  ">
 <Image source={require('../public/loginbck.png')}   className='h-[100%] w-[100%]    flex ' />
 </View>

<View className=" h-[65%] w-full bg-blend-darken  pt-16 items-center justify-start">

<View className="h-1/4 flex w-5/6 items-center justify-center  mb-8">
<View className =' relative flex flex-row border-b-2  border-slate-800 items-center  '>

  <Entypo name ="user" size={22} style={{position:"absolute", bottom: 5 }} />
<TextInput type ="text" className="  w-full  py-0 pl-10 "  />
</View>

<View className =' relative flex flex-row border-b-2  border-slate-800 items-center    '>
<MaterialCommunityIcons name ="key-chain" size={25} style={{position:"absolute", bottom: 5 }} />
<TextInput type ="text" className=" w-full  py-0 pl-10 mt-5"  />
</View>
<View className='w-full py-2'>
<Pressable className='bg-transparent' >
<Text className='text-slate-900 text-right font w-full text-md  font-bold font-sans py-0 pl-10'>Forgot your password ?</Text>
</Pressable>
</View>
</View>


<Pressable className="w-4/6 flex items-center justify-center " onPress={()=>navigation.navigate("Home")}>
<LinearGradient colors={['#324EB5', '#005163']}  start={{x: 0.0, y: 0.0}} end={{x: 0.9, y: 0.9}} locations={[0.1,0.9,]} className="w-full p-3 flex items-center justify-center  ">
  <Text className='text-slate-100 text-lg font-semibold font-sans'>LOGIN</Text>
</LinearGradient>
</Pressable>
<View className="flex flex-row py-2">

<Text className='text-slate-900 text-center font  text-md p-2 font-bold font-sans'>You don't have account ?</Text> 
<Pressable className=" flex items-center justify-center" onPress={()=>navigation.navigate("SignUp")}>
  <Text className='text-blue-800 text-md font-bold font-sans'>SIGN UP</Text>
</Pressable>
</View>

<View className='  w-full pt-8  '>
<Text className='text-slate-900 text-center  text-md p-2 font-bold  font-sans'>All rights resereved by IT Wing Training College NHMP</Text> 
</View>

</View>
</View>
   </View>
   </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  
  );

}


export default Login;


