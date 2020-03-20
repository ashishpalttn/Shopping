import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';  
import React from 'react';
import HomeScreen from '../src/components/Home'
import Category from '../src/components/Categories'
import MyCart from '../src/components/MyCart'
import Wishlist from '../src/components/WishList'
import Acount from '../src/components/Acounts'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}>
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          TabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Caregories" component={Category} />
      <Tab.Screen name="My Cart" component={MyCart}/>
      <Tab.Screen name="Wishlist" component={Wishlist}/>
      <Tab.Screen name="Acount" component={Acount}/>
    </Tab.Navigator>
  );
}
class Rout extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <MyTabs/>
            </NavigationContainer>
        )
    }
}
export default Rout