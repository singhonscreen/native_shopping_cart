import React, { Component } from 'react';
import Login from "./assets/components/Login";
import ShoppingCart from './assets/components/ShopingCart'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () =>{
  

  return (
    
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
    name="Login"
    component={Login}
    options={{ title: 'Welcome' }}
    />
    <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
    </NavigationContainer>
    
    
    );
  } 



export default App;