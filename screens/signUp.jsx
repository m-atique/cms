

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
        permanentAddress:"",
        currentAddress:"",
    }

    const [data,setData] =useState(defaults)

  return (
   
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

              <ScrollView className =' h-[95%]'>
              <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      // style={{flex: 1,}}
      enabled>
            <View className="flex items-center justify-center w-[90%] m-2 h-[95%]  overflow-y-scroll ">
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
                label="Dvr.Licence"
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
               {/* permanent address  */}
               <Lbl_Input
                label="Permanent Address"
                phl="Permanent Address"
                value={data.permanentAddress}
                setValue={value => setData({...data, permanentAddress: value})}
              />
              {/* current address  */}
              <Lbl_Input
                label="Current Address"
                phl="Current Address"
                value={data.currentAddress}
                setValue={value => setData({...data, currentAddress: value})}
              />
                
                

               {/* contact number  */}
               <Lbl_Input
                label="Contact #"
                phl=" Personal Phone Number"
                value={data.contact}
                setValue={value => setData({...data, contact: value})}
              />
              {/* emergancy number  */}
              <Lbl_Input
                label="Emergancy Contact"
                phl=" Personal Phone Number"
                value={data.econtact}
                setValue={value => setData({...data, enabledcontact: value})}
              />
                 {/* height  */}
                 <Lbl_Input
                label="Height"
                phl="In feet & inches"
                value={data.height}
                setValue={value => setData({...data, height: value})}
              />
               {/* weight  */}
               <Lbl_Input
                label="Weight"
                phl="In Kgs"
                value={data.weight}
                setValue={value => setData({...data, weight: value})}
              />
           
            {/* date of joing  */}
            <Lbl_Input
                label="Date of Joining Govt. Service "
                phl="01-01-02024"
                value={data.doj}
                setValue={value => setData({...data, doj: value})}
              />
               {/* date of joingNHMP  */}
              <Lbl_Input
                label="Date of Joining nhmp "
                phl="01-01-02024"
                value={data.dojNhmp}
                setValue={value => setData({...data, dojNhmp: value})}
              />
              {/* date of arrival  */}
              <Lbl_Input
                label="Date of Arrival at NHMP College "
                phl="01-01-02024"
                value={data.doa}
                setValue={value => setData({...data, doa: value})}
              />
            {/* proffisional experience */}
            <Lbl_Input
                label="Professional Experience "
                phl="Any Previous Job Experience "
                value={data.experience}
                setValue={value => setData({...data, experience: value})}
              />
           </View>
    </KeyboardAvoidingView>
              </ScrollView>
              <View className ="flex flex-row py-2">
                <Pressable className='p-2 bg-red-600 rounded-md w-1/4  mx-5'>
                  <Text className ="text-center text-white"> Save</Text>
                </Pressable>
                <Pressable className='p-2 bg-blue-600 rounded-md w-1/4  mx-5'>
                  <Text className ="text-center text-white"> Reset</Text>
                </Pressable>
              </View>
          </View>
        </LinearGradient>
      </View>
  );
}



export default SignUp;
