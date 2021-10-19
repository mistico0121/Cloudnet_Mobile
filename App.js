import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"

import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';

import {Home, Videocall, Catalog, Loginscreen, Product} from './screens'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions = {{
          headerShown: false}}
        initialRouteName ={"Home"}
        >
        <Stack.Screen name = "Home" component = {Tabs}/>
        <Stack.Screen name = "Product" component = {Product}/>
        <Stack.Screen name = "Videocall" component = {Videocall}/>

        <Stack.Screen name = "Catalog" component = {Catalog}/>
        <Stack.Screen name = "Login" component = {Loginscreen}/>

      </Stack.Navigator>

    </NavigationContainer>

  );
}

