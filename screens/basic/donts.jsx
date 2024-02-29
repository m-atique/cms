

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






function Donts() {


  return (
    <View>
      <View className ="flex items-center justify-center mb-10 mt-5"> 
      <View className='bg-red-500 rounded-md font-bold flex items-center justify-center text-center'>
        <Text className =" text-3xl  p-2 text-white font-urdu" >زیر تربیت افسران کے نہ کرنے والے کام</Text>
        </View>
      </View>
    <ScrollView className ='mb-10'>
      <View className=" px-3 overflow-scroll mb-20  ">
        <Text className ="text-xl text-black font-urdu p-1 ">
        1. دوران ڈیوٹی چیک پوسٹ کی دیواروں پر نہیں لکھیں گے۔
{'\n'}2.	رہائشی کمرہ یا ہاسٹل کے علاوہ کالج کی حدود میں موبائل فون استعمال نہیں کریں گے۔
{'\n'}3.	کالج کے احاطہ میں روڈ اور لان میں چلتے پھرتے موبائل فون استعمال نہیں کریں گے۔
{'\n'}4.	کسی بھی تربیتی سرگرمی میں موبائل فون نہیں لائیں گے۔
{'\n'}5.	کوئی بھی ٹرینی آفیسر اپنی دونوں جیبوں میں ہاتھ ڈال کر کالج کے احاطے میں نہیں گھومے گا۔
{'\n'}6.	کالج ہذا میں کسی بھی سڑک کے درمیان کھڑے ہونے یا چلنے سے گریز کریں گے۔
{'\n'}7.	گراسی پلاٹس اور دوسرے پلاٹس کو درمیان سے کر اس نہیں کریں گے اور صرف بنائے گئے راستوں سے گزریں گے 
{'\n'}8.	باغیچوں میں کھلے ہوئے پھولوں کو نہیں توڑیں گے۔
{'\n'}9.	پھل دار پودوں اور درختوں سے پھل نہیں توڑیں گے۔
{'\n'}10.	کیفے ٹیریا اور میں وغیرہ میں فضول گفتگو اور شور سے اجتناب کریں گے۔
{'\n'}11.	میسں میں شور شرابہ نہ کریں گے اور نہ ہی کرسیاں گھسیٹیں گے-
{'\n'}12.	آپس میں لڑائی جھگڑا نہ کریں گے۔
{'\n'}13.	ویک اینڈ یا کسی دوسری چھٹی پر گھر جاتے وقت کالج گیٹ کے سامنے موٹر وے پر گاڑی روک کر سوار نہیں ہوں گے
{'\n'}14.	کسی بھی صورت میں کالج کی چار دیواری سے بغیر اجازت باہر نہیں جائیں گے۔
{'\n'}15.	دیواروں کے ساتھ پاؤں لگا کر کھڑے نہیں ہوں گے اور نہ ہی دیواروں کے ساتھ ٹیک لگائیں گے۔
{'\n'}16.	دیواروں اور دروازوں پر ہرگز نہیں لکھیں گے۔
{'\n'}17.	کلاس روم میں لگے آلات مثلا ملٹی میڈیا پروجیکٹر سکرین اور لیپ ٹاپ وغیرہ کو نہیں چھیڑیں گے
{'\n'}18.	سوئمنگ پول میں مقررہ اوقات کے علاوہ نہیں جائیں گے۔
{'\n'}19.	کمروں میں ہیٹر اور استری کا استعمال نہیں کریں گے۔
{'\n'}20.	میڈیکل فٹنس سرٹیفیکیٹ کے بغیر ٹرینی کو Enroll نہیں کیا جائے گا۔ 
{'\n'}21.	ڈرل  /   کالج اسٹاف سے بد تمیزی کسی صورت برداشت نہیں کی جائے گی۔{'\n'}
   
        </Text>
        <Text className='font-urdu text-red-500 text-2xl '>
نوٹ : درج بالا احکامات کی خلاف ورزی کی صورت میں ٹرینی آفیسر کے خلاف سخت تادیبی کاروائی عمل میں لائی جائے گی۔
</Text>
        <Text className='text-center py-7'>---------END----------</Text>
        </View>
        
        </ScrollView>
    </View>
  );
}



export default Donts;


