import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RedefinePass from './pages/RedefinePass';
import Index from './pages/Index';

const Stack = createStackNavigator()
const optionsHeader = () => ({
    headerStyle: {
        backgroundColor: "#ffe600",
    }
})

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={optionsHeader}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={optionsHeader}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={optionsHeader}
                />
                <Stack.Screen
                    name="RedefinePass"
                    component={RedefinePass}
                    options={optionsHeader}
                />
                <Stack.Screen
                    name="Index"
                    component={Index}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}