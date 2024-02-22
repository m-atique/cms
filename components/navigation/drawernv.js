import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../../screens/signUp';
import { View,Text, Pressable } from 'react-native';
import Entypo  from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MyTabs from './tabnv';
import Donts from '../../screens/basic/donts';
import Dos from '../../screens/basic/dos';
import Rules from '../../screens/basic/rules';
import Resources from '../../screens/basic/resources';
import { color } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import DrawerContent from './drawerContent';

const Drawer = createDrawerNavigator();

const DrawerTitle =((props)=>(
  <View className  ='flex flex-row gap-2 items-center'>
    
    <MaterialCommunityIcons name ={props.iconName} size={25} color={props.color}  />
    
    <Text>{props.title}</Text>
  </View>
))



// checkbox-outline
const MyDrawer =() =>{
  return (
    // '#CCD1D1'
    <Drawer.Navigator
    drawerContent={props=><DrawerContent {...props} />}
    screenOptions={{ headerStyle: { backgroundColor: 'transparent' },
    drawerStyle: {
      backgroundColor: '#EEEEEE',
      borderWidth:1,
      borderColor:'#0D47A1',
      borderRightRadius:25,
      height:'100%'
    },
    
    }}>
      <Drawer.Screen name="Home" component={MyTabs}
      options={({ navigation }) => ({
        headerTitle:"",
        title:()=>(
            <DrawerTitle  iconName='home' title = "Home"  color='#1A5276' />
        ),
        
        headerRight: () => (
          <View className="flex flex-row px-4 items-center gap-2  justify-center rounded-l-full">
            
               <View>
            <Text className="text-black font-semibold">Muhammad Hassan</Text>
            </View>
            <View className="p-1 rounded-full bg-yellow-300 ">
               <Entypo name ="user" size={20} color={"blue"} />
               </View>
          </View>
        ),
      })}
      
      />
      <Drawer.Screen name="Dos" component={Dos} 
      options={({ navigation }) => ({
        headerTitle:"Dos",
        title:()=>(
            <DrawerTitle  iconName='bookmark-check' title = "Dos"  color='#16A085' />
        ),
      //  headerTitleStyle:{color:'transparent'},
       
       headerRight: () => (
        
           
           <Pressable className="p-1 px-3" onPress={()=>navigation.navigate("Home")}>
              <Entypo name ="home" size={20} color={"black"}  />
              </Pressable>
        
       ),
     })}/>
      <Drawer.Screen name="Donts" component={Donts}  options={({ navigation }) => ({
        headerTitle:"Don'ts",
        title:()=>(
            <DrawerTitle  iconName='bookmark-remove' title = "Don'ts" color='#CB4335' />
        ),
       
       headerRight: () => (
        
           
           <Pressable className="p-1 px-3" onPress={()=>navigation.navigate("Home")}>
              <Entypo name ="home" size={20} color={"black"}  />
              </Pressable>
        
       ),
     })}/>
      <Drawer.Screen name="Leave Rules" component={Rules}  options={({ navigation }) => ({
        headerTitle:"Leave Rules",
        title:(()=>(
          <View className  ='flex flex-row gap-2 items-center'>
            
            <MaterialCommunityIcons name ='book-alert-outline' size={22} color="#212F3D"  />
            
            <Text>Leave Rules</Text>
          </View>
        )),
       
      //  headerTitleStyle:{color:'transparent'},
       
       headerRight: () => (
        
           
           <Pressable className="p-1 px-3" onPress={()=>navigation.navigate("Home")}>
              <Entypo name ="home" size={20} color={"black"}  />
              </Pressable>
        
       ),
     })}/>
      <Drawer.Screen name="Resources" component={Resources} options={({ navigation }) => ({
       headerTitle:"Resources",
        title:()=>(
            <DrawerTitle  iconName='bookshelf' title = 'Recouces' color='#2471A3' />
        ),
      //  headerTitleStyle:{color:'transparent'},
       
       headerRight: () => (
        
           
           <Pressable className="p-1 px-3" onPress={()=>navigation.navigate("Home")}>
              <Entypo name ="home" size={20} color={"black"}  />
              </Pressable>
        
       ),
     })}/>
    </Drawer.Navigator>
    
  );
}
export default MyDrawer