// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContactStackNavigator } from "./StackNavigator";
import { Ionicons } from '@expo/vector-icons';
import Home from "../screens/Home";
import LoginForm from "../screens/LoginForm";
import Contact from "../screens/Contact";
import Developer from "../screens/Developer";
//import TabNavigator from "./TabNavigator";
const Tab = createBottomTabNavigator();
function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Login">
            <Tab.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="ContactScreen"
                component={Contact}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Contact',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="call" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={HomeTabs}
                options={{
                    headerShown: true,
                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}

            />
            <Drawer.Screen
                name="Contact"
                component={Contact}
                options={{
                    headerShown: true,
                    drawerLabel: 'Contact',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="call" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Developer"
                component={Developer}
                options={{
                    headerShown: true,
                    drawerLabel: 'Developer',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="logo-tux" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Login"
                component={LoginForm}
                options={{
                    headerShown: true,
                    drawerLabel: 'Login',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="log-in" color={color} size={size} />
                    ),
                }}

            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
