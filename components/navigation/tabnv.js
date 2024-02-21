import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import { View,Text } from 'react-native';
import MyDrawer from './drawernv';
import Home from '../../screens/home';
import SignUp from '../../screens/signUp';
import Notifications from '../../screens/notification';
import Shedules from '../../screens/shedules';
import AntDesign  from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function MyTabs() {
    return (
      
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{ headerStyle: { backgroundColor: '#CCD1D1' } }}
       
        
        >
          
          <Tab.Screen name="Notifications" component={Notifications}
        
            options={{
                headerShown:false,
                tabBarIcon:()=>(<View>
                    <Ionicons name ="notifications-outline" size={25}  />
                </View>)
              
              
          }} />
          <Tab.Screen name="Home" component={Home} 
             options={{
                headerShown:false,
                tabBarIcon:()=>(<View className = "bg-yellow-300 flex items-center justify-center rounded-full  border-yellow-300  w-12 h-12 -top-3 border-2">
                    <AntDesign name ="home" size={30}  />
                </View>)
              }}
          />
          <Tab.Screen name="Shedules" component={Shedules} 
           options={{
            headerShown:false,
            tabBarIcon:()=>(<View>
                <AntDesign name ="calendar" size={25}  />
            </View>)
          }}
          />
        </Tab.Navigator>
      
    );
  }
  