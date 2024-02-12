

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
        rank:"",
        beltNo:"",
        cnic:"",
        bloodGroup:"",
        dob:"",
        qualification:"",
        institute:"",
        year:"",
        drivingLicense:"",
        authority:"",
        expiry:"",
    }

    const [data,setData] =useState(defaults)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={{flex: 1}}
      enabled>
      <View>
        <LinearGradient
          colors={['#85C1E9', '#82E0AA']}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.7, y: 0.7}}
          className="w-full h-screen  bg-opacity-40 flex items-center justify-center  ">
          <View className="w-11/12 h-[90%] items-center justify-center bg-slate-200 rounded-md shadow-md shadow-slate-700 ">
            <Text className="w-full font-extrabold font-sans text-blue-800 p-3 text-center">
              CREATE YOUR ACCOUNT
            </Text>

            <View className="flex items-center justify-center w-[90%] m-2 h-[90%]  ">
              {/* name */}
              <Lbl_Input
                label="Name"
                phl="Your Name Here"
                value={data.name}
                setValue={value => setData({...data, name: value})}
              />

              {/* father name */}
              <Lbl_Input
                label="Father Name"
                phl=" Father's Name Here"
                value={data.father}
                setValue={value => setData({...data, father: value})}
              />
               {/* rank  */}
               <Lbl_Input
                label="Rank"
                phl=" PO"
                value={data.rank}
                setValue={value => setData({...data, rank: value})}
              />

              {/* beltNo  */}
              <Lbl_Input
                label="Belt No"
                phl="P-2024"
                value={data.beltNo}
                setValue={value => setData({...data, beltNo: value})}
              />
               {/* qualification  */}
               <Lbl_Input
                label="Qualification"
                phl="Last Degree"
                value={data.qualification}
                setValue={value => setData({...data, qualification: value})}
              />
               {/* institute  */}
               <Lbl_Input
                label="Institute"
                phl="Last Attended"
                value={data.institute}
                setValue={value => setData({...data, institute: value})}
              />
               {/* year  */}
               <Lbl_Input
                label="Year"
                phl="Graduation Year"
                value={data.year}
                setValue={value => setData({...data, year: value})}
              />
               {/* driving licence  */}
               <Lbl_Input
                label="Dvr.Licence #"
                phl=" Driving Licience Number"
                value={data.drivingLicense}
                setValue={value => setData({...data, drivingLicense: value})}
              />
               {/* Authority  */}
               <Lbl_Input
                label="Issued By"
                phl="Name of Issuing Authority"
                value={data.authority}
                setValue={value => setData({...data, authority: value})}
              />
               {/* expiry  */}
               <Lbl_Input
                label="Expiry"
                phl="Expiry Date"
                value={data.expiry}
                setValue={value => setData({...data, expiry: value})}
              />


            </View>
          </View>
        </LinearGradient>
      </View>
    </KeyboardAvoidingView>
  );
}



export default SignUp;
