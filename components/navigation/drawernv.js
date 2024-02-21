import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../../screens/login';
import Home from '../../screens/home';
import SignUp from '../../screens/signUp';
import { View,Text } from 'react-native';
import Entypo  from 'react-native-vector-icons/Entypo'
import MyTabs from './tabnv';


const Drawer = createDrawerNavigator();

const MyDrawer =() =>{
  return (
   
    <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#CCD1D1' } }}>
      <Drawer.Screen name="Home" component={MyTabs}
      options={({ navigation }) => ({
         title:"",
        
        headerRight: () => (
          <View className="flex flex-row px-4 items-center gap-2">
            
               <View>
            <Text className="text-black font-semibold">Muhammad Hassan</Text>
            </View>
            <View className="p-1 rounded-full bg-yellow-300">
               <Entypo name ="user" size={20} color={"blue"} />
               </View>
          </View>
        ),
      })}
      
      />
      <Drawer.Screen name="SignUp" component={SignUp} />
    </Drawer.Navigator>
    
  );
}
export default MyDrawer