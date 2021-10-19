import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import {COLORS, icons} from "../constants"
import { Home, Catalog ,Videocall} from "../screens";
import { TabActions } from '@react-navigation/routers';

const Tab = createBottomTabNavigator();

// var visible = false;
// const toggleOverlay = () => {
//     if (visible) {
//         visible = false
//     } else {
//         visible = true
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#c8e6f0',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
// });

const cam_overlay = (focused) => {
    // return (
    //     <TouchableHighlight onPress={toggleOverlay}>
    //         <Image
    //         source ={icons.camera}
    //         resizeMode="contain"
    //         style={{
    //             width:25,
    //             height:25,
    //             tintColor: focused ? COLORS.primary: COLORS.secondary
    //         }}
    //         />
    //         <Overlay style={styles.container} isVisible={visible}>
    //             <Text>Hello from Overlay!</Text>
    //         </Overlay>
    //     </TouchableHighlight>
    // )
    return (
            <Image
            source ={icons.camera}
            resizeMode="contain"
            style={{
                width:25,
                height:25,
                tintColor: focused ? COLORS.primary: COLORS.secondary
            }}
            />
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions = {{
                style:{
                    backgroundColor: "transparent",
                }
            }}
        >

            <Tab.Screen
                name = "Inicio"
                component = {Home}
                options={{
                    tabBarIcon:({focused}) =>(
                        <Image
                            source ={icons.home}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? COLORS.primary: COLORS.secondary
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name = "Catalogo"
                component = {Catalog}
                options={{
                    tabBarIcon:({focused}) =>(
                        <Image
                            source ={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? COLORS.primary: COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name = "Videollamada"
                component = {Videocall}
                // component = {placeholder_videocall}
                options={{
                    tabBarIcon:({focused}) =>(cam_overlay(focused))
                    }}
                    />
        </Tab.Navigator>
    )
}

export default Tabs