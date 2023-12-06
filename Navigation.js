import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenuScreen from './screens/MainMenuScreen';
import CharTableScreen from './screens/CharTableScreen';
import GameTableScreen from './screens/GameTableScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainMenu">
                <Stack.Screen name="MainMenu" component={MainMenuScreen} />
                <Stack.Screen name="CharTable" component={CharTableScreen} />
                <Stack.Screen name="GameTable" component={GameTableScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
