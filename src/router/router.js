import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import  IcoM from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';
import Explorer from '../Pages/Explorer';
import Upload from '../Pages/Upload';
import Library from '../Pages/Library';
import Search from '../Pages/search';
import PlayNow from '../Pages/playNow';
import PLayIt from '../Pages/PlayIt';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const  StackNavigator=()=>{
   return(
      <Stack.Navigator screenOptions={{headerShown: true,headerStyle:{
         backgroundColor:"none",
      },
   headerTintColor:"red"}}
      options={({ navigation, route }) => ({
         headerTitle: (props) => <LogoTitle {...props} />,
       })} initialRouteName="explorar">
          <Tab.Screen name='explorar' component={Explorer} options={{headerShown:false}}/>
          <Tab.Screen name='PlayIt' component={PLayIt}/>
           
      </Stack.Navigator>
 
   )
}
export const TabNavigator=()=>{
   
    return(
            <Tab.Navigator screenOptions={{headerShown: false}}
            initialRouteName="Home">
                 <Tab.Screen name='Home' component={StackNavigator} options={{tabBarIcon:({color,size})=>(
                    <Icon name='grid-view' color={color} size={size}/>
                 )}}/>
                 <Tab.Screen name='playnow' component={PlayNow}  options={{tabBarIcon:({color,size})=>(
                    <Icon name='play-circle-outline' color={color} size={size}/>
                 )}}/>
               
                <Tab.Screen  name="upload" component={Upload}  options={{tabBarIcon:({color,size})=>(
                    <Icon name='file-upload' color={color} size={size}/>
                 )}} />
                  <Tab.Screen  name="blblioteca" component={Library}  options={{tabBarIcon:({color,size})=>(
                    <Icon name='library-music' color={color} size={size}  options={{tabBarIcon:({color,size})=>(
                        <Icon name='home' color={color} size={size}/>
                     )}}/>
                 )}} />
                
                <Tab.Screen name='Busca' component={Search}  options={{tabBarIcon:({color,size})=>(
                    <Icon name='search' color={color} size={size}/>
                 )}}/>
          </Tab.Navigator>


    )
}

