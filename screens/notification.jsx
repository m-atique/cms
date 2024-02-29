

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
} from 'react-native/Libraries/NewNotificationsScreen';
import LinearGradient from 'react-native-linear-gradient';
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import Entypo  from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const notifications =[
  " Class Timing Changed from 9:00am to 12:30am",
  " Leave Approved from 02-03-2024 to 04-03-2024",
  " Mess Bill Feb-2024",
  
]



function Notifications() {


  return (
    <View className='items-center pt-5'>
       {notifications.map((item,index)=>(
        <View key={index} className ='w-10/12 flex flex-row  items-center justify-between p-2 py-3 bg-slate-100 border border-slate-300 mb-3 rounded-md shadow-lg shadow-slate-800 text-black'>
          <Text className='text-black'>{item}</Text>
         <Pressable className=''>
          <Text className="text-red-500 font-bold ">
            <MaterialCommunityIcons name ='close-box' size={20} />
            </Text></Pressable>
         </View>
       ))}
    </View>
  );
}



export default Notifications;


