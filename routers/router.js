import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
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
        showIcon: true 
    }}>
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
       
        options={{
          showIcon: true ,
          tabBarLabel: 'Home',
          TabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={30} color="#900" />
          )
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