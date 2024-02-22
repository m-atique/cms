import React from 'react'
import {
   
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Image  
  
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import {  DrawerContentScrollView,
    DrawerItemList,SafeAreaView ,DrawerItems} from '@react-navigation/drawer'
   
const DrawerContent =props=>(

    <DrawerContentScrollView {...props} >
      <LinearGradient colors={['#FAFAFA', '#FAFAFA', '#CFD8DC']} className='h-screen ' >
        <View className ="flex h-36 items-center justify-center gap-4   rounded-md" >
        
                   <Image source={require('../../public/logo.png')} style={{height:60,width:60, borderRadius:50,margin:5, backgroundColor:'blue', borderColor:'blue', borderWidth:1}} />
            <View style={{alignItems:'center'}}>
           
              <Text className='text-xs text-black'>NHMP Training College Sheikhupura</Text>
              </View>
            
             

        </View>
      
    <DrawerItemList {...props}/>
    
    </LinearGradient>
    
  </DrawerContentScrollView>
    )


export default DrawerContent